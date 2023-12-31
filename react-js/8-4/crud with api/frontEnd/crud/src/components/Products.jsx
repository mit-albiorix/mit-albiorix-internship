import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import Container from "@mui/material/Container";

import ProductCard from "./ProductCard";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import Spinner from "./Spinner";
// import { Pagination } from "@mui/material";
import Pagination from "./PaginationComponent";
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log("product", products);
  const isFetched = useSelector((state) => state.isFetched);
  const [isLoaded, setIsLoaded] = useState(false);
  const isDeleted = useSelector((state) => state.isDeleted);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [open, setOpen] = React.useState(false);
  const [totalProducts, setTotalProducts] = useState(null);
  const [message, setMessage] = useState({
    msg: "",
    msgType: "",
  });


  const size = 2;
  // const []
  console.log("deleted", isDeleted);
  const navigate = useNavigate();

  const newProductHandler = () => {
    navigate("addProduct");
  };

  const pageNumberFunc = (pageNumber) => {
    setPage(pageNumber);
  };
  // console.log("paggge", page);

  const fetchdata = () => {
    console.log("DEBUG PRODS hey", page);
    // return (
    axios
      .get(
        `https://dummy-api-un4f.onrender.com/api/v1/products?page=${page}&size=${size}`
      )
      .then((response) => {
        console.log("resforpage", response.data.data);
        const products = response.data.data.products;
        // console.log("prods",products);
        let total_results = response.data.data.total_results;
        setTotalProducts(total_results);
        const temptotalpage = Math.round(total_results / +size);
        console.log("cal", temptotalpage);

        setTotalPage(temptotalpage);

        dispatch({ type: "apiData", value: products });
        setPage(response.data.data.page + 1);

        setIsLoaded(true);
      })
      .catch((error) => {
        setOpen(true);
        setMessage({
          msg: error.message,
          msgType: "error",
        });
      });
  };

  useEffect(() => {
    console.log("first");
    fetchdata();
  }, []);

  // console.log("totlpage", totalPage);
  console.log("DEBUG PRODS", page);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Your Products!</h2>
      <Container maxWidth="sm">
        <Button variant="contained" onClick={newProductHandler}>
          New Product
        </Button>
      </Container>

      {!isLoaded && products?.length === 0 && <Spinner />}
      {isLoaded && (
        <ProductCard
          fetchdata={() => {
            fetchdata(page);
          }}
          totalProducts={totalProducts}
        />
      )}

      {!isLoaded && products?.length > 0 && (
        <ProductCard
          fetchdata={() => {
            fetchdata(page);
          }}
          totalProducts={totalProducts}
        />
      )}
     

      {/* {isLoaded && (
        <Pagination pageNumberFunc={pageNumberFunc} totalPage={totalPage} />
      )} */}

      {/* {!isLoaded && products?.length > 0 && (
        <Pagination pageNumberFunc={pageNumberFunc} totalPage={totalPage} />
      )} */}
    </>
  );
}

export default Products;
