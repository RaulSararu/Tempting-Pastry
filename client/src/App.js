import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
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
import Cartpage from "./components/Cartpage/Cartpage";
import Checkout from "./components/Checkout/Checkout";
import OurStory from "./components/OurStory/OurStory";
import PageNotFound from "./components/PageNotFound/PageNotFound"; 
import Homepage from "./components/Homepage/Homepage" ;

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
      <myContext>
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
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />}/>
        </Routes> 
        
        <Footer />  
      </BrowserRouter>
      </ThemeProvider> 
      </myContext> 
    </div>
  );
}

export default App;
