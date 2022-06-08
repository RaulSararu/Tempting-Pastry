const express = require('express')
const mongoose = require('mongoose'); 
const cors = require('cors');
const session = require('express-session'); 
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportLocal = require("passport-local").Strategy; 
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;

const IUser = require("./src/models/IUser")
const User =require('./src/models/User')  
const app= express(); 

// errorHandler
const{errorHandler} = require('./src/middleware/errorMiddleware');
app.use(errorHandler);

require("dotenv").config()
const PORT= process.env.PORT || 6000; 
 
app.use(express.json());

app.get("/", (req, res) => res.send("Tempting Pastry")) 

// MongoConnect
const connectToDb = require('./src/config/db');
connectToDb()
const {application} = require('express');


//Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());
app.use(cors({origin : "http://localhost:3000", credentials: true}))
app.use(
    session({
        secret: "secretcode",
        resave: true, 
        saveUninitialized: true,

    })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());  

passport.serializeUser((user, done) => {
  return done (null, user._id);
});
passport.deserializeUser((id, done) => {
  User.findById(id,(err,doc) =>{
    return done (null, doc);
  });
 
});

//Login with Google
//Create a user in MongoDB
//Serialize & Deserialize - find tht user in the database an return him 

//Passport local
require('./src/config/passportConfig')(passport); 

// Routes

app.use('/register', require('./src/routes/register'))
app.use('/login', require('./src/routes/login')) 
app.use('/logout', require('./src/routes/logout')) 

//Google strategy
passport.use(new GoogleStrategy({
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`, 
    callbackURL: "/auth/google/callback" 
  },
  function(accessToken, refreshToken, profile, cb) { 
      //Called on Successful Authentication
      //Insert Into Database
      User.findOne({googleId: profile.id}, async (err, doc) =>{ 
          if(err) {
            return cb(err,null); 
          }

          if(!doc) {
              //create doc
            const newUser = new User({
                googleId: profile.id,
                username: profile.name.givenName
            });
            await newUser.save();
            cb(null, newUser);
          } 
          cb(null, doc); 
      });
  }));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] })), 

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000');
  }),  

// // Twitter Strategy

passport.use(new TwitterStrategy({
    consumerKey: `${process.env.TWITTER_CLIENT_ID}`,
    consumerSecret:`${process.env.TWITTER_CLIENT_SECRET}`, 
    callbackURL: "http://localhost:5000/auth/twitter/callback"
}, 

  function(accessToken, refreshToken, profile, cb) {
    //Called on Successful Authentication
    //Insert Into Database
    User.findOne({twitterId: profile.id}, async (err, doc) =>{ 
      if(err) {
        return cb(err,null);
      }

      if(!doc) {
          //create doc
        const newUser = new User({
            twitterId: profile.id,
            username: profile.username
        });
        await newUser.save();
        cb(null, newUser);
      } 
      cb(null, doc); 
  });
})); 

  app.get('/auth/twitter',
  passport.authenticate('twitter'));

app.get('/auth/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000'); 
  });

app.use("/users", require("./src/routes/register")); 

 app.get("/getuser",(req, res) =>{
    res.send(req.user);
 })  

 app.get("/logout", (req,res) =>{
   if(req.user){
     req.logout();
     res.send("Success")
   }
 })

 app.use('/mail', require('./src/routes/mail'))  



 // Starting the server  
app.listen("5000", ()=> {
    console.log("Server is running");
}); 