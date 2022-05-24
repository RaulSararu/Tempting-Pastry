import React, { useState } from "react";
import { AppBar, Typography, Toolbar, Tabs, Tab, Button, useMediaQuery, useTheme } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import DrawerComp from "./DrawerComp";

const PAGES=["Home", "Products", "Our Story", "Find Us"]


export default function Navbar() {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);

  return (
    <div >Navbar</div>
  )
}
