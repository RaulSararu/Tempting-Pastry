const mongoose = require("mongoose");
const jwt = require('jsonwebtoken') 


const User = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please add a name"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
  },

  address: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  verified: {
    type: Boolean,
    default: false,
  },

  token:{
    type: String 
  }, 
  age: {
    type: Number
  }, 
  image:{
    type:String 
  }
});


// Middleware 'pre'; before save to user collection
User.pre('save', function(next){
  console.log('PRE here')

  const user = this;
 
  if(user.isModified ('pass')) {
      
      bcrypt.genSalt(saltRounds, function(err,salt ) {
  
          if(err) return next(err);

          bcrypt.hash(user.pass, salt, function(err, hash) {

              if(err) return next(err)
              user.pass = hash;
              next(); 
          })

      })
  } else {
      next() 
  }
  
})

User.methods.comparePassword = async (providedPass, dbPass)=> {
return await  bcrypt.compare( providedPass, dbPass)
}

User.methods.generateToken = async function (expiration, dbFiled) {
  const user = this;
  const token = jwt.sign({ id: user._id.toHexString() }, process.env.SECRET, {
    expiresIn: expiration
  });
  if(dbFiled) {
    user[dbFiled] = token;
  await user.save(); 
  return user;
} else {
  return token
}
}; 


User.statics.getPayload = async token => {

  try {
      return jwt.verify(token, process.env.SECRET)
      
  } catch (error) {
      return error.message
  }
}
module.exports = mongoose.model("User", User);  
