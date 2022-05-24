const User = require('../models/User');
const bcrypt = require('bcrypt');

const handleNewUser= async (req,res)=> {
    try {
        const {username, password, email} =req.body;
        console.log("Print the data", req.body); 
        if(!username || !password || typeof username !=="string" ||
        typeof password !=='string'||!email ) { 
        res.send("Improper Values"); 
        return;  } 
    
        User.findOne({username}, async (err,doc) => {
            if(err) throw err;
            if(doc) res.send("User already exist");
            if(!doc) {
                const hashedPassword = await bcrypt.hash(req.body.password, 10)
                const newUser = new User({
                    username,
                    email,
                    password: hashedPassword 
                });
                await newUser.save();
                res.send("User Created")
            }
        });
        
    } catch (error) {
        console.log('Error in the register', error.message)
        return res.send ("Error in register") 
    }
  
}; 



module.exports = { handleNewUser }; 