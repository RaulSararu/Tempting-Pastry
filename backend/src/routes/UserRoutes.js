const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const multer = require("multer")
const upload = multer({dest: "./src/uploads"})

router.patch('/profile', upload.single("image"),userController.Profile)

router.get('/verification', userController.Verification)

router.post('/changePassword', userController.changePassword) 

module.exports = router  