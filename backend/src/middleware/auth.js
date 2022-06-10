const jwt = require('jsonwebtoken')
const User = require('../models/IUser')

module.exports = async(req, res, next) =>{
    try {
     
        const token = req.cookies.cookiename
        console.log('auth here, token is', token);
        if(!token) return res.status(400).send({success:false})

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log('auth : decoded is', decoded);
        if(!decoded) return res.status(400).send({success:false}) 

        const user = await User.findById(decoded.id)
        if(!user) return res.send({success:false})

        next()

    } catch (error) {
        res.status(400).send(error.message)
    }
} 