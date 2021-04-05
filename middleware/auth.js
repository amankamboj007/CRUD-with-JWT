const router = require('express').Router();

const User = require('../model/model')

const jwt = require('jsonwebtoken')


router.post('/login',async(req,res)=>{
    //check email exists or not 
    const emailexist = await User.findOne({email:req.body.email})
    if(!emailexist) 
    {return res.send(400).send('Email does not exists')
    }
    else{
    const validPass = await User.findOne({password:req.body.password})
    if(!validPass) return res.status(400).send('Invalid pass')
    }
    //create an assign a token 
    const token = jwt.sign({_id:emailexist.id},process.env.Token_secret)
    
    res.header('auth-token',token).send(token);
    console.log('user received token')


    // res.send('LOGGED IN!')
})
module.exports = router;