import React, {useEffect, useState} from "react"; 
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import logo from "../../assets/images/logo/logo.png"
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { MyContext } from "../Context";
import{ useContext} from "react"
import Modal from "../Modal/Modal";
import "./navbar.css";
import { HashLink as Link } from  "react-router-hash-link"; 



const pages = ["Home", "Products", "Our Story", "Find Us"];

const ResponsiveAppBar = () => {
  const {cart} = useContext(MyContext)

  useEffect(() =>{
   

  },[cart])

  // toggle show for modal
  const [topRightModal, setTopRightModal] = useState(false);
  const toggleShow = () => setTopRightModal(!topRightModal);


  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { currentUser, setCurrentUser } = useContext(MyContext);
  const [isLogIn, setIsLogIn] = useState("Login");
  const settings = [isLogIn, "Profile"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  console.log("Navbar will render",cart)

  return (
    <AppBar
      position="sticky"
      sx={{ background: "#221B50", textColor: "#FFFBE6" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: {
                xs: "flex",
                md: "flex",
                backgroundColor: "#fffbe6",
                borderRadius: "50%",
                height: "100px",
                width: "100px",
                marginTop: "15px",
                marginBottom: "15px",
              },
            }}
          >
            <img
              src={logo}
              alt=""
              style={{
                marginTop: "",
                height: "100px",
                marginLeft: "",
              }}
            />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: "#fffbe6",
              height: "150px",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ textColor: "#FFFBE6" }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "none",
                backgroundColor: "#fffbe6",
                borderRadius: "50%",
                height: "150px",
                width: "150px",
                marginTop: "15px",
                marginBottom: "15px",
              },
            }}
          >
            <img src={logo} alt="" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            
            <ul className="navbarLinks">
              <li className="navbarList"><Link smooth to="/#home" className="navbarA">Home</Link></li>
              <li className="navbarList"><Link smooth to="/#products" className="navbarA">Products</Link></li>
              <li className="navbarList"><Link  smooth to="/#our-story" className="navbarA">Our Story</Link></li>
              <li className="navbarList"><Link smooth to="/#find-us" className="navbarA">Find Us</Link></li>
            </ul>
          </Box>

          <Box sx={{ marginLeft: "auto" }} variant="contained">
         
            <ShoppingCartOutlinedIcon onClick={toggleShow} sx={{ fontSize: 50, color: "#fffbe6" }} />{cart.length}
       
            <Modal toggleShow={toggleShow} topRightModal={topRightModal} setTopRightModal={setTopRightModal}/>
            
          </Box>

          <Box sx={{ flexGrow: 0, marginLeft: "30px" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link
                  to={`${setting.toLocaleLowerCase()}`}
                  key={setting}
                  onClick={() => {
                    setting === "Login"
                      ? setIsLogIn("Logout")
                      : setIsLogIn("Login");
                  }}
                > 
                  {" "}
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting} </Typography>
                  </MenuItem>{" "}
                </Link>
              ))}
            </Menu>
          </Box>
          <Link to="/sendmail">
            <Box sx={{ marginLeft: "35px" }} variant="contained">
              <ContactMailIcon sx={{ fontSize: 45, color: "#fffbe6" }} />
            </Box>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
