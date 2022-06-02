import React from "react"; 
import Login from "../LoginPage/Login"


export default function Layout ({children}) {
  return <div>
    <Login />
  {children}
  </div>
}