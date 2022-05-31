const express=require('express');
const router=express.Router();

const mailControllers= require('../controllers/mailControllers')
router.post('/sendmail',mailControllers.sendMail); 

module.exports = router  