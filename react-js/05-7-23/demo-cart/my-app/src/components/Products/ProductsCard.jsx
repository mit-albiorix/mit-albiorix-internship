import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ProductsCart.css";
import isAdminContext from "../../context/isAdmin";
import Cart from "../Cart/Cart";
import Message from "../MessageDisplay/Message";

function ProductsCard(props) {
  const [ctx, setProductCount, setProductsForCart] = useContext(isAdminContext);
  const [productData, setProductData] = useState({
    image: "",
    title: "",
    description: "",
  });

  // console.log("for cart");
  // console.log(productData);
  const products = [
    {
      title: "headphone",
      image: require("./../../static/images/headphone.png"),
      description:
        "Headphonelorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia officiis, eum doloribus quasi possimus reiciendis ea, quidem vitae nam optio vel ipsum fugit.",
    },
    {
      title: "iphone",
      image: require("./../../static/images/iphone.png"),
      description:
        "iphone Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia officiis, eum doloribus quasi possimus reiciendis ea, quidem vitae nam optio vel ipsum fugit.",
    },
    {
      title: "lamborgini",
      image: require("./../../static/images/lamborgini.png"),
      description:
        "lamborgini Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia officiis, eum doloribus quasi possimus reiciendis ea, quidem vitae nam optio vel ipsum fugit.",
    },
    {
      title: "samsung",
      image: require("./../../static/images/samsung.png"),
      description:
        "lamborgini Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia officiis, eum doloribus quasi possimus reiciendis ea, quidem vitae nam optio vel ipsum fugit.",
    },
    {
      title: "samsung",
      image: require("./../../static/images/samsung.png"),
      description:
        "lamborgini Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia officiis, eum doloribus quasi possimus reiciendis ea, quidem vitae nam optio vel ipsum fugit.",
    },
    {
      title: "samsung",
      image: require("./../../static/images/samsung.png"),
      description:
        "lamborgini Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia officiis, eum doloribus quasi possimus reiciendis ea, quidem vitae nam optio vel ipsum fugit.",
    },
    {
      title: "samsung",
      image: require("./../../static/images/samsung.png"),
      description:
        "lamborgini Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia officiis, eum doloribus quasi possimus reiciendis ea, quidem vitae nam optio vel ipsum fugit.",
    },
    {
      title: "samsung",
      image: require("./../../static/images/samsung.png"),
      description:
        "lamborgini Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia officiis, eum doloribus quasi possimus reiciendis ea, quidem vitae nam optio vel ipsum fugit.",
    },
    {
      title: "samsung",
      image: require("./../../static/images/samsung.png"),
      description:
        "lamborgini Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia officiis, eum doloribus quasi possimus reiciendis ea, quidem vitae nam optio vel ipsum fugit.",
    },
    {
      title: "samsung",
      image: require("./../../static/images/samsung.png"),
      description:
        "lamborgini Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia officiis, eum doloribus quasi possimus reiciendis ea, quidem vitae nam optio vel ipsum fugit.",
    },
    {
      title: "samsung",
      image: require("./../../static/images/samsung.png"),
      description:
        "lamborgini Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia officiis, eum doloribus quasi possimus reiciendis ea, quidem vitae nam optio vel ipsum fugit.",
    },
    {
      title: "samsung",
      image: require("./../../static/images/samsung.png"),
      description:
        "lamborgini Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia officiis, eum doloribus quasi possimus reiciendis ea, quidem vitae nam optio vel ipsum fugit.",
    },
    {
      title: "samsung",
      image: require("./../../static/images/samsung.png"),
      description:
        "lamborgini Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia officiis, eum doloribus quasi possimus reiciendis ea, quidem vitae nam optio vel ipsum fugit.",
    },
    {
      title: "samsung",
      image: require("./../../static/images/samsung.png"),
      description:
        "lamborgini Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia officiis, eum doloribus quasi possimus reiciendis ea, quidem vitae nam optio vel ipsum fugit.",
    },
    {
      title: "samsung",
      image: require("./../../static/images/samsung.png"),
      description:
        "lamborgini Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia officiis, eum doloribus quasi possimus reiciendis ea, quidem vitae nam optio vel ipsum fugit.",
    },
  ];

  const handleAddToCart = (productForCart) => {
    // console.log("addtocart", productForCart);
    let temp = ctx.productsForCart;
    temp.push(productForCart);

    setProductsForCart([...temp]);

    //     setProductForCart((prevState)=>{
    // return(
    //   [
    //     ...prevState,
    //     [...productForCart]

    //   ]
    // )
    //     })
    setProductCount(++ctx.productCount);
    console.log("count", ctx.productCount);
    localStorage.setItem("prodoctsInCarts", ctx.productCount);
    console.log(ctx.productCount);
    // alert("added to cart")
    
    // setProductData(productForCart);
    // console.log("set cart data",productData);
    // ctx.productsForCart.push(productData);
    // console.log(ctx.productData);
  };
  console.log("final add to cart", ctx.productsForCart);

  return (
    <div className="products">
      {products.map((product, index) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={index}>
            <CardMedia
              sx={{ height: 140 }}
              image={product.image}
              title={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="warning"
                onClick={() => {
                  handleAddToCart(product);
                }}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}

export default ProductsCard;
