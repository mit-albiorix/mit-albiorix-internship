import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  console.log("cart", cartProducts);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartProducts.map((cartProduct,index) => {
          return (
            <CartItem key={index}
              item={{ title: cartProduct.title, quantity: 3, total: 18, price: cartProduct.price }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
