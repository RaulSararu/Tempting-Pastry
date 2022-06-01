import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Google from "../../assets/images/login/google3.png";
import Twitter from "../../assets/images/login/twitter2.jpg";
import "./Login.css";
import Axios from "axios";
import { MyContext } from "../Context";
import axios from "axios";

function Auth() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerAddress, setRegisterAddress] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { currentUser, setCurrentUser } = useContext(MyContext);

  const navigate = useNavigate();
  // Register
  // const register = () => {

  //   Axios({
  //     method: "POST",
  //     data: {
  //       username: registerUsername,
  //       address: registerAddress,
  //       password: registerPassword,
  //       email: registerEmail
  //     },
  //     withCredentials: true,
  //     url: "http://localhost:5000/register",
  //   }).then((res) => console.log(res));
  // };
  const [data, setData] = useState({
    username: registerUsername,
    address: registerAddress,
    password: registerPassword,
    email: registerEmail,
  });

  const register = async (e) => {
    const response = await axios.post("/users/register", data);
    console.log("data", data); 
    console.log("response from register is", response);
  };
 
  const [error, setError] = useState("")
  const [msg, setMsg]= useState("")

  const handleSubmit = async(e)=> { 
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/users";
      const {data:res} = await axios.post(url, data);
      setMsg(res.message);
      
    } catch (error) {
      if (
        error.response &&
        error.response.status >=400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message)
      }
    }
  };  


  // Login with Social Media
  const Login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/login",
    }).then((res) =>
   { if (res.data.success) { 
     const user= res.data.user
      setCurrentUser({username:user.username, email:user.email, id: user._id})
      navigate("/") 
      // console.log('Response', res); 
     } }   
    );
  };

 console.log("Current user", currentUser); 

  const googleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  const twitterLogin = () => {
    window.location.href = "http://localhost:5000/auth/twitter";
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a login Method</h1>
      <div className="wrapper">
        <div className="left">
          <a href="/auth/google" style={{ textDecoration: "none" }}>
            <div className="loginButton google" onClick={googleLogin}>
              <img src={Google} alt="" className="icon" />
              Google
            </div>
          </a>
          <Link to="/twitter" style={{ textDecoration: "none" }}>
            <div className="loginButton twitter" onClick={twitterLogin}>
              <img src={Twitter} alt="" className="icon" />
              Twitter
            </div>
          </Link>
          <div className="right">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button className="submit" onClick={Login}>
              Login
            </button>
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>

        <div className="right" onSubmit={handleSubmit}>
          <h3>Register</h3>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setData({ ...data, username: e.target.value })}
            value={data.username}
          />
          <input
            type="text"
            placeholder="Address"
            onChange={(e) => setData({ ...data, address: e.target.value })}
            value={data.address}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            value={data.password}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
          />
          {error && <div className="error_msg">{error}</div>}
						{msg && <div className="success_msg">{msg}</div>}
          <button className="submit" onClick={register}>
            Submit 
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
