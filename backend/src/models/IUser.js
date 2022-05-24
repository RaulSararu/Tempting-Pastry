const mongoose = require ('mongoose');

const IUser = new mongoose.Schema({
    googleId:{
        required: false,
        type: String
    },
    twitterId:{
        required: false,
        type: String
    },
    username: {
        required: true, 
        type: String
    }, 
    password:{
        required: true, 
        type: String
    }
    // __v: -1,
    // _id: ""
})  
module.exports = mongoose.model("IUser", IUser); 