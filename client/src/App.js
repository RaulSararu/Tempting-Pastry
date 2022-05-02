import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Products from "./components/Products/Products";
import OurStory from "./components/OurStory/OurStory";
import FindUs from "./components/FindUs/FindUs";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./components/Signin/Signin";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Main />
        <Footer />
      

        <Routes>
          {/* <Route path="/" element={<Homepage />}></Route> */}
          <Route path="/products" element={<Products />}></Route>
          <Route path="/ourstory" element={<OurStory />}></Route>
          <Route path="/findus" element={<FindUs />}></Route>
          <Route path="/login" element={<Signin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
