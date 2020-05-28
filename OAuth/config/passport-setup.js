const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require('./keys');
const User = require('../models/user');

//Calling with the user record, taaking a piece of information and 
passport.serializeUser((user,done)=>{
    //This is gonna be the mongoDB id.
    done(null,user.id);

})

//deserializing the cookie.
passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user);
    })
});

 

//Using the passport package and creating an instance of the GoogleStartegy 

passport.use(new GoogleStrategy({

    //Options for the google strategy.
    clientID: keys.google.clientId,
    cientSecret: keys.google.appSecret,
    callbackURL:'http://localhost:3000/auth/google/redirect',
},(accessToken, refreshToken, profile, done) => {
    
    //check if user already exissts in teh database.
    User.findOne({googleId:profile.id}).then((newUser)=>{
        if(newUser){
            //already have the user
            console.log(newUser);
            done(null,newUser);
        }
        else{
            new User({
                username: profile.displayName,
                googleId: profile.id,
                thumbnail: profile._json.image.url
            }).save().then((newUser)=>{
                console.log("New User Created: "+newUser);
                done(null,newUser)
            }).catch((err)=>{ 
                console.log("Some error occured");
            });
        }
    })




})
);


/**
 * Working
 * 
 * first go to our handler,
 * then open up the consent screen,
 * this redirect somewhere'
 * Here middleware is passport callback function,
 * then comes back to the redirect step
 */