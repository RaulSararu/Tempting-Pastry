import { Box, Divider, Grid, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./style.css";
import { MyContext } from "../Context";

export default function Checkout() {
  const { cart, itemsPrice, shippingPrice, totalPrice } = useContext(MyContext);

  return (
    <div className="Checkout">
      <Grid container spacing={3}>
        <Grid item xs={12} container>
          <Grid item xs={8} container>
            <Grid item xs={3} />
            <Grid item xs={8} sx={{ padding: "30px" }}>
              <Typography variant="h5" mt={2}>
                <Box sx={{ textTransform: "uppercase" }}>
                  Contact information
                </Box>
              </Typography>
              <Box>
                <p>
                  already have an account?{" "}
                  <span>
                    <Link
                      style={{ color: "black", paddingLeft: "20px" }}
                      to="/login"
                    >
                      LOGIN
                    </Link>{" "}
                  </span>
                </p>
              </Box>

              <Typography variant="h5" mt={2}>
                <Box sx={{ textTransform: "uppercase" }}>SHIPPING ADDRESS</Box>
              </Typography>
              <form>
                <div className="d-flex w-100">
                  <input
                    type="text"
                    name=""
                    id="firstName"
                    className="me-2"
                    placeholder="FIRST NAME"
                  />
                  <input
                    type="text"
                    name=""
                    id="lastName"
                    className="ms-2"
                    placeholder="LAST NAME"
                  />
                </div>
                <input type="text" name="" id="" placeholder="ADDRESS" />
                <input type="text" name="" id="" placeholder="APARTMENT" />
                <input type="text" name="" id="" placeholder="CITY" />
                <div className="d-flex w-100">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="me-2"
                    placeholder="COUNTRY"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="ms-2"
                    placeholder="ZIP CODE"
                  />
                </div>

                <input type="tel" name="" id="" placeholder="PHONE" />
              </form>
              <div className="return-cart">
                <Link to="/cart">
                  <p style={{color: "rgb(34, 27, 80)"}}>
                    <ArrowBackIcon
                      sx={{ marginRight: "5px", marginTop: "-3px" }}
                    />{" "}
                    RETURN TO CART
                  </p>
                </Link>
                <Button sx={{ fontFamily: "sans-serif",backgroundColor: "rgb(34, 27, 80)" }} variant="contained">
                  {" "}
                  CONTINUE TO SHIPPING
                </Button>
              </div>
            </Grid>
            <Grid item xs={1} />
          </Grid>
          <Grid
            item
            xs={4}
            container
            sx={{ backgroundColor: "rgb(255, 251, 230)" }}
          >
            {cart.map((item) => (
              <div className="checkout-container">
                <div className="box">
                  <div className="box-qty">{item.qty}</div>
                  <div className="image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cart-title">{item.name}</div>
                  <div className="price">
                    <span>{item.qty * item.price} €</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="total">
              {cart.length !== 0 && (
                <>
                  <div className="price-devision">
                    <p>subtotal</p>
                    <div className="price">
                      <span> {itemsPrice} €</span>
                    </div>
                  </div>
                  <div className="price-devision">
                    <p>shipping</p>
                    <span>{shippingPrice} €</span>
                  </div>
                  <div className="price-devision">
                    <p>total </p>
                    <div>
                      <span>{totalPrice.toFixed(2)} €</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Grid>
    </div>
  );
}
