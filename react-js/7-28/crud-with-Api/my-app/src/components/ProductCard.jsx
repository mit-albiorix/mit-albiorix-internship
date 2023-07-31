import React from "react";
// import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import theme from "@mui/material/theme"

import "./../assests/css/ProductCard.css";
import { useSelector } from "react-redux";

function ProductCard() {
  const theme = {
    spacing: 8,
  };

  const productsdata = useSelector((state) => state.products);

  return (
    <>
      <CssBaseline />

      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: ":fullscreen", mt: 10 }}>
          {productsdata?.map((product) => {
            return (
              <Card sx={{ maxWidth: 345, marginTop: "20px" }} key={product.id}>
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
                  <Typography>Price :{product.price}</Typography>
                  <Typography>Rating :{product.rating.rate}</Typography>
                  <Typography>Count : {product.rating.count}</Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>
    </>
  );
}

export default ProductCard;
