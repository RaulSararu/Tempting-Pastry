import { Grid ,Card, Typography, CardContent,CardActions,Button, Box } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import CardItem from "../Card/CardItem";

import "./style.css";






export default function Products() {


  const { id } = useParams();
  



  const [active,setActive] = useState(0)
  return (
    <div className="products-container">
      <Grid container >
        <Grid item xs={12} container>
          <Grid item xs={4} sx={{ backgroundColor: "gray" }} />
          <Grid item xs={4}>
            <div className="pastries">
              <Link to="products/breads" onClick={() => setActive(1)} style={{color:active === 1 && 'red'}}>
                <p>Breads</p>
              </Link>
              <Link to="products/breakfast-pastries" onClick={() => setActive(2)} style={{color:active === 2 && 'red'}}>
              <p>Breakfast Pastries</p>
              </Link>
              <Link to="products/desserts" onClick={() => setActive(3)} style={{color:active === 3 && 'red'}}>
              <p>Desserts</p>
              </Link>
              <Link to="products/cakes" onClick={() => setActive(4)} style={{color:active === 4 && 'red'}}>
              <p>Cakes</p>
              </Link>
              <NavLink style={isActive => ({
    color: isActive ? "red" : "blue"
  })} to="products/tra">
                tra
              </NavLink>
            </div>
          </Grid>
          <Grid item xs={4} sx={{ backgroundColor: "gray" }} />
        </Grid>
        <Grid item xs={12} sx={{backgroundColor:'orange'}}
  
  container>
          <Grid item  xs={3} sx={{backgroundColor:'pink'}}/>
          <Grid item xs={6}  sx={{padding:'20px'}} direction="row" justifyContent="space-between"  alignItems="center" container>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
          </Grid>
          <Grid item  xs={3}  sx={{backgroundColor:'pink'}} />
        </Grid>
      </Grid>
    </div>
  );
}
