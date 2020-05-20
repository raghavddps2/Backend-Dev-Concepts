const express = require('express');
const mongoose = require('mongoose');
const User = require("./model/user");
require('dotenv/config')
mongoose.connect(process.env.DB_CONNECTION_STRING,(req,res)=>{
    console.log(mongoose.connection.readyState)
    console.log("COnnected to the database");
})
const app = express();

const customMiddleware = (req,res,next) =>{
    console.log("Welcome to my middleware");
    next();
}
// app.use(express.json)
app.use(customMiddleware)

app.get('/',(req,res)=>{
    res.send("First request!!");
});


app.get('/users',(req,res)=>{
    let users = [
        "Pawan","Super Guy"
    ];
    res.send({"users":users});
});

app.post('/create-user',(req,res)=>{
   try{
       const myUser = new User({name:"raghav",age:10})
       myUser.save();
       res.send(myUser);
   }
   catch(err){
       res.send({"message":err});
   }
});

//Following other types of request we can have
// app.delete('/',(req,res)=>{

// });

// app.patch('/',(req,res)=>{

// });
// app.put('/',(req,res)=>{

// });

app.listen(3000,(err)=>{
    if(err){
        console.log("error occured");
    }
    else{
        console.log("Listening to PORT 3000");
    }
    
});
