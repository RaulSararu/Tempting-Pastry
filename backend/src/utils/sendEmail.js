const mailer = require("nodemailer");
require("dotenv").config();
const { google } = require("googleapis");

const OAuth2 = google.auth.OAuth2;
const OAuth2_client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.REDIRECT_URI
);
OAuth2_client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
const accessToken = OAuth2_client.getAccessToken(); 

async function sendEmail(email, subject, text) {
  console.log("Email is", email.email);
  console.log("Subject is", subject);
 
  try {
    const transporter = mailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.GOOGLE_USER,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken, 
        
      },
    });
    await transporter.sendMail({
      to: email.email,
      from: process.env.GOOGLE_USER,  
      subject: subject,
      html: `<a href="${text}"> Please confirm your email</a>`,
    });
    console.log("Email send successfully");
  } catch (error) {
    console.log("Email not send");
    console.log(error);
  }
}

module.exports = sendEmail;
