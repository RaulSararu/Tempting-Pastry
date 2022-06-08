const User =require("../models/User")
const passport = require("passport");
const bcrypt = require("bcryptjs"); 
const passportLocal = require("passport-local").Strategy;

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


exports.Register=(req,res) => {
    
    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
          const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
          });
          await newUser.save();
          res.send("User Created");
        }
      });
    } 
