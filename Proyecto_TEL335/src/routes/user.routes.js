const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

//login
router.post('/login', async (req, res) =>{
    res.json({status: 'logged'});
});

//signup
router.post('/signup', async (req, res) =>{
    const {name, username, email, password} = req.body;

    try{
        const user = await User.signup(name, username, email, password)

        res.status(200).json({email, user})

    }catch(error){
        
        res.json({status: error});
    }


    
});

module.exports = router;