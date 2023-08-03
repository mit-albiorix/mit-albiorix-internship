import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";

import ProductCard from "./ProductCard";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log("product", products);
  const isFetched = useSelector((state) => state.isFetched);
  const [isLoaded, setIsLoaded] = useState(false);

  const navigate = useNavigate();

  const newProductHandler = () => {
    navigate("addProduct");
  };

  useEffect(() => {
    if (isFetched === false) {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          dispatch({ type: "apiData", value: response.data });
          setIsLoaded(true);
        })
        .catch((error) => {
          console.log("err", error);
        });
    }
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Your Products!</h2>
      <Container maxWidth="sm">
        <Button variant="contained" onClick={newProductHandler}>
          New Product
        </Button>
      </Container>

      {!isLoaded && products.length === 0 && <Spinner />}
      {isLoaded && <ProductCard />}
      {!isLoaded && products.length > 0 && <ProductCard />}
    </>
  );
}

export default Products;
