import React, { useContext } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import "./style.css";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { MyContext } from "../Context";

export default function Cartpage() {

  const {cart} = useContext(MyContext)


  return (
    <div /*className="cart-container" */>
      <Grid container spacing={3}>
        <Grid item xs={2}/>
        <Grid item xs={5} style={{ backgroundColor: "grey" }}>
          <Typography pb={4} variant="h4">
            CART
          </Typography>

          <CartItem />
          {
            cart.map(item => <div>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>)
          }
          {}
        </Grid>
        <Grid item xs={3} style={{ backgroundColor: "blue" }}>
          <Typography pb={4} variant="h4">
            ORDER SUMMARY
          </Typography>

          <p>shipping and taxes calculated at checkout</p>
          <hr />

          <p>
            subtotal <span className="total-price">$</span> 
          </p>
          <Link to="/checkout">
          <Button variant="contained">CHECKOUT</Button>
          </Link>
        </Grid>
        <Grid item xs={2}/>
      </Grid>
    </div>
  );
}
