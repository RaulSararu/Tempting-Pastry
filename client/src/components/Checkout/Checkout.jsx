import {
  Box,
  Divider,
  Grid,
  Typography,
  InputLabel,
  Input,
  Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./style.css";

export default function Checkout() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} container>
        <Grid item xs={8} container>
          <Grid item xs={3} />
          <Grid item xs={8} sx={{ padding: "30px" }}>
            <Typography variant="h5" mt={2}>
              <Box sx={{ textTransform: "uppercase" }}>Contact information</Box>
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
              {/* <InputLabel>Input Label Text</InputLabel>
              <Input sx={{ marginTop: 4 }} /> */}
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
            <p><ArrowBackIcon sx={{marginRight:"5px", marginTop:"-3px"}}/> RETURN TO CART</p>
              </Link>
            <Button variant="contained"> CONTINUE  TO SHIPPING</Button>

            </div>
          </Grid>
          <Grid item xs={1} />
        </Grid>
        <Grid item xs={4} container style={{ backgroundColor: "lightgray" }}>
          sidebar
        </Grid>

        {/* <Grid item xs={12}>
          <Divider />
        </Grid> */}

        <Grid item xs={2} />
      </Grid>
    </Grid>
  );
}
