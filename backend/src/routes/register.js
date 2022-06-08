const express = require('express');
const router = express.Router();
const registerControllers = require('../controllers/registerControllers') 
const passport = require('passport'); 

// /passport.authenticate('local', { failureRedirect: '/login' }),
router.post('/register', 
registerControllers.Register) 

module.exports = router  

// router.post('/register', registerControllers.handleNewUser); 
// // router.get("/login", password.authenticate("local"), (req,res) =>{
// //     res.send("Successfully authenticated")
// // }); 
// router.get("/:id/verify:token", async(req, res) => {
//     try {
//         const user= await User.findOne({_id:req.params.id});
//         if(!user) return res.status(400).send({message:"Invalid link"});
//         const token= await Token.findOne({
//             userId: user._id,
//             token:req.params.token
//         });
//         if(!token)return res.status(400).send({message:"Invalid link"});
//         await User.updateOne({_id:user._id, verified: true});
//         await token.remove()
//         res.status(200).send({message:"Email verified successfully"})

//     } catch (error) {
//         res.status(500).send({message:"Internal server error"})
//     }
// })

// module.exports = router; 