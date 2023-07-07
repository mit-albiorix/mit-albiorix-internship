import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import "./Cart.css";
import { Button, Container } from "react-bootstrap";
import isAdminContext from "../../context/isAdmin";
import img from './../../static/images/headphone.png'

function CartProduct() {
  const location = useLocation();
  console.log(img===location.state.product.image);
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
            sx={{ width: 300,height:500 }}
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
