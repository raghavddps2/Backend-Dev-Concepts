const express = require('express');
const app = express()
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose')
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport')
const profileRoutes = require('./routes/profile-routes');

//setting up the vieew engine
app.set('view engine','ejs')

//cookie (This happens when the user is logged in)
app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: [keys.session.cookieKey]
}));

//Initialize passport
app.use(passport.initialize());
app.use(passport.session());



//connect to mongodb
mongoose.connect(keys.mongodb.dbURI,{ useUnifiedTopology: true,useNewUrlParser: true }, (err)=>{
    if(err){
        console.log("SOme error");
    }
    else{
        console.log("MOngodb connected");
    }
})

//set up routes
app.use('/auth',authRoutes)
app.use('/profile',profileRoutes)


//Create home route
app.get('/',(req,res)=>{
    res.render('home',{user:req.user});
});

//listen to the routes
app.listen(3000,()=>{
    console.log("Server started at PORT 3000");
});
