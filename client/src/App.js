import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Homepage from "./components/Homepage/Homepage";
import Products from "./components/Products/Products";
import FindUs from "./components/FindUs/FindUs";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./components/Signin/Signin";
import Main from "./components/Main/Main";
import Cartpage from "./components/Cartpage/Cartpage";
import ContextProvider from "./components/Context";
import Checkout from "./components/Checkout/Checkout";
import OurStory from "./components/OurStory/OurStory";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Navbar />
          <Main />
          <Footer />
          <Routes>
            {/* <Route path="/" element={<Homepage />}></Route> */}
            <Route path="/products" element={<Products />} />
            <Route path="/ourstory" element={<OurStory />} />
            <Route path="/findus" element={<FindUs />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/cart" element={<Cartpage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
