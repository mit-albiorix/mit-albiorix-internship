import React, { useContext, useState } from "react";

//for card
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
// import d from './../../static/images/'

import "./Cart.css";
import { Button, Container } from "react-bootstrap";
import isAdminContext from "../../context/isAdmin";
import { createSearchParams,useNavigate } from "react-router-dom";



function Cart() {
  const [ctx, setProductCount, setProductsForCart, setAdmin] =
    useContext(isAdminContext);

    const navigate =useNavigate()
 
  const theme = useTheme();

  const productsstr = localStorage.getItem("productsOfCart");
  const products = JSON.parse(productsstr);
  console.log("products from lcoastorage", products);

  let count = localStorage.getItem("prodoctsInCarts");

  const deleteProduct = async (index) => {
    //   let temp = ctx.productsForCart
    //   console.log("before", temp);
    //   temp.splice(index,1);

    //   console.log("temp", temp);

    // await  setProductsForCart([...temp]);
    //   console.log("await", ctx.productsForCart);
    //   localStorage.setItem("productsOfCart", JSON.stringify(ctx.productsForCart));
    //   setProductCount(--ctx.productCount);
    //   localStorage.setItem("prodoctsInCarts", ctx.productCount);
    //   console.log(ctx.productCount)
    //   console.log(ctx.productsForCart);;

    let temp = products;
    console.log("before", temp);
    temp.splice(index, 1);

    console.log("temp", temp);

    await setProductsForCart([...temp]);
    console.log("await", products);
    localStorage.setItem("productsOfCart", JSON.stringify(products));
    // let c=--count;
    setProductCount(--count);
    localStorage.setItem("prodoctsInCarts", count);
    console.log(count);
    console.log(products);
  };
  console.log(count);
  console.log(products);

  const productHandler=(index)=>{
    console.log("hey this is product");
    // navigate('/cart/product/');
    navigate({
      pathname :"/cart/product/",
      search:createSearchParams({
        id:index
      }).toString()
    })
  }
  return (
    <>
      <h1 className="headingCart">Your Products In Cart!</h1>
      <hr />
      <Container>
        {products.length > 0 &&
          products.map((product, index) => {
            return (
              <React.Fragment key={index}>
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={product.image}
                    alt="headphone"
                    onClick={()=>{productHandler(index)}}
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5" onClick={()=>{productHandler(index)}}>
                        {product.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {product.description}
                      </Typography>
                    </CardContent>

                    <div className="footer" style={{ marginLeft: "6px" }}>
                      <Button
                        variant="text"
                        style={{ maxWidth: "100px", color: "blue" }}
                      >
                        Qty
                      </Button>
                      <Button
                        variant="text"
                        style={{ maxWidth: "100px", color: "blue" }}
                        onClick={() => {
                          return deleteProduct(index);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </Box>
                </Card>
                <br />
              </React.Fragment>
            );
          })}

        {products.length === 0 && (
          <h5 style={{ textAlign: "center" }}>
            No Products Added to Cart! Click below to see products
          </h5>
        )}
      </Container>
    </>
  );
}

export default Cart;
