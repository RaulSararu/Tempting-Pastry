import {
  Container,
  Grid,
  Typography,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormControl,
  FormLabel,
  Button,
} from "@mui/material";
import React, { useContext } from "react";
import { MyContext } from "../Context";
import "./payment.css";
import american from "../../assets/images/bank/american.png";
import master from "../../assets/images/bank/master.jpg";
import paypal from "../../assets/images/bank/paypal.png";
import sepa from "../../assets/images/bank/sepa.png";
import visa from "../../assets/images/bank/visa.png";
import { Link } from "react-router-dom";

export default function Payment() {
  const {shippingPrice, totalPrice } = useContext(MyContext);
  return (
    <div className="Payment">
      <Grid container spacing={2}>
        <Grid item xs={3} />
        <Grid item xs={6} container  >
          <Typography variant="h5" sx={{marginBottom:"50px"}} >
            PAYMENT METHOD
          </Typography>
   
          <Grid item xs={12} container>
            <Grid item xs={7} >
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="direct"
                  name="radio-buttons-group"
                >
                  <div className="bank-box">
                    <FormControlLabel     
                      value="direct"
                      control={<Radio />}
                      label="Direct Debit "
                    />
                    <div className="bank-image">
                      <img src={sepa} alt="" />
                    </div>
                  </div>

                  <div className="bank-box">
                    <FormControlLabel
                      value="credit"
                      control={<Radio />}
                      label="Credit / Debit Card "
                      sx={{marginRight:"70px"}}
                    />
           
                    <div className="bank-image">
                      <img src={visa} alt="" />
                    </div>
                    <div className="bank-image">
                      <img src={master} alt="" />
                    </div>
                    <div className="bank-image">
                      <img src={american} alt="" />
                    </div>



          
                  </div>

                  <div className="bank-box">
                    <FormControlLabel
                      value="paypal"
                      control={<Radio />}
                      label="PayPal"
                    />
                    <div className="bank-image">
                      <img src={american} alt="" />
                    </div>
                  </div>
                  <div className="bank-box">
                    <FormControlLabel
                      value="pre-payment"
                      control={<Radio />}
                      label="Pre-payment (Bank Transfer)"
                    />
                    <div className="bank-image">
                      <img src={paypal} alt="" />
                    </div>
                  </div>
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid className="box" item xs={5} sx={{ backgroundColor: "rgb(255, 251, 230)" }} >
              <div className="box-delivery">
              <p>Delivery</p>
              <span>{shippingPrice} €</span>
              </div>
              <div className="box-delivery">
                <p>TOTAL</p>
                <span>{totalPrice} €</span>

              </div>
              <Link to="/confirm">

              <Button  sx={{
                width: "100%",
                      fontFamily: "sans-serif",
                      backgroundColor: "rgb(34, 27, 80)",
                    }}
                    variant="contained" size="small">NEXT</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </div>
  );
}
