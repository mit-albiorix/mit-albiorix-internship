import React, { useContext, useEffect, useState } from "react";

//for card
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@mui/material";

import "./Cart.css";
import { Button, Container } from "react-bootstrap";
import isAdminContext from "../../context/isAdmin";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [ctx, setProductCount, setProductsForCart, setAdmin] =
    useContext(isAdminContext);

  let { isAdmin, isLoggedIn, productCount, productsForCart } = ctx;

  // for to set qty after each time change the value in localstoarge
  const [productsFromStorage, setproductsFromStorage] = useState([]);

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
      productCount - productsFromStorage[matchedIndex].qty + event.target.value;
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
    let temp = productsFromStorage;
    count = count - temp[index].qty;
    console.log("before", temp);
    temp.splice(index, 1);

    console.log("temp", temp);

    await setProductsForCart([...temp]);
    console.log("await", productsFromStorage);
    console.log("countof delete", count);
    localStorage.setItem("productsOfCart", JSON.stringify(productsFromStorage));

    console.log("deleteqty", productsFromStorage[index]);

    setProductCount(count);
    localStorage.setItem("prodoctsInCarts", count);
    console.log(count);
    console.log(productsFromStorage);
  };
  console.log(count);
  console.log(productsFromStorage);

  const productHandler = (product) => {
    console.log("hey this is product");

    navigate("/cart/product/", { state: { product: product } });
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
