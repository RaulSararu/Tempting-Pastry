const express = require('express')

const router = express.Router()
const logoutControllers= require('../controllers/logoutControllers')

router.get('/logout',logoutControllers.Logout) 
module.exports = router  
