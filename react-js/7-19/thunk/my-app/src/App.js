import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "./store/uiSlice";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";


function App() {
  console.log("app");
  const showCart = useSelector((state) => state.ui.showCart);
  // const cartProducts = useSelector((state) => state.cart.cartProducts);
  // const cart =useSelector((state)=>state.cart)
  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const sendCartData = async () => {
  //     dispatch(
  //       showNotification({
  //         status: "pending",
  //         title: "sending...",
  //         message: "Sending cart Data!",
  //       })
  //     );
  //     const reponse = await fetch(
  //       "https://react-http-5b187-default-rtdb.firebaseio.com/cart.json",
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(cart),
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     );

  //     if (!reponse.ok) {
  //       dispatch(
  //         showNotification({
  //           status: "error",
  //           title: "Error...",
  //           message: "Sending cart Data failed!!",
  //         })
  //       );
  //     }

  //     const reponseDataa = await reponse.json();
  //     dispatch(
  //       showNotification({
  //         status: "success",
  //         title: "Success!...",
  //         message: "sent cart data successfully!!",
  //       })
  //     );
  //   };

   

  //   if (isInit === false) {
  //     setIsinit(true);
  //     return;
  //   } else {
  //     sendCartData().catch((error) => {
  //       dispatch(
  //         showNotification({
  //           status: "error",
  //           title: "Error...",
  //           message: "Sending cart Data failed!!",
  //         })
  //       );
  //     });
  //   }
  // }, [cart]);

  // useEffect(()=>{
  
  // },[])

  useEffect(() => {
    // console.log(productsFromApi);
    console.log("getit");
    dispatch(fetchCartData());
    
  }, []);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
