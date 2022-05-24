const express = require('express');
const router = express.Router();
const registerControllers = require('../controllers/registerControllers')


router.post('/register', registerControllers.handleNewUser); 
// router.get("/login", password.authenticate("local"), (req,res) =>{
//     res.send("Successfully authenticated")
// }); 


module.exports = router; 