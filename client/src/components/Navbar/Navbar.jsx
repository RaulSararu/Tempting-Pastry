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
    <React.Fragment>
      <AppBar sx={{ background: "#221B50" }}>
        <Toolbar>

        
          {
            isMatch ? (
              <>
              <Typography>
                Logo
              </Typography>
              <DrawerComp /> 
              </>
            ) : (
              <>
                        <Tabs
            sx={{ displayFlex: "center" }}
            value={value}
            onChange={(e, value) => setValue(value)}
            textColor="#FFFBE6"
            indicatorColor="secondary"
          >
            {
              PAGES.map((page,index) =>(
                <Tab key= {index} label={page} />
              ))
            }
          
          </Tabs>
          {/* <LockOpenOutlinedIcon /> */}
          <Button sx={{ marginLeft: "auto" }} variant="contained">
          <ShoppingCartOutlinedIcon /> 
          </Button>
          <Button sx={{ marginLeft: "" }} variant="contained">
            Login{""}
          </Button>
          <Button sx={{ marginLeft: "20px" }} variant="contained">
            SignUp{" "}
           </Button>   
              </>  

            )
          }
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
