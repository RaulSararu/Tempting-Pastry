import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const PAGES=["Home", "Products", "Our Story", "Find Us", "Login", "Logout"]
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
            {
                PAGES.map((page, index) => (
                    <ListItemButton onClick={()=> setOpenDrawer(false) } key={index} >
                    <ListItemIcon>
                      <ListItemText>{page} </ListItemText>
                    </ListItemIcon>
                  </ListItemButton> 
                ) )
            }
        
        </List>
      </Drawer>
      <IconButton sx={{color:'#FFFBE6' , marginRight:'auto'}} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
