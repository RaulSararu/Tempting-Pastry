import React from "react";
import Footer from "../Footer/Footer";
import OurStory from "../OurStory/OurStory";
import Products from "../Products/Products";
// import Video from "../../assets/video/cake.mp4"
import "./main.css";




export default function Main() {
  return (
    <div className="main">
  
      <Products />
      <OurStory/>
      <Footer />


    </div>
  );
}
