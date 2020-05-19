const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const Joi = require('joi');
const app = express()

// Implies, we are using middleware.
app.use('/public',express.static(path.join(__dirname,'static')));
//Middleware again
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.set('view engine','ejs');




// app.get('/',(request,response)=>{
//     response.sendFile(path.join(__dirname,'static','index.html'));
// });

app.get('/:userQuery',(request,response)=>{
    response.render('index',{data: {userQuery: request.params.userQuery,searchResults: ['book1','book2','book3','book4']}});
});


// app.post('/',(req,res)=>{
    
//     //We receive a key value pair.
//     console.log(req.body);
    
//     //databse work here.
//     res.send("  Successfully posted data");
// });

app.post('/',(req,res)=>{
    console.log(req.body);
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    });
    //object we wanna validate
    //schema
    //call back functions
    Joi.validate(req.body,schema,(err,result)=>{
        if(err){
            res.send('Some error occured');
        }
        else{
            console.log(result);
            res.send('Successfully posted data');
        }
    })
});

app.get('/example',(request,response)=>{
    response.send('hitting example route');

});

app.get('/example/:name/:age',(request,response)=>{

    //parameters.
    console.log(request.params);
    name = request.params.name;
    age = request.params.age

    //String query.
    console.log(request.query)
    response.send(`Example for route params with name ${name} and age as ${age}`);

});

app.listen(3000);

