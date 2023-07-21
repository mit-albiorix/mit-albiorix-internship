import { useEffect, useState } from "react";
import { toggle } from "../../store/uiSlice";
import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const [countOfProducts, setCount] = useState(0);

  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(toggle());
  };

  const cartProducts = useSelector((state) => state.cart.cartProducts);
  console.log("prodsd", cartProducts);

  useEffect(() => {
  

    let countTemp = cartProducts.reduce(
      (firstPro, nextPro) => firstPro + nextPro.qty,
      0
    );
    setCount(countTemp)
  }, [cartProducts]);

  // console.log("count",count);
  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{countOfProducts}</span>
    </button>
  );
};

export default CartButton;
