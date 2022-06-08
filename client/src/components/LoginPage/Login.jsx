import React, { useState, useContext, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Google from "../../assets/images/login/google3.png";
import Twitter from "../../assets/images/login/twitter2.jpg";
import "./Login.css";
import Axios from "axios";
import { MyContext } from "../Context";
import axios from "axios";


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

function Auth() {
  
  
  const [registerAddress, setRegisterAddress] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { currentUser, setCurrentUser } = useContext(MyContext);

  const userRef = useRef();
  const errRef = useRef();

  const [registerUsername, setRegisterUsername] = useState("");
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [registerPassword, setRegisterPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
}, [])

useEffect(() => {
    setValidName(USER_REGEX.test(registerUsername));
}, [registerUsername])

useEffect(() => {
    setValidPwd(PWD_REGEX.test(registerPassword));
    
}, [registerPassword])

useEffect(() => {
    setErrMsg('');
}, [registerUsername, registerPassword])

function handleChangeUsername(e) {
  setData({ ...data, username: e.target.value })
  setRegisterUsername(e.target.value)
}

function handleChangePassword(e) {
  setData({ ...data, password: e.target.value })
  setRegisterPassword(e.target.value)
}

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

    const v1 = USER_REGEX.test(registerUsername);
        const v2 = PWD_REGEX.test(registerPassword);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ registerUsername, registerPassword}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setRegisterUsername("");
            setRegisterPassword("")
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }

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
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <h3>Register</h3>
          {/* {<label htmlFor="username">
            Username:
          </label>} */}
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            placeholder="Username"
            onChange={handleChangeUsername}
            required
            value={data.username}
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <p id="uidnote" className={userFocus && registerUsername && !validName ? "instructions" : "offscreen"}>
                           
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>

          <input
            type="text"
            placeholder="Address"
            onChange={(e) => setData({ ...data, address: e.target.value })}
            value={data.address}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleChangePassword}
            value={data.password}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />

            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                          
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>
          <input
            type="email"
            id="password"
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
