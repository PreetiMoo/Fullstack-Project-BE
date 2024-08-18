const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/user'); 
const authenticateBankerToken = require('../middleware/authenticateBankerToken'); 


router.get('/', authenticateBankerToken, async(req,res) => {
    try{
        const customers = await User.findAll({
            where: { usertype: 'customer' },
            attributes: { exclude: ['password','usertype'] } 
          });
        console.log(customers);
        res.send(customers);
       } catch (err) {
        console.log(err);
        res.send(err)
       }
    })

module.exports = router;