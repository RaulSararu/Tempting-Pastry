const nodeMailer=require('nodemailer');
require("dotenv").config() 

exports.sendMail=(req,res)=>{ 
    console.log('req body',req.body);
    let userMail=req.body.userEmail; 
    let userMessage=req.body.message;

    let transporter=nodeMailer.createTransport({
        service:'gmail',
        host: process.env.HOST,
        port: process.env.EMAIL_PORT, 
        auth:{
            user:process.env.GOOGLE_USER,  
            pass:process.env.GOOGLE_PASSWORD 
        }
    }) 
    var message = {
        from:process.env.GOOGLE_USER,
        to:process.env.GOOGLE_USER,  
        subject:"Message title",
        text:`You receive an email from:${userMail}, 
        message:${userMessage}`, 
      
    };
    transporter.sendMail(message,(err,info) =>{
        if(err){
            console.log("error in sending email", err)
            return res.status(400).json({
                message:`error in sending email ${err}`
            })
        }else {
            console.log("successfully send the email", info)
            return res.json({
                message:info
            })
        }
    })
}  