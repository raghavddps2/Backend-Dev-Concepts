const express = require('express');
const router = express.Router()
const Ninja = require('../models/ninja')
//Get alist of ninjas from the database.
router.get('/ninjas',(request,response,next)=>{
    //Query to get a;; the ninjas.
    // Ninja.find({}).then((ninjas)=>{
    //     response.send(ninjas);
    // })

    //Here, we will use the url parameters which is totally different from request parameters.
    latitude = request.query.latitude
    longitude = request.query.longitude
    // console.log(latitude,longitude)
    Ninja.aggregate().near({
        near: [parseFloat(longitude), parseFloat(latitude)],
        maxDistance: 100000,
        spherical: true,
        distanceField: "dist.calculated"
       }
    ).then((ninjas)=>{
        console.log("sending ninjas to service");
        response.send(ninjas);
    }).catch((err)=>{
        console.log("Some error occured")
        response.send({"message":err})
    });
    
});

//Post a new ninja
router.post('/ninjas',(request,response,next)=>{

    //creating a new ninja instance based on the data sent.
    var ninja = new Ninja(request.body);

    //saving to the database and sending the same to the user
    ninja.save().then((ninja)=>{
        console.log("Data saved successfully");
        response.send(ninja)
    })
    //THis goes to the middleware
    .catch(next)
});



//Update a ninja. new: true will return the new value.
router.put('/ninjas/:id',(request,response,next)=>{
   id = request.params.id
   updatedBody = request.body
   Ninja.findByIdAndUpdate({'_id':id},updatedBody,{new:true})
   .then((ninja)=>{
        console.log("Updating ninja")
        response.send(ninja)    
   })
   .catch((err)=>{
        console.log("Some error occured");
        response.status(422).send({"message":err})
   })
});

//Remove a list of ninjas
router.delete('/ninjas/:id',(request,response,next)=>{
    id = request.params.id
    Ninja.findByIdAndRemove({_id:id}).then((ninja)=>{
        response.send(ninja);
    })
    .catch((err)=>{
        response.status(422).send({"message":err})
    });
})

module.exports = router;
