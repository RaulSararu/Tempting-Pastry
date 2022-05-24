import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Products from "./components/Products/Products";
import OurStory from "./components/OurStory/OurStory";
import FindUs from "./components/FindUs/FindUs";
import Footer from "./components/Footer/Footer";
import Login from "./components/LoginPage/Login"; 
import Logout from "./components/Navbar/Logout"; 
import Profile from "./components/Navbar/Profile"; 
import Google from "./components/LoginPage/Google";
import Main from "./components/Main/Main";
import Navbar1 from "./components/Navbar/Navbar1";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useContext } from 'react'; 
import { myContext } from "./components/Context"; 

const theme = createTheme({  
  typography: {
      fontFamily: [ 
        // 'Niconne',
        'Courgette',
        'cursive', 
        "serif"
  ].join(','),
 
  }, 

});

function App() {

  const userObject =useContext(myContext); 
 

  return (
    <div className="App">
       <ThemeProvider theme={theme}> 
      <BrowserRouter>
        <Navbar1 /> 
       

        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/ourstory" element={<OurStory/>}></Route>
          <Route path="/findus" element={<FindUs/>}></Route>
          <Route path="/login" element={<Login/>}></Route> 
          <Route path="/profile" element={<Profile/>}></Route> 
          <Route path="/logout" element={<Logout/>}></Route> 
          <Route path="/google/:id" element={<Google/>}></Route> 
        </Routes> 
        
        <Footer />  
      </BrowserRouter>
      </ThemeProvider> 
    </div>
  );
}

export default App;
