const nodeMailer=require('nodemailer');
const {google} = require("googleapis");
require("dotenv").config() 


const OAuth2= google.auth.OAuth2
const OAuth2_client= new OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, 
    process.env.REDIRECT_URI)
OAuth2_client.setCredentials({refresh_token:process.env.REFRESH_TOKEN})

function sendmail(req, res) {  
    console.log('req body', req.body);
    let userMail=req.body.userEmail; 
    let userMessage=req.body.message; 
    const accessToken = OAuth2_client.getAccessToken()


    const transport = nodeMailer.createTransport({
        service:'gmail', 
        auth: {
            type:'OAuth2', 
            user: process.env.GOOGLE_USER, 
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken
        }
    })


    const mail_options ={
        from: `Tempting-Pastry <${process.env.GOOGLE_USER}>`, 
        to: process.env.GOOGLE_USER,//userMail, 
        subject: "A message from Tempting-Pastry", 
        text:`${userMail} ${userMessage}`, 
    }
    try {
        transport.sendMail(mail_options, function(error, result){
                if(error) {
                    console.log('Error', error)
                } else {
                    console.log('Success:', result);
                }
                transport.close()
            }) 
            
    } catch(error) {
        console.log('Error', error.message)  
    }
  }

module.exports= sendmail;



// exports.sendMail=(req,res)=>{ 
//     const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.GRID_API) 
// const msg = {
//   to: 'temptingpastry@gmail.com', // Change to your recipient
//   from: 'temptingpastry@gmail.com', // Change to your verified sender
//   subject: 'Sending', 
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })
// } 


