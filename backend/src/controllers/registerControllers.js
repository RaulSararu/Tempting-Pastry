const User = require("../models/User")
const passport = require("passport");
const bcrypt = require("bcryptjs"); 
const Token = require("../models/Token");
const sendEmail = require("../utils/sendEmail");

 
exports.Login= (req, res, next) =>{
    console.log('Register here: body is', req.user) 
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
          req.logIn(user, (err) => {
            if (err) throw err;
            // res.send("Successfully Authenticated");
            res.send({success: true, user: user}); 
            console.log(req.user);
          });
        }
      })(req, res, next);
    }; 

    passport.serializeUser((user,done) =>{
        return done(null, user); 
    }); 
    passport.deserializeUser((user ,done) =>{
        return done(null, user); 
    })

exports.Register= async (req,res) => {
    
    // check if there is such a user in the system
    try {
      const userInDb = await User.findOne({username: req.body.username})

      if (userInDb) return res.send({success: false, errorId:1})

      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
      await newUser.save(); 
      sendEmail(newUser, 'confirmation email')   
      res.send({success:true}); 

    } catch (error) {
      console.log("Error in register", error.message) 
      res.send({success: false, error: error.message}) 
    }
    
    // User.findOne({ username: req.body.username }, async (err, doc) => {
    //     if (err) throw err;
    //     if (doc) res.send("User Already Exists");
    //     if (!doc) {
    //       const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
    //       const newUser = new User({
    //         username: req.body.username,
    //         email: req.body.email,
    //         password: hashedPassword,
    //       });
    //       await newUser.save();
    //       sendEmail(user.email)
    //       res.send("User Created"); 
    //     }
    //   });  
    }  
