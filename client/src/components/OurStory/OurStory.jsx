import React from "react";
import "./style.css";
import imag1 from "../../assets/images/random/cookies.jpg";
import imag2 from "../../assets/images/random/tart.jpg";

export default function OurStory() {
  return (
    <div className="story-container">
         <div className="first-img">
          <img className="imag1" src={imag1} alt="" />
        </div>
 
      <div className="content">
     
        <div className="story">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            incidunt facilis cum temporibus minima praesentium libero animi
            eaque iusto inventore qui hic. Voluptatem quis corporis blanditiis
            rerum inventore labore, officiis vero eligendi ut tempora sint
            veniam aspernatur illum? Suscipit molestiae eveniet velit vitae
            quaerat dolorem excepturi doloribus quasi sapiente ab explicabo
            voluptatum voluptates distinctio, voluptatibus asperiores numquam
            pariatur quas cum laborum aperiam eligendi expedita. Itaque
            reiciendis tenetur eum dolorem alias sit repudiandae obcaecati ipsam
            rerum culpa, doloribus quam nihil! Provident debitis deserunt,
            corrupti rem quaerat impedit beatae aspernatur libero facilis in,
            hic, error soluta officiis temporibus qui. Optio, nostrum dolore.
          </p>
        </div>
      </div>

      <div className="second-image">
        <img className="imag2" src={imag2} alt="" />
      </div>
    </div>
  );
}
