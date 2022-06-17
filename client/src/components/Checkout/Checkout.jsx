import { Box, Divider, Grid, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./style.css";
import { MyContext } from "../Context";
import { useState } from "react";

export default function Checkout() {
  const { cart, itemsPrice, shippingPrice, totalPrice, postData,setPostData } = useContext(MyContext);

  


  return (
    <div className="Checkout">
      <Grid container spacing={3}>
        <Grid item xs={12} container>
          <Grid item xs={8} container>
            <Grid item xs={3} />
            <Grid item xs={8} sx={{ padding: "30px" }}>
                <Box sx={{ textTransform: "uppercase" }}>
              <Typography variant="h5" mt={2}>
                  Contact information
              </Typography>
                </Box>
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
                  value={postData.firstName}
                  onChange={(e) => setPostData({...postData, firstName: e.target.value})}
                    type="text"
                    name=""
                    id="firstName"
                    className="me-2"
                    placeholder="FIRST NAME"
                  />
                  <input
                  value={postData.lastName}
                  onChange={(e) => setPostData({...postData, lastName: e.target.value})}
                    type="text"
                    name=""
                    id="lastName"
                    className="ms-2"
                    placeholder="LAST NAME"
                  />
                </div>
                <input value={postData.address}
                onChange={(e) => setPostData({...postData, address: e.target.value})}
                type="text" name="" id="" placeholder="ADDRESS" />
                <input  onChange={(e) => setPostData({...postData, apartment: e.target.value})} value={postData.apartment} type="text" name="" id="" placeholder="APARTMENT" />
                <input value={postData.city} onChange={(e) => setPostData({...postData, city: e.target.value})}  type="text" name="" id="" placeholder="CITY" />
                <div className="d-flex w-100">
                  <input
                  value={postData.country}
                  onChange={(e) => setPostData({...postData, country: e.target.value})}
                  
                    type="text"
                    name=""
                    id=""
                    className="me-2"
                    placeholder="COUNTRY"
                  />
                  <input
                  value={postData.zipCode}
                  onChange={(e) => setPostData({...postData, zipCode: e.target.value})}
                    type="text"
                    name=""
                    id=""
                    className="ms-2"
                    placeholder="ZIP CODE"
                  />
                </div>

                <input value={postData.phone} onChange={(e) => setPostData({...postData, phone: e.target.value})} type="tel" name="" id="" placeholder="PHONE" />
              </form>
              <div className="return-cart">
                <Link to="/cart">
                  <p style={{ color: "rgb(34, 27, 80)" }}>
                    <ArrowBackIcon
                      sx={{ marginRight: "5px", marginTop: "-3px" }}
                    />{" "}
                    RETURN TO CART
                  </p>
                </Link>

                <Link to="/payment">
                  <Button
                    sx={{
                      fontFamily: "sans-serif",
                      backgroundColor: "rgb(34, 27, 80)",
                    }}
                    variant="contained"
                  >
                    {" "}
                    CONTINUE TO PAYMENT
                  </Button>
                </Link>
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
            <Grid item xs={1} />
            <Grid item xs={10} container sx={{ margin: "30px 0" }}>
              {cart.map((item) => (
                <Grid key={item.id} item xs={12} sx={{fontFamily: "Courgette"}}>
                  <div  className="flex1">
                    <div className="box-qty">{item.qty}</div>
                    <div className="image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="cart-title">{item.name}</div>
                    <div className="price">
                      <span>{item.qty * item.price} €</span>
                    </div>
                  </div>
                </Grid>
              ))}

              <Grid item xs={12}>
                {cart.length !== 0 && (
                  <>
                    <div className="price-devision">
                      <div className="price-box">
                        <p>subtotal</p>
                        <span> {itemsPrice} €</span>
                      </div>

                      <div className="price-box">
                        <p>shipping</p>
                        <span>{shippingPrice} €</span>
                      </div>

                      <div className="price-box">
                        <p>total </p>
                        <span>{totalPrice.toFixed(2)} €</span>
                      </div>
                    </div>
                  </>
                )}
              </Grid>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
