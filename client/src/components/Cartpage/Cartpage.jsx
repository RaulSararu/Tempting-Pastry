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
      <Grid container>
        <Grid item xs={3} />
        <Grid
          item
          xs={5}
          sx={
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
            <div key={item.id} className="cart-container">
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
                  sx={{
                    marginLeft: "10px",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          ))}

          {}
        </Grid>
        <Grid item xs={3} container>
          <Grid item xs={1} />
          <Grid item xs={11}>
            <Typography pb={4} variant="h4">
              ORDER SUMMARY
            </Typography>

            <p style={{color: "rgb(34, 27, 80)" }}>
              shipping and taxes calculated at checkout
            </p>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between", color: "rgb(34, 27, 80)" }}>
              <p>subtotal</p>
              <span className="total-price">{itemsPrice} €</span>
            </div>

            <Link to="/checkout">
              <Button
                sx={{
                  fontFamily: "sans-serif",
                  backgroundColor: "rgb(34, 27, 80)",
                }}
                variant="contained"
              >
                CHECKOUT
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
}
