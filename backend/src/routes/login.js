const express = require('express');
const router = express.Router();
const registerControllers = require('../controllers/registerControllers') 

router.post('/login', registerControllers.Login)
module.exports = router  