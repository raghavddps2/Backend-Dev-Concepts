const express = require('express');
const router = express.Router();


const authCheck = (req,res,next)=>{
    if(!req.user ){
        //is user is not logged in , we will redirect him.
        res.redirect('/auth/login')
    }
    else{
        next();
    }
}

//So, authCheck is fired, when it comes here.
router.get('/',authCheck,(req,res)=>{
    // res.send('You are logged in, this is your profile - '+req.user.username);
    res.render('profile',{user:req.user})
});

module.exports = router;