import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { fetchCartData } from "../../store/cart-actions";

const Cart = (props) => {
  const dispatch = useDispatch();
  // const productsFromApi = useSelector((state) => state.cart.showProducts);
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  useEffect(() => {
    // console.log(productsFromApi);
    dispatch(fetchCartData());
  }, []);

  //console.log("cart", productsFromApi);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartProducts?.map((cartProduct, index) => {
          return (
            <CartItem
              key={index}
              item={{
                id: cartProduct.id,
                title: cartProduct.title,
                quantity: cartProduct.qty,
                total: 18,
                price: cartProduct.price,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
