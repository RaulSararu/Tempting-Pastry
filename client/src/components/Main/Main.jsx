import React from "react";
import Products from "../Products/Products";
// import Video from "../../assets/video/cake.mp4"
import "./main.css";
// import OurStory from "../OurStory/OurStory";
import Modal from "../Modal/Modal";
import Top from "../Top/Top";

export default function Main() {
  return (
    <div className="main">
      <Top />
      <Products />

      {/* <Modal /> */}
    </div>
  );
}
