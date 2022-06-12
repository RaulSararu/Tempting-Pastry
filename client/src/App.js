import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import Checkout from "./components/Checkout/Checkout";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Login from "./components/LoginPage/Login";
import Logout from "./components/Navbar/Logout";
import Profile from "./components/Navbar/Profile";
import Google from "./components/LoginPage/Google";
import Navbar1 from "./components/Navbar/Navbar1";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import Context, {MyContext} from "./components/Context";
import Cartpage from "./components/Cartpage/Cartpage";
/* import EmailConfirm from "./components/EmailConfirm/EmailConfirm";  */
import Mail from "./components/Mail/Mail";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Main from "./components/Main/Main";
import ContactLayout from "./components/Layouts/ContactLayout";
import MainLayout from "./components/Layouts/MainLayout";
import LoginLayout from "./components/Layouts/LoginLayout";
import Payment from "./components/Payment/Payment";
import Confirm from "./components/Confirm/Confirm";


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
  const userObject = useContext(MyContext);

  return (
    <div className="App">
      <Context>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <ScrollToTop />
            <Navbar1 />

            <Routes>
              <Route element = {< ContactLayout/>}>
                {/* Top */}
                {/* Main */}
                <Route path="/sendmail" element={<Mail />} />
              </Route>

              <Route element={<MainLayout />}>
                <Route path="/" element={<Products />} />
              </Route>

              <Route element={<LoginLayout />}>
                <Route path="/login" element={<Login />} />
              </Route>
              <Route path="/products/:id" element={<Products />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/logout" element={<Logout />}></Route>
              <Route path="/google/:id" element={<Google />}></Route>
              <Route path="/cart" element={<Cartpage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/payment" element={<Payment/>} />
              <Route path="/confirm" element={<Confirm/>} />
              

              {/* <Route path="/emailconfirm/:token" element={<EmailConfirm />} /> */}
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Context>
    </div>
  );
}

export default App;
