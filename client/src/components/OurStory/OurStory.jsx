import React from "react";
import "./style.css";
import imag1 from "../../assets/images/random/cookies.jpg";
import imag2 from "../../assets/images/random/tart.jpg";
import { Grid } from "@mui/material";
import Cards from "./Cards";

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

          <Grid item xs={5} sx={{ margin: "100px 0", textAlign: "center" }}>
            <h1>Our Story</h1>
            <p>
              Most people know that eating sweets is not the healthiest choice,
              but new research suggests consuming sweet foods does prompt a
              person’s brain to form a memory of his or her meal. Researchers
              found that eating sweets stimulates neurons in the portion of the
              brain linked to episodic memory, which controls one’s ability to
              recall a previous experience from a specific place and time.
            </p>
            <Cards />
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
