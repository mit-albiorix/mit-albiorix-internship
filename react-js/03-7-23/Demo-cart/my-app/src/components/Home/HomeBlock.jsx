import React, { useContext } from "react";
// import * as React from 'react';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// for select
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Users from "../Users/Users";
import Products from "../Products/Products";
import isAdminContext from "../../context/isAdmin";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;


function HomeBlock(props) {
  const [admin, setAdmin] = React.useState("");   //  it is for to change the value for the select menu for admin and logoutz

  const ctx = useContext(isAdminContext);

  const logoutHandler = () => {
    props.setLogIn(false);
    localStorage.removeItem("LoggedInAdmin");
    localStorage.removeItem("LoggedInUsers")
  };

  const handleChange = (event) => {
    setAdmin(event.target.value.toString());
  };

  const usersHandler = () => {
    console.log("users");
  };

  const productsHandler = () => {
    console.log("products");
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar style={{ backgroundColor: "#faf2f2cf" }}>
            <FormControl
              style={{ display: "flex", flexDirection: "row-reverse" }}
            >
              <InputLabel id="demo-simple-select-label">Admin</InputLabel>
              <Select
                style={{ width: "150px" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={admin}
                label="Admin"
                onChange={handleChange}
              >
                <MenuItem value={"logout"} onClick={logoutHandler}>
                  LogOut
                </MenuItem>
              </Select>
            </FormControl>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />

          <List>
            <ListItem key={"Users"} disablePadding>
              <ListItemButton>
                <ListItemText primary="Users" onClick={usersHandler} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"Products"} disablePadding>
              <ListItemButton>
                <ListItemText primary="Products" onClick={productsHandler} />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "#faf2f2cf", p: 3 }}>
          <Toolbar />
          {ctx.isAdmin===true && <Users/> }
          {ctx.isAdmin===false && <Products/> }

        </Box>
      </Box>
    </>
  );
}

export default HomeBlock;
