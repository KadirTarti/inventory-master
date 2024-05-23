import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/LogoDashboard.png";
import { DarkmodeSwitch } from "../../features/DarkMode";


const icon = (name) => `/assets/navbar/${name}.svg`;

const links = [
  {
    title: "Dashboard",
    url: "/stock",
    // icon:"/assets/navbar/ic_analytics.svg"
    icon: icon("ic_analytics"),
  },
  {
    title: "Purchases",
    url: "/stock/purchases",
    icon: icon("purchase"),
  },
  {
    title: "Sales",
    icon: icon("sales"),
    url: "/stock/sales/",
  },
  {
    title: "Firms",
    icon: icon("firms"),
    url: "/stock/firms/",
  },
  {
    title: "Brands",
    icon: icon("brand"),
    url: "/stock/brands/",
  },
  {
    title: "Products",
    icon: icon("ic_cart"),
    url: "/stock/products/",
  },
];

const iconStyle = {
    color: "secondary.main",
    // borderRadius: "1rem",
    "&:hover": {
      backgroundColor: "lightBlue",
      color: "black",
    },
  };
  const selectedStyle = {
    backgroundColor: "secondary.second",
    // borderRadius: "0.5rem",
    "&:hover": {
      backgroundColor: "#680747",
      color: "gold",
    },
    color: "white",
  };

const MenuListItems = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation() 
  console.log(pathname)
  return (
    <div className="MenuList">
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
        <img src={logo} alt="Logo" width={'60%'} />
      </Box>
      {/* <Toolbar /> */}
      <List>
        {links.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.url)}
              sx={pathname == item.url ? selectedStyle :iconStyle}
            >
              {/* <Box
                sx={{
                  backgroundImage: `url(${item.icon})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: 48,
                  height: 48,
                  backgroundColor: "red",
                }}
              /> */}

              <Box
                sx={{
                  width: 24,
                  height: 24,
                  mask: `url(${item.icon}) no-repeat center / contain`,
                  mr:2,
                  bgcolor: "primary.main",
                 
                }}
              />
              <ListItemText primary={item.title} sx={{color:'',}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
