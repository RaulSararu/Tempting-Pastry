const express = require('express')
const mongoose = require('mongoose'); 
const cors = require('cors');
const session = require('express-session'); 
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportLocal =require('./src/config/passportConfig')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;

const IUser = require("./src/models/IUser")
const User =('./src/models/User')  
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
require('./src/config/passportConfig')(passport); 

//Routes
app.post("/login",(req,res, next)=> {
    passport.authenticate('local', (err, user, info) =>{
        if(err) throw err;
        if(!user) res.send("No user exist");
        else{
            req.logIn(user, err =>{
                if(err) throw err;
                res.send({success: true, user: user}); 
                console.log(req.user);
               }) 
        } 
    })(req, res, next);
});



passport.serializeUser((user,done) =>{
    return done(null, user); 
}); 
passport.deserializeUser((user ,done) =>{
    return done(null, user); 
})
//Username
//ID


//Passport 




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
          if(!doc) {
              //create doc
            const newUser = new User({
                googleId: profile.id,
                username: profile.name.givenName
            });
            await newUser.save()
          } 
      });
    
    cb(null, profile); 
  }
));

// Twitter Strategy

passport.use(new TwitterStrategy({
    consumerKey: `${process.env.TWITTER_CLIENT_ID}`,
    consumerSecret:`${process.env.TWITTER_CLIENT_SECRET}`, 
    callbackURL: "/auth/twitter/callback"
}, 

  function(accessToken, refreshToken, profile, cb) {
    //Called on Successful Authentication
    //Insert Into Database
   
  cb(null, profile); 

  }
));  

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] })), 

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }), 

  app.get('/auth/twitter',
  passport.authenticate('twitter'));

app.get('/auth/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http:localhost:5000'); 
  });

app.use("/users", require("./src/routes/register")); 

 app.get("/user",(req, res) =>{
    res.send(req.user);
 })  

 // Starting the server  
app.listen("5000", ()=> {
    console.log("Server is running");
}); 