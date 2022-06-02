import { Grid } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link,  useParams } from "react-router-dom";
import CardItem from "../Card/CardItem";
import "./style.css";
import data from "../../data/data";
import { MyContext } from "../Context";





export default function Products() {

  const [cat,setCat] = useState("breads")
  const {addToCart} = useContext(MyContext)

  const { id } = useParams();
  
  const handleClick = (param, filter) => {
    setActive(param)
    setCat(filter)

  }


  const [active,setActive] = useState(0)
  return (
    <div className="Products">
      <Grid container >
        <Grid item xs={12} container>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <div className="pastries">
              <p onClick={() => handleClick(1,'breads')} style={{color:active === 1 && 'black'}}>Breads</p>
              <p onClick={() => handleClick(2,"breakfast")} style={{color:active === 2 && 'black'}}>Breakfast Pastries</p>
              <p onClick={() => handleClick(3,"desserts")} style={{color:active === 3 && 'black'}}>Desserts</p>
              <p onClick={() => handleClick(4,"cakes")} style={{color:active === 4 && 'black'}}>Cakes</p>
            </div>
          </Grid>
          <Grid item xs={4}  />
        </Grid>
        <Grid item xs={12} 
  
  container>
          <Grid item  xs={3} />
          <Grid item xs={6}  sx={{padding:'20px'}} direction="row" justifyContent="space-between"  alignItems="center" container>

            {
              data[cat].map((item) => <CardItem item={item} key={item.id} cb={addToCart}/>)
            }

          </Grid>
          <Grid item  xs={3}   />
        </Grid>
      </Grid>
    </div>
  );
}
