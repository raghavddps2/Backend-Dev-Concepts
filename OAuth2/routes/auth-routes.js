const express = require('express');
const router = express.Router();
const passport = require('passport')
const passportSetup = require('../config/passport-setup');
//auth login
router.get('/login',(req,res)=>{
    res.render('login',{user:req.user}); 
});

//google login
router.get('/logout',(req,res)=>{
    //Handle with passport js

    //Simply use the logout function.
    req.logout()
    res.redirect('/')
});

//auth logout(Autheticating with google strategy)
router.get('/google',passport.authenticate('google',{
    scope: ['profile']
}));

//callback route for google to redirect to
//it sees the code, this time in the uri, and goes 
// to the callback function 
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    //we receive a code from google.
    // res.send(req.user);
    res.redirect('/profile')
});

module.exports = router;

