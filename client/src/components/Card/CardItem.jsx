import React from "react";
import {
  Card,
  Typography,
  CardContent,
  Button
} from "@mui/material";
import pic1 from "../../assets/images/breads/assorted_1lb_breadbowl.png";
import "./style.css"

export default function CardItem() {
  return (
    <div>
      <Card sx={{ width: 280, marginBottom:"20px" }}>
        <CardContent>
          <img
            src={pic1}
            alt=""
            style={{ width: "248px", height: "250px", objectFit: "cover" }}
          />
        </CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align="center">
          Word of the Day
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" align="center" gutterBottom>
          2 $
        </Typography>

        <Button className="button-custom" variant="text" size="small" sx={{ width: "100%",  }}>
          ADD TO CART
        </Button>
      </Card>
    </div>
  );
}
