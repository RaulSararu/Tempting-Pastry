import React, { useContext } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import "./cartstyle.css";
import { Link } from "react-router-dom";
import { MyContext } from "../Context";
import CloseIcon from "@mui/icons-material/Close";

export default function Cartpage() {
  const { cart, removeItem, addToCart, itemsPrice, handleRemove } =
    useContext(MyContext);

  return (
    <div className="Cartpage">
      <Grid container spacing={3}>
        <Grid item xs={2} />
        <Grid
          item
          xs={5}
          style={
            {
              // backgroundColor: "lightgrey",
              // borderRight: "1px solid grey",
            }
          }
        >
          <Typography pb={4} variant="h4">
            CART
          </Typography>
          <Grid item xs={12} container>
            <Grid item xs={7}>
              Item
            </Grid>
            <Grid item xs={4}>
              QTY
            </Grid>
            <Grid item xs={1}>
              Price
            </Grid>
          </Grid>

          {cart.map((item) => (
            <div className="cart-container">
              <div className="imageandname">
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <div className="cartname">{item.name}</div>
              </div>
              <div className="box-qty">
                <button onClick={() => removeItem(item)}>-</button>
                <p>{item.qty}</p>
                <button onClick={() => addToCart(item)}>+</button>
              </div>

              <div className="cartprice">
                <span>{item.qty * item.price} €</span>
                <CloseIcon
                  onClick={() => handleRemove(item)}
                  sx={{ marginLeft: "10px" }}
                />
              </div>
            </div>
          ))}

          {}
        </Grid>
        <Grid item xs={3}>
          <Typography pb={4} variant="h4">
            ORDER SUMMARY
          </Typography>

          <p>shipping and taxes calculated at checkout</p>
          <hr />

          <p>
            subtotal <span className="total-price">{itemsPrice} €</span>
          </p>
          <Link to="/checkout">
            <Button sx={{ fontFamily: "sans-serif",
          backgroundColor: "rgb(34, 27, 80)" }} variant="contained">
              CHECKOUT
            </Button>
          </Link>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
}
