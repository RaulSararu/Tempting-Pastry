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
    <div className="products-container">
      <Grid container >
        <Grid item xs={12} container>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <div className="pastries">
              <Link to="products/breads" onClick={() => handleClick(1,'breads')} style={{color:active === 1 && 'black'}}>
                <p>Breads</p>
              </Link>
              <Link to="products/breakfast-pastries" onClick={() => handleClick(2,"breakfast")} style={{color:active === 2 && 'black'}}>
              <p>Breakfast Pastries</p>
              </Link>
              <Link to="products/desserts" onClick={() => handleClick(3,"desserts")} style={{color:active === 3 && 'black'}}>
              <p>Desserts</p>
              </Link>
              <Link to="products/cakes" onClick={() => handleClick(4,"cakes")} style={{color:active === 4 && 'black'}}>
              <p>Cakes</p>
              </Link>
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
