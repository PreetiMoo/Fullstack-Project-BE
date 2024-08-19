const express = require('express')
const bcrypt = require('bcrypt')
const crypto = require('crypto');
const router = express.Router()
const user = require('../models/user')


const SECRET_KEY = process.env.PASSWORD_SECRET_KEY;

router.post('/cust', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Username, email, and password are required' });
        }

        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        
        const existingUserByUsername = await user.findOne({ where: { username } });
        if (existingUserByUsername) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        
        const existingUserByEmail = await user.findOne({ where: { email } });
        if (existingUserByEmail) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        
        const hash = crypto
            .createHmac('sha512', SECRET_KEY)
            .update(password)
            .digest('hex');
        
        
        const newUser = await user.create({
            username,
            email,
            password: hash,
            usertype: user.USER_TYPE.CUSTOMER,
            balance: 0
        });

        res.status(201).json({ message: 'Customer added' });
    } catch (error) {
        res.status(500).json({ error: 'Error creating customer' });
    }
});

module.exports = router


