import React from "react";
import { useLocation } from "react-router-dom";

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import "./Cart.css";
import { Button, Container } from "react-bootstrap";

function CartProduct() {
  const location = useLocation();

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "10px" }}>
        Here! Your Product!
      </h2>
      <hr />
      {console.log("hbhjbhj", location.state.product.image)}
      <Container>
        <Card sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ width: 300, height: 500 }}
            image={location.state.product.image}
            // alt="headphone"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {location.state.product.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {location.state.product.description}
              </Typography>
            </CardContent>

            {/* <div className="footer" style={{ marginLeft: "6px" }}>
              <Button
                variant="text"
                style={{ maxWidth: "100px", color: "blue" }}
              >
                Qty
              </Button>
             
            </div> */}
          </Box>
        </Card>
      </Container>
    </>
  );
}

export default CartProduct;
