import React from "react";
import "./style.css";
import imag1 from "../../assets/images/random/cookies.jpg";
import imag2 from "../../assets/images/random/tart.jpg";
import { Grid } from "@mui/material";

export default function OurStory() {
  return (
    <div className="story-container" id="our-story" data-testid="test-ourstory">
      <Grid container id="our-story">
        <Grid item xs={12} container>
          <Grid item xs={1.5} />
          <Grid item xs={2}>
            <div className="first-img">
              <img className="imag1" src={imag1} alt="" />
            </div>
          </Grid>
      
          <Grid item xs={5} sx={{margin:'100px 0', textAlign:"center"}}>
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
              reiciendis tenetur eum dolorem alias sit repudiandae obcaecati
              ipsam rerum culpa, doloribus quam nihil! Provident debitis
              deserunt, corrupti rem  luptatum voluptates distinctio, voluptatibus asperiores numquam
              pariatur quas cum laborum aperiam eligendi expedita. Itaque
              reiciendis tenetur eum dolorem alias sit repudiandae obcaecati
              ipsam rerum culpa, doloribus quam nihil! Provident debitisquaerat impedit beatae aspernatur libero
              facilis in, hic, error soluta officiis temporibus qui. Optio,
              nostrum dolore.
            </p>
          </Grid>
         

          <Grid item xs={2}>
            <div className="second-image">
              <img className="imag2" src={imag2} alt="" />
            </div>
          </Grid>
          <Grid item xs={1.5} />
        </Grid>
      </Grid>
    </div>
  );
}
