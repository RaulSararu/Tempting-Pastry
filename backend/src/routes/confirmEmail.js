const express = require('express');
const router = express.Router();
const confirmation = require('../controllers/confirmationControllers') 
const verify = require('../controllers/confirmationControllers') 
const testEmailSend = require('../utils/sendEmail')
// router.post('/confirmEmail', confirmationControllers.sendConfirmationEmail) 
// router.post('/confirmEmail', testEmailSend) 

router.post('/confirmEmail', confirmation.sendConfirmationEmail ) ; 
router.get('/:token', verify.tokenVerification)   

module.exports = router   