import { useSelector, useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import {
  decreaseProductCart,
  increaseProductCart,
} from "../../store/cartSlice";
import { useEffect, useState } from "react";
import { sendCartData } from "../../store/cart-actions";

const CartItem = (props) => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const [isInit, setIsinit] = useState(false);

  let { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const increaseItem = (id) => {
    dispatch(increaseProductCart(id));
    setIsinit(true)
  };

  const decreaseItem = (id) => {
    dispatch(decreaseProductCart(id));
    setIsinit(true)
  };

  useEffect(() => {
    // if (isInit === false) {
    //   setIsinit(true);
    //   return;
    // } else {
    //   dispatch(sendCartData(cartProducts));
    // }
    if (isInit) {
      console.log("cartpro", cartProducts);
      dispatch(sendCartData(cartProducts));
      setIsinit(false);
    }
  }, [cartProducts]);

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${price * quantity?.toFixed(2)}
          <span className={classes.itemprice}>(${price?.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => {
              decreaseItem(id);
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              increaseItem(id);
            }}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
