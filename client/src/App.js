import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Products from "./components/Products/Products";
import OurStory from "./components/OurStory/OurStory";
import FindUs from "./components/FindUs/FindUs";
import Footer from "./components/Footer/Footer";
import Signin from "./components/Signin/Signin";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";
import PageNotFound from "./components/PageNotFound/PageNotFound";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
        <Routes>
          <Route path="/" element={<Homepage />}></Route> 
          <Route path="/products" element={<Products />}></Route>
          <Route path="/ourstory" element={<OurStory />}></Route>
          <Route path="/findus" element={<FindUs />}></Route>
          <Route path="/login" element={<Signin />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes> 
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
