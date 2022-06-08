export const sendMail=data=>{
    console.log(data); 
    // console.log(JSON.stringify(data)); 
    return fetch('http://localhost:3000/mail/sendmail',{ 
        method:"POST",
        headers:{
            Accept:"application/json",
            "content-type":"application/json" 
        }, 
        body:JSON.stringify(data)
    }).then(response=>{
        console.log("response", response);
        return response.json();
    }).catch(err=>console.log(err))
}  