const express = require('express');
const router = express.Router();
const confirmationControllers = require('../controllers/confirmationControllers') 
const testEmailSend = require('../utils/sendEmail')
// router.post('/confirmEmail', confirmationControllers.sendConfirmationEmail) 
router.post('/confirmEmail', testEmailSend) 

module.exports = router  