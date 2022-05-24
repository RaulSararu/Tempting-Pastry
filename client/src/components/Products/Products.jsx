import { Grid ,Card, Typography, CardContent,CardActions,Button, Box } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



export default function Products() {
  return (
    <div className="products-container">
      <Grid container>
        <Grid item xs={12} container>
          <Grid item xs={4} sx={{ backgroundColor: "gray" }} />
          <Grid item xs={4}>
            <div className="pastries">
              <Link to="products/breads">
                <p>Breads</p>
              </Link>
              <Link to="products/breakfast-pastries">
              <p>Breakfast Pastries</p>
              </Link>
              <Link to="products/desserts">
              <p>Desserts</p>
              </Link>
              <Link to="products/cakes">
              <p>Cakes</p>
              </Link>
              <NavLink style={isActive => ({
    color: isActive ? "red" : "blue"
  })} to="products/tra">
                tra
              </NavLink>
            </div>
          </Grid>
          <Grid item xs={4} sx={{ backgroundColor: "gray" }} />
        </Grid>
        <Grid item xs={12} sx={{backgroundColor:'orange'}} container>
          <Grid item  xs={3} sx={{backgroundColor:'pink'}}/>
          <Grid item xs={6} align="center">

          <Card sx={{ width: 200 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

          </Grid>
          <Grid item  xs={3} sx={{backgroundColor:'pink'}}/>
        </Grid>
      </Grid>
    </div>
  );
}
