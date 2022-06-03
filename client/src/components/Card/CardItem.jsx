
import React, {useContext} from "react"; 
import {
  Card,
  Typography,
  CardContent,
  Button
} from "@mui/material";
import "./style.css"
import { MyContext } from "../Context";

export default function CardItem({ item, cb }) {
  const { addToCart } = useContext(MyContext);
  return (
    <div className="CardItem">
      <Card sx={{ width: 280, marginBottom: "20px" }}>
        <CardContent>
          <img
            src={item.image}
            alt=""
            style={{ width: "248px", height: "250px", objectFit: "cover" }}
          />
        </CardContent>
        <Typography
          sx={{ fontSize: 14, fontFamily: "" }}
          color="text.secondary"
          gutterBottom
          align="center"
        >
          {item.name}
        </Typography>
        <Typography
          sx={{ fontSize: 14 }}  
          color="text.secondary"
          align="center"
          gutterBottom
        >
          {item.price}
        </Typography>

        <Button
          className="button-custom"
          variant="text"
          size="small"
          sx={{ width: "100%", fontFamily: "sans-serif" }}
          onClick={() => addToCart(item)}
        >
          ADD TO CART
        </Button>
      </Card>
    </div>
  );
}
