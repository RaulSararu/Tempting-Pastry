import React, { useContext } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import "./style.css";
import { contextExample } from "../Context";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cartpage() {
  const { counter } = useContext(contextExample);

  // const [counter, setCounter] = useState(0);

  return (
    <div /*className="cart-container" */>
      <Grid container spacing={3}>
        <Grid item xs={2}/>
        <Grid item xs={5} style={{ backgroundColor: "grey" }}>
          <Typography pb={4} variant="h4">
            CART
          </Typography>

          <CartItem />
        </Grid>
        <Grid item xs={3} style={{ backgroundColor: "blue" }}>
          <Typography pb={4} variant="h4">
            ORDER SUMMARY
          </Typography>

          <p>shipping and taxes calculated at checkout</p>
          <hr />

          <p>
            subtotal <span className="total-price">{counter} $</span>
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
