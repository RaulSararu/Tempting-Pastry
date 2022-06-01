const mongoose = require("mongoose");

const user = new mongoose.Schema({
 
  username: {
    type:String,
    required: [true, 'Please add a name']
  },
  email:{
    type: String,
    required:[true, "Please add an email"] 

  }, 
  
  address: {
    type: String,
  }, 
  password: {
    type:String,
    required: true
  } , 
  date:{
    type: Date, 
    default: Date.now
  }, 
  verified:{
    type: Boolean, 
    default: false
  }, 
});

module.exports = mongoose.model("User", user);