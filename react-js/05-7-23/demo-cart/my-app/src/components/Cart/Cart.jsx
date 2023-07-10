import React, { useContext, useEffect, useState } from "react";

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

// for qty select
// import Box from '@mui/material/Box';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// import d from './../../static/images/'

import "./Cart.css";
import { Button, Container } from "react-bootstrap";
import isAdminContext from "../../context/isAdmin";
import { createSearchParams, useNavigate } from "react-router-dom";

function Cart() {
  const [ctx, setProductCount, setProductsForCart, setAdmin] =
    useContext(isAdminContext);

  // for to set qty after each time change the value in localstoarge
  const [productsFromStorage, setproductsFromStorage] = useState([]);

  // const productsstr = localStorage.getItem("productsOfCart");
  // const products = JSON.parse(productsstr);
  // console.log("products from lcoastorage", products);
  // setproductsFromStorage([...products])

  useEffect(() => {
    const productsstr = localStorage.getItem("productsOfCart");
    const products = JSON.parse(productsstr);
    setproductsFromStorage([...products]);
  }, [localStorage.getItem("productsOfCart")]);

  const navigate = useNavigate();

  const theme = useTheme();

  let count = localStorage.getItem("prodoctsInCarts");

  useEffect(() => {
    const productsstr = localStorage.getItem("productsOfCart");
    const products = JSON.parse(productsstr);
    setproductsFromStorage([...products]);

    let oldcount = localStorage.getItem("prodoctsInCarts");
    setProductCount(oldcount);
    console.log("before setting 0", productsFromStorage);
  }, []);

  // const [Qty, setQty] = React.useState("");

  const handleChange = (event, product) => {
    let matchedIndex = productsFromStorage.findIndex((prod) => {
      return product.title === prod.title;
    });

    console.log("product", product);
    console.log("matchedIndex", matchedIndex);
    console.log("qty of index for 0", productsFromStorage[matchedIndex].qty);

    let newcount =
      ctx.productCount -
      productsFromStorage[matchedIndex].qty +
      event.target.value;
    productsFromStorage[matchedIndex].qty = event.target.value;

    if (matchedIndex !== -1) {
      if (event.target.value === 0) {
        productsFromStorage.splice(matchedIndex, 1);

        console.log("after deleting 0", productsFromStorage);
      }
    }

    setProductsForCart([...productsFromStorage]);
    console.log("products after qty", productsFromStorage);
    localStorage.setItem("productsOfCart", JSON.stringify(productsFromStorage));

    setProductCount(newcount);
    localStorage.setItem("prodoctsInCarts", newcount);
    console.log(newcount);
  };

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

    let temp = productsFromStorage;
    count = count - temp[index].qty;
    console.log("before", temp);
    temp.splice(index, 1);

    console.log("temp", temp);

    await setProductsForCart([...temp]);
    console.log("await", productsFromStorage);
    console.log("countof delete", count);
    localStorage.setItem("productsOfCart", JSON.stringify(productsFromStorage));
    // let c=--count;

    console.log("deleteqty", productsFromStorage[index]);
    // if(index !== -1){

    // }
    setProductCount(count);
    localStorage.setItem("prodoctsInCarts", count);
    console.log(count);
    console.log(productsFromStorage);
  };
  console.log(count);
  console.log(productsFromStorage);

  const productHandler = (product) => {
    console.log("hey this is product");
    // console.log("title",title);

    // let name ="mit";
    navigate("/cart/product/", { state: { product: product } });
    // navigate({});
  };
  return (
    <>
      <h1 className="headingCart">Your Products In Cart!</h1>
      <hr />
      <Container>
        {productsFromStorage.length > 0 &&
          productsFromStorage.map((product, index) => {
            return (
              <React.Fragment key={index}>
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={product.image}
                    alt="headphone"
                    onClick={() => {
                      productHandler(product);
                    }}
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography
                        component="div"
                        variant="h5"
                        onClick={() => {
                          productHandler(product);
                        }}
                      >
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

                    <Box sx={{ minWidth: 120 }}>
                      <div
                        className="footer"
                        style={{ marginLeft: "6px", marginBottom: "10px" }}
                      >
                        <FormControl>
                          <InputLabel id="demo-simple-select-label">
                            Qty
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={product.qty}
                            label="Qty"
                            onChange={(event) => {
                              handleChange(event, product);
                            }}
                            style={{ maxWidth: "85px" }}
                          >
                            <MenuItem
                              value={0}
                              // onClick={() => {
                              //   return deleteProduct(index);
                              // }}
                            >
                              0
                            </MenuItem>

                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                          </Select>
                        </FormControl>
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
                  </Box>
                </Card>
                <br />
              </React.Fragment>
            );
          })}

        {productsFromStorage.length === 0 && (
          <h5 style={{ textAlign: "center" }}>
            No Products Added to Cart! Click below to see products
          </h5>
        )}
      </Container>
    </>
  );
}

export default Cart;
