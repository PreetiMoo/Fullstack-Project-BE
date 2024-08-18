const express = require('express')
const bcrypt = require('bcrypt')
const crypto = require('crypto');
const router = express.Router()
const user = require('../models/user')


const SECRET_KEY = process.env.PASSWORD_SECRET_KEY;

router.post('/cust', async (req, res) => {
    try {
        // Hash the password with the secret key
        const hash = crypto
            .createHmac('sha512', SECRET_KEY)
            .update(req.body.password)
            .digest('hex');
        
        // Create the user with the hashed password
        const User = await user.create({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            usertype: user.USER_TYPE.CUSTOMER,
            balance: 0
        });

        res.status(201).json({ Message: "Customer added" });
    } catch (error) {
        res.status(500).json({ error: 'Error creating customer' });
    }
});

module.exports = router


