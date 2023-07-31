import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";

import ProductCard from "./ProductCard";
import Button from "@mui/material/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  // const [products, setProducts] = useState();
  const dispatch = useDispatch();
  const products =useSelector((state)=>state.products)
  const navigate = useNavigate();

  const newProductHandler = () => {
    navigate("addProduct");
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // setProducts(response.data);
        dispatch({ type: "apiData", value: response.data });

        console.log("respone", response.data);
      })
      .catch((error) => {
        console.log("err", error);
      });
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Your Products!</h2>
      <Container maxWidth="sm">
        <Button variant="contained" onClick={newProductHandler}>
          New Product
        </Button>
      </Container>

      <ProductCard />
    </>
  );
}

export default Products;
