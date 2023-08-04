import React from "react";

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CssBaseline,
  Box,
  Container,
  Button,
} from "@mui/material";

import "./../assests/css/ProductCard.css";
import { useDispatch, useSelector } from "react-redux";

import { createSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductCard() {
  const theme = {
    spacing: 8,
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productsdata = useSelector((state) => state.products) || [];
  const isDeleted = useSelector((state) => state.isDeleted);

  console.log("pro", productsdata);

  const deleteHandler = (id) => {
    console.log("id", id);
    axios
      .delete(`http://localhost:8000/api/v1/products/${id}`)
      .then((response) => {
        console.log("resdeleet", response);
        dispatch({ type: "deleteProduct" });
      })
      .catch((error) => {
        console.log("delete", error);
      });
  };

  const editHandler = (id) => {
    navigate({
      pathname: "addProduct",
      search: createSearchParams({
        id: id,
      }).toString(),
    });
    // dispatch({ type: "editProduct", value: id });
  };

  return (
    <>
      <CssBaseline />

      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: ":fullscreen", mt: 10 }}>
          {productsdata?.map((product) => {
            return (
              <Card sx={{ maxWidth: 345, marginTop: "20px" }} key={product._id}>
                <CardHeader
                  title={product.title}
                  subheader={product.category}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={product.image}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>

                <CardContent>
                  <Typography>Price : $ {product.price} </Typography>
                  {/* <Typography>Rating : {product.rating?.rate}/ 5</Typography> */}
                  {/* <Typography>Quantity : {product.rating?.count}</Typography> */}
                </CardContent>

                <Button
                  variant="contained"
                  color="error"
                  type="submit"
                  onClick={() => {
                    deleteHandler(product._id);
                  }}
                >
                  Delete
                </Button>

                <Button
                  variant="contained"
                  color="info"
                  type="submit"
                  onClick={() => {
                    editHandler(product._id);
                  }}
                >
                  Edit
                </Button>
              </Card>
            );
          })}

          {productsdata?.length === 0 && <p>No Products found!</p>}
        </Box>
      </Container>
      {/* )} */}
    </>
  );
}

export default ProductCard;
