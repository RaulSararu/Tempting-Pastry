const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
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
        const token=req.params.token
        
        
    } catch (error) {
        
    }

}

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
            <a target="_" href="${URL}/../../EmailConfirm/${hash}">${process.env.DOMAIN}/activate </a></p>
            <p>Cheers</p>
            <p>Your Tempting Pastry</p>
            </p>
            `,
    };

    transporter.sendMail(message, function (err, info) {
      if (err) {
        rej('Error Sedning Email', err);
      } else {
        res(info);
      }
    });
  });
};
