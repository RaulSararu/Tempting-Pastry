const express = require('express')
const User = require('../models/User')
const router = express.Router()

const sendEmail = require('') 

router.post('/register', async (req, res) => {

    try {
        
        console.log('req.body is', req.body)

        const {email, username, pass} = req.body

        if (!email || !username || !pass) return res.send({success: false, errorId: 1})

        const newUser = new User(req.body)

        const user = await newUser.save()

        const token = await user.generateToken('1d');
        // send an email to the user that just got registered
        sendEmail(user.email, token)

        console.log('Register: user created is', user)

        res.send({success: true})
    } catch (error) {
        
        console.log('Register ERROR:', error.message)
        res.send(error.message)
    }
})

