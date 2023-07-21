import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "./store/uiSlice";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";
import { fetchProducts } from "./store/services";

function App() {
  console.log("app");
  const showCart = useSelector((state) => state.ui.showCart);
  // const cartProducts = useSelector((state) => state.cart.cartProducts);
  // const cart =useSelector((state)=>state.cart)
  const notification = useSelector((state) => state.ui.notification);
  const error = useSelector((state) => state.cart.error);
  const pending = useSelector((state) => state.cart.pending);

  console.log("err", error);

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(productsFromApi);
    console.log("getit");
    // dispatch(fetchCartData());
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      {pending && <p>loading......</p>}
      {!pending && error && <p>{error}</p>}
      {!pending && !error && (
        <Layout>
          {showCart && <Cart />}
          <Products />
        </Layout>
      )}
      {/* {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )} */}
    </>
  );
}

export default App;
