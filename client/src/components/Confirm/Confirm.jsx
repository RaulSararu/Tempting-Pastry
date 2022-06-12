import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useContext } from "react";
import { MyContext } from "../Context";
import CloseIcon from "@mui/icons-material/Close";
import "./confirm.css";

export default function Confirm() {
  const { cart, shippingPrice, totalPrice, handleRemove } =
    useContext(MyContext);
  return (
    <div className="Confirm">
      <Container maxWidth="md" sx={{ backgroundColor: "lightgray" }}>
        <Typography variant="h6" align="center">
          CHECKOUT
        </Typography>
        <Typography
          sx={{ borderBottom: "1px solid rgba(128, 128, 128, 0.397)" }}
        >
          ORDER
        </Typography>
        <Box sx={{ marginBottom: "30px" }}>
          {cart.map((item) => (
            <div className="flex-container">
              <div className="image">
                <img src={item.image} alt="" />
              </div>
              <div className="box-qty">{item.qty}</div>
              <div className="cart-title">{item.name}</div>

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
        </Box>

        <Typography
          sx={{ borderBottom: "1px solid rgba(128, 128, 128, 0.397)" }}
        >
          DELIVERY ADDRESS
        </Typography>

        <Typography
          sx={{ borderBottom: "1px solid rgba(128, 128, 128, 0.397)" }}
        >
          PAYMENT METHOD
        </Typography>

        <div className="box-flex">
          <p>Delivery</p>
          <span>{shippingPrice} €</span>
        </div>

        <div className="box-flex">
          <p>TOTAL (VAT included)</p>
          <span>{totalPrice} €</span>
        </div>
  

        <Button 
          sx={{
            width: "50%",
            fontFamily: "sans-serif",
            backgroundColor: "rgb(34, 27, 80)",
            
          }}
          variant="contained"
          size="small"
          
       
          
        >
          {" "}
          CONFIRM AND PAY
        </Button>

     

{/* 
        <Button 
          sx={{
            width: "50%",
            fontFamily: "sans-serif",
            backgroundColor: "rgb(34, 27, 80)",
          }}
          variant="contained"
          size="small"
       
          
        >
          {" "}
          CONFIRM AND PAY
        </Button> */}
      </Container>
    </div>
  );
}
