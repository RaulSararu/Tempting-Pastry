const { default: axios } = require("axios")
const User =require("../models/User") 

// exports.Logout= ()=>{
//     axios.get("http://localhost:5000/auth/logout").then(res =>{
//         if(res.data) {
//             window.location.href="/"
//         }
//     })
// }

exports.Logout=(req,res) =>{
    if(req.user){
        req.logout();
        res.send("done")
    }
} 