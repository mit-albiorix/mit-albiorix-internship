import React, { useState, useContext, useEffect } from "react";

import "./HomeBlock.css";

import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";

import Users from "../Users/Users";
import Products from "../Products/Products";
import isAdminContext from "../../context/isAdmin";

import Header from "./Header";
import LeftBar from "./LeftBar";


function HomeBlock() {
  const [ctx, setProductCount, setProductsForCart, setAdmin, setLogIn] =
    useContext(isAdminContext);
  let { isAdmin, isLoggedIn, productCount, productsForCart } = ctx;




  //when you refresh the page and make login as it is
  let adminFromStorage = "";
  useEffect(() => {
    adminFromStorage = localStorage.getItem("LoggedInAdmin");
    console.log("admin", adminFromStorage);
    adminFromStorage === "Admin" ? setAdmin(true) : setAdmin(false);
    console.log("refresh", ctx.isAdmin);
  }, []);

  console.log("out", ctx.isAdmin);
  const logoutHandler = () => {
    setLogIn(false);
    localStorage.removeItem("LoggedInAdmin");
    localStorage.removeItem("LoggedInUsers");
  };


  //count from storage
  useEffect(() => {
    const productsForCartFromLocalStoragestr =
      localStorage.getItem("productsOfCart");
    const productsForCartFromLocalStorage = JSON.parse(
      productsForCartFromLocalStoragestr
    );

    if (productsForCartFromLocalStorage !== null) {
      setProductsForCart(productsForCartFromLocalStorage);
    }

    const productCountOfCart = localStorage.getItem("prodoctsInCarts");
    if (productCountOfCart !== null) {
      setProductCount(productCountOfCart);
    }
  }, []);

  useEffect(() => {
    // if (productsForCart.length > 0) {
    console.log("into cart", ctx.productsForCart);
    localStorage.setItem("productsOfCart", JSON.stringify(ctx.productsForCart));
    // }
  }, [ctx.productsForCart]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />
        <LeftBar />
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "#faf2f2cf", p: 3 }}>
          <Toolbar />
          {ctx.isAdmin === true && <Users />}
          {ctx.isAdmin === false && (
            <Products setProductCount={setProductCount} />
          )}
        </Box>
      </Box>
    </>
  );
}

export default HomeBlock;
