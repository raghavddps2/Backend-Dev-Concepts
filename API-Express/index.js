const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
var multer = require('multer');
upload = multer()
app = express();

//This is for json data
app.use(bodyParser.json())

//This is for urlencoded one
app.use(bodyParser.urlencoded({ extended: true })); 

//for static files, to be looked in the public folder.
app.use(express.static('public'))

// for parsing multipart/form-data
app.use(upload.array()); 
//Now, this is gonna use the routes.(Middleware)
app.use('/api',routes)

//error handling with custom middleware, when request fails, it happens.
app.use((err,req,res,next)=>{
    //We can specify as to what status code we want to send.
    //422 for unprocessable identity.
    res.status(422).send({'message':err})
}); 

//To suppress some warnings.
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

db = mongoose.connect('mongodb://127.0.0.1:27017/ninjadb',{ useNewUrlParser: true , useUnifiedTopology: true }).then(()=>{
    console.log("Database connected");
})
.catch((err)=>{
    console.log(err)
});

//Making a GET request.
app.get('/',(req,res)=>{
    console.log('GET requests');
    
    //sending a response
    res.send({message:'success'})
    //ending the request.
    res.end()
});

//

const PORT =process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`Listening for requests at PORT ${PORT}`);
});