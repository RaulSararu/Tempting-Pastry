const mailer = require('nodemailer')

module.exports = async (email, subject, text) => {
   try {
      const transporter= mailer.createTransport({
         host:process.env.HOST,
         service:process.env.SERVICE,
         post: Number(process.env.EMAIL_PORT), 
         secure: Boolean(process.env.SECURE), 
         auth:{
            user:process.env.GOOGLE_USER, 
            pass: process.env.GOOGLE_PASSWORD 
         }
      }); 
      await transporter.sendMail({
         from: process.env.GOOGLE_USER, 
         to:email,
         subject: subject, 
         html: `<a href="${text}"> Please confirm your email</a>` 
      });
      console.log("Email send successfully");
   } catch (error) {
      console.log("Email not send");
      console.log(error);
   }
}