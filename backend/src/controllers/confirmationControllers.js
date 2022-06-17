const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const User = require('../models/User') 
const crypto = require('crypto');
const Token = require('../models/Token')
const sendEmail = require("../utils/sendEmail");
const { log } = require("console");
require("dotenv").config();

const URL = process.env.PRODUCTION
  ? process.env.URL_PRODUCTION
  : process.env.URI_DEV;
 

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_USER, 
    pass: process.env.GOOGLE_PASSWORD,  
  },
});

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready for messages");
//     console.log(success);
//   }
// });

exports.tokenVerification = async function (req, res) {
  try {
		const user = await User.findOne({ token: req.params.token }); 
		if (!user) return res.status(400).send({ message: "Invalid link" });

		// const token = await Token.findOne({
		// 	userId: user._id,
		// 	token: req.params.token,
		// });
		// if (!token) return res.status(400).send({ message: "Invalid link" });  

		await User.findByIdAndUpdate(user._id,{ verified: true }); 
		// await token.remove(); 

		res.status(200).send({ message: "Email verified successfully" });
	} catch (error) {
    console.log("Message/confrirm email", error.message ); 
		res.status(500).send({ message: "Internal Server Error" });
	}

} 


// exports.sendConfirmationEmail = async function (req, res)  { 
// 	try {
// 		const { error } = validate(req.body);
// 		if (error)
// 			return res.status(400).send({ message: error.details[0].message });

// 		let user = await User.findOne({ email: req.body.email });
// 		if (user)
// 			return res
// 				.status(409)
// 				.send({ message: "User with given email already Exist!" });

// 		const salt = await bcrypt.genSalt(Number(process.env.SALT));
// 		const hashPassword = await bcrypt.hash(req.body.password, salt);

// 		user = await new User({ ...req.body, password: hashPassword }).save();

// 		const token = await new Token({
// 			userId: user._id,
// 			token: crypto.randomBytes(32).toString("hex"),
// 		}).save();
// 		const url = `${process.env.BASE_URL}/users/${user.id}/verify/${token.token}`;
// 		await sendEmail(user.email, "Verify Email", url); 

    

// 		res
// 			.status(201)
// 			.send({ message: "An Email sent to your account please verify" });
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).send({ message: "Internal Server Error" });
// 	}
// } 

//------------------------------------------------------------------------------------------

exports.sendConfirmationEmail = function ({ User, hash }) {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      host:process.env.HOST,
      service:process.env.SERVICE,
      post: Number(process.env.EMAIL_PORT), 
      secure: Boolean(process.env.SECURE),
      service: "gmail",
      auth: {
        user: process.env.GOOGLE_USER,
        pass: process.env.GOOGLE_PASSWORD,
      },
    });  
    const message = {
      from: process.env.GOOGLE_USER,
      to: process.env.GOOGLE_USER,
      subject: "Activate your account",
      html: `
            <h3> Hello ${User.username} </h3>
            <p>Thank you for registering in our App.
            Just one more step...
            <p>To activate your account please follow this link: 
            <a target="_" href="${process.env.BASE_URL}/../../EmailConfirm/${hash}">${process.env.DOMAIN}/activate </a></p>
            <p>Cheers</p>
            <p>Your Tempting Pastry</p>
            </p>
            `,
    };

    transporter.sendMail(message, function (err, info) {
      if (err) {
        rej('Error Sending Email', err);
      } else {
        res(info);
      }
    });
  });
};

