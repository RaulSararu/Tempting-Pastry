import React, {useState, useEffect, Fragment} from 'react'; 
import "./style.css" ;
import {Link, useParams} from "react-router-dom";
import success from "../../assets/images/login/success.png"
import axios from 'axios';

const EmailConfirm = () =>{
    const [validUrl, setValidUrl]= useState(false);
    const {token} = useParams();

    useEffect(() =>{
        const verifyEmailUrl = async()=>{ 
            try {
                const url=`http://localhost:5000/confirmemail/${token}`  
                const{data} = await axios.get(url) 
                console.log(data);
                setValidUrl(true)
            } catch (error) {
                console.log(error);
                setValidUrl(false)
            }
        }; 
        verifyEmailUrl()
    }, []) 
    return (
        <Fragment>
            {validUrl ?(
                <div className="imgContainer">
                    <img src={success} alt="success_img" className='success_img'/> 
                    <h1>Email verified successfully</h1>
                    <Link  to="/login">
                        <button className="loginConfirm">Login</button>
                    </Link>
                </div>
            ) : (
                <h1> 404 Not Found</h1>
            )
        }
        </Fragment>
    )
};
export default EmailConfirm; 



