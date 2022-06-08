import { Container, Grid, Typography,Radio,FormControlLabel,RadioGroup,FormControl,FormLabel } from '@mui/material'
import React from 'react'
import "./shipping.css"
import american from "../../assets/images/bank/american.png"
import master from "../../assets/images/bank/master.jpg"
import paypal from "../../assets/images/bank/paypal.png"
import sepa from "../../assets/images/bank/sepa.png"
import visa from "../../assets/images/bank/visa.png"

export default function Shipping() {
  return (
    <div className='Shipping'>
        <Container maxWidth="lg">
          <Grid item xs={3} sx={{backgroundColor:"grey"}}/>
          <Grid item xs={6}  >
          <Typography variant='h5' align="center">PAYMENT METHOD</Typography>

          <FormControl>
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="direct"
        name="radio-buttons-group"
      >
        <div className='bank-box'>
        <FormControlLabel value="direct" control={<Radio />} label="Direct Debit " />
        <div className='bank-image'>
          <img src={sepa} alt="" />
        </div>
        </div>

        <div className='bank-box'>
        <FormControlLabel value="credit" control={<Radio />} label="Credit / Debit Card " />

          <div className='bank-image'>
          <img src={visa} alt="" />
          </div>
          <div className='bank-image'>
          <img src={master} alt="" />
          </div>
          <div className='bank-image'>
          <img src={american} alt="" />
          </div>
        </div>
       
       <div className='bank-box'>
        <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
        <div className='bank-image'>
          <img src={american} alt="" />
          </div>

       </div>
       <div className='bank-box'>
       <FormControlLabel value="pre-payment" control={<Radio />} label="Pre-payment (Bank Transfer)" />
       <div className='bank-image'>
          <img src={paypal} alt="" />
          </div>


       </div>
       

      </RadioGroup>
    </FormControl>

          </Grid>
          <Grid item xs={3} sx={{backgroundColor:"red"}}/>
            

        </Container>
    </div>
  )
}
