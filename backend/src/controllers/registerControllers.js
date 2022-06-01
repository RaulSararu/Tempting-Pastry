const {User, validate} = require('../models/User');
const bcrypt = require('bcrypt');
const Token = require("../models/Token");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto"); 

const handleNewUser= async (req,res)=> {
    try {
        const {username, password, email} =req.body;
        console.log("Print the data", req.body); 
        if(!username || !password || typeof username !=="string" ||
        typeof password !=='string'||!email ) { 
        res.send("Improper Values"); 
        return;  } 
    
      let user= await User.findOne({username}, async (err,doc) => {
            if(err) throw err;
            if(doc) res.send("User already exist");
            if(!doc) {
                const hashedPassword = await bcrypt.hash(req.body.password, 10)
                const newUser = new User({
                    username,
                    email,
                    password: hashedPassword 
                });
               user= await newUser.save();
                const token = await new Token({
                    userId: user._id,
                    token: crypto.randomBytes(32).toString("hex")
                }).save();
                const url =`${process.env.BASE_URL}users/${user._id}/verify/${token.token}`;
                await sendEmail(user.email, "Verify Email", url); 

                res.send({message:"An Email sent to your account, please verify"})
            }
        });

    } catch (error) {
        console.log('Error in the register', error.message)
        return res.send ("Error in register") 
    }
  
}; 

module.exports = { handleNewUser }; 