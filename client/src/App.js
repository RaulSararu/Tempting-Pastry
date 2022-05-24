import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import FindUs from "./components/FindUs/FindUs";
import Footer from "./components/Footer/Footer";
import Signin from "./components/Signin/Signin";
import Top from "./components/Top/Top";
import Cartpage from "./components/Cartpage/Cartpage";
import ContextProvider from "./components/Context/Context";
import Checkout from "./components/Checkout/Checkout";
import OurStory from "./components/OurStory/OurStory";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage"
import Main from "./components/Main/Main";



function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Top />
          <Main />
          <Footer />
          <Routes>
            <Route path="/" element={<Homepage />} /> 
            <Route path="/products" element={<Products />} />
            <Route path="/ourstory" element={<OurStory />} />
            <Route path="/findus" element={<FindUs />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/cart" element={<Cartpage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<PageNotFound />}/>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
