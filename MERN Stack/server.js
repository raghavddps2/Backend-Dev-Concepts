const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const items  = require('./routes/api/api')


//We need a mongoDB uri DB Config
const db = require('./config/keys').mongoURI


//Connect to Mongoose
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Mongodb connected");
})
.catch((err)=>{
     console.log(err);
});
//Creating app
const app = express()

//BodyParser middleware
app.use(bodyParser.json())

//here we define to go to the routes.
app.use('/api/items',items)

const PORT = process.env.PORT || 5000


app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
});

