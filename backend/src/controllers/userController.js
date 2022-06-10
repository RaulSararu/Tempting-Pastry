const User = require('../models/User')
const Verification = require('../models/UserVerification')

exports.Verification = async (req, res) => {
    const saltRounds = 10;
    const hashedPassword = hash(password, saltRounds);
  
    try {
      const newUser = new PendingUser({
        email,
        username,
        password: hashedPassword,
        verified: false,
      });
      await newUser.hashedPassword();
      await newUser.save();
      await sendVerificationEmail({
        toUser: newUser.data,
        hash: newUser.data_id,
      });
      res.send("You have been registered.Check your email");
    } catch (error) {
      res.status(422).send(error.message);
    }
  };

  exports.changePassword = async (req, res) => {
    console.log("Change Password");
    try {
      const { pass, token } = req.body;
      console.log("body is", req.body);
      // 1. verify the token  
      const verifiedToken = await User.getPayload(token) 
      console.log("verified token is", verifiedToken);
      const user = await User.findByIdAndUpdate(verifiedToken.id);
      if (user) {
        user.pass = pass;
        user.resetToken = "";
        const userSaved = await user.save();
        console.log("user is ", userSaved);
      }
  
      res.send({ success: true });
    } catch (error) {
      console.log("change pass ERROR:", error.message);
      res.send(error.message);
    }
  }; 


  exports.Profile = async (req, res) => {
    try {
      console.log("req.body is", req.body);
      console.log("req.file is", req.file);
  
      const { email, username, _id } = req.body;
  
      if (!(email || username)) return res.send({ success: false, errorId: 1 });
  
      req.body.image = "/uploads/" + req.file.filename;
  
      const user = await User.findByIdAndUpdate(_id, req.body, {
        new: true,
      }).select("-__v -pass");
  
      console.log("Profile: user is", user);
  
      if (!user) return res.send({ success: false, errorId: 2 });
  
      res.send({ success: true, user });
    } catch (error) {
      console.log("Register ERROR:", error.message);
      res.send(error.message);
    }
  };
  