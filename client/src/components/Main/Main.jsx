import React from "react";
import Products from "../Products/Products";
// import Video from "../../assets/video/cake.mp4"
import "./main.css";
// import OurStory from "../OurStory/OurStory";
import Modal from "../Modal/Modal";

export default function Main() {
  return (
    <div className="main">
      <Products />
      {/* <OurStory/> */}
      <Modal />
    </div>
  );
}
