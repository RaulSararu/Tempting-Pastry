import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useContext, useState  } from "react";
import { MyContext } from "../Context";
import CloseIcon from "@mui/icons-material/Close";
import "./confirm.css";
import ModalConf from "../Modal/ModalConf";

export default function Confirm() {
  const { cart, shippingPrice, totalPrice, handleRemove, postData, payment } =
    useContext(MyContext);



    // modal

    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);


  return (
    <div className="Confirm">
      <Container maxWidth="md" sx={{ padding: "20px 0 50px" }}>
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
            <div key={item.id} className="flex-container">
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
                    fontSize: "1.1rem",
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
          <div className="address-box">
            <p>
              {postData.firstName} {postData.lastName}
            </p>
            <p>
              {postData.address} {postData.apartment}
            </p>
            <p>
              {postData.zipCode} {postData.city}
            </p>
            <p>{postData.country}</p>
            <p>{postData.phone}</p>
          </div>
        </Typography>

        <Typography
          sx={{ borderBottom: "1px solid rgba(128, 128, 128, 0.397)", paddingBottom:"40px",marginTop:"20px" }}
        >
          PAYMENT METHOD
          <div className="payment">
            {payment}
          </div>
        </Typography>

        <div className="box-flex">
          <p>Delivery</p>
          <span>{shippingPrice} €</span>
        </div>

        <div className="box-flex">
          <p>TOTAL (VAT included)</p>
          <span>{totalPrice} €</span>
        </div>

        <Button onClick={toggleShow}
          sx={{
            width: "30%",
            fontFamily: "sans-serif",
            backgroundColor: "rgb(34, 27, 80)",
          }}
          variant="contained"
          size="small"
        >
          {" "}
          CONFIRM AND PAY
          <ModalConf toggleShow={toggleShow} basicModal={basicModal} setBasicModal={setBasicModal} />
        </Button>
      </Container>
    </div>
  );
}
