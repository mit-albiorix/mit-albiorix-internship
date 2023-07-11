import React, { useState, useContext, useEffect } from "react";

import "./HomeBlock.css";


import {
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import isAdminContext from "../../context/isAdmin";

function LeftBar() {
  const [ctx, setProductCount, setProductsForCart, setAdmin, setLogIn] =
    useContext(isAdminContext);
  let { isAdmin, isLoggedIn, productCount, productsForCart } = ctx;

  const drawerWidth = 240;

  const productsHandler = () => {
    console.log("products");
  };

  const usersHandler = () => {
    console.log("users");
  };

  return (
    <>
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
          {ctx.isAdmin === true && (
            <ListItem key={"Users"} disablePadding>
              <ListItemButton>
                <ListItemText primary="Users" onClick={usersHandler} />
              </ListItemButton>
            </ListItem>
          )}

          {ctx.isAdmin === false && (
            <ListItem key={"Products"} disablePadding>
              <ListItemButton>
                <ListItemText primary="Products" onClick={productsHandler} />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Drawer>
    </>
  );
}

export default LeftBar;
