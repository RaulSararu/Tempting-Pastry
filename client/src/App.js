import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import Top from "./components/Top/Top";
import Login from "./components/LoginPage/Login";
import Logout from "./components/Navbar/Logout";
import Profile from "./components/Navbar/Profile";
import Google from "./components/LoginPage/Google";
import Navbar1 from "./components/Navbar/Navbar1";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import Context from "./components/Context";
import Cartpage from "./components/Cartpage/Cartpage";
import Checkout from "./components/Checkout/Checkout";
import OurStory from "./components/OurStory/OurStory";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Homepage from "./components/Homepage/Homepage";
import EmailConfirm from "./components/EmailConfirm/EmailConfirm";
import Mail from "./components/Mail/Mail";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Main from "./components/Main/Main";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";

const theme = createTheme({
  typography: {
    fontFamily: [
      // 'Niconne',
      "Courgette",
      "cursive",
      "serif",
    ].join(","),
  },
});

function App() {
  // const userObject = useContext(Context);

  return (
    <div className="App">
      <Context>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
             <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="/products/:id" element={<Products />}></Route>
                <Route path="/our-story" element={<OurStory />}></Route>
                <Route path="/find-us" element={<Footer />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/logout" element={<Logout />}></Route>
                <Route path="/google/:id" element={<Google />}></Route>
                <Route path="/cart" element={<Cartpage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/emailconfirm/:token" element={<EmailConfirm />} />
                <Route path="/sendmail" element={<Mail />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Context>
    </div>
  );
}

export default App;
