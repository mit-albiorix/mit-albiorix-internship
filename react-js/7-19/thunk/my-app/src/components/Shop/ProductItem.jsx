import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/cartSlice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { sendCartData } from "../../store/cart-actions";
import { useEffect, useState } from "react";

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const item = { id, title, price, description };
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const cart = useSelector((state) => state.cart);
  const [isInit, setIsinit] = useState(false);

  const productHandler = () => {
    console.log("clicked");
    dispatch(addProduct(item));
    setIsinit(true);
  };

  useEffect(() => {
   
    if (isInit) {
      console.log("cartpro", cartProducts);
      dispatch(sendCartData(cartProducts));
      setIsinit(false);
    }
  }, [cartProducts]);

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={productHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
