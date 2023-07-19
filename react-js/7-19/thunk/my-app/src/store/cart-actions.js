import { showNotification } from "./uiSlice";
import { addProduct } from "./cartSlice";

// action creator function
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-5b187-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("could not fetch data!");
      }

      const responseData = await response.json();
      return responseData;
    };
    try {
      const cartData = await fetchData();
      console.log("cartdatat", cartData);

      dispatch(
        // replaceCart({
        //   cartProducts: cartData.items || [],
        //   totalQuantity: cartData.totalQuantity,
        // })
        
        addProduct({
            cartProducts : cartData.cartProducts 
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "success",
          title: "Success!",
          message: "fetching cart data successfully!",
        })
      );
    }
  };
};

// for sending data on api
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
        console.log("cart",cart)
      const response = await fetch(
        "https://react-http-5b187-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("res", response)

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
