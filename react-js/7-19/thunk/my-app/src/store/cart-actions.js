import { showNotification } from "./uiSlice";
import { showData } from "./cartSlice";

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
      let loadedData = [];

      // for(let index in cartData){
      //   loadedData.push({
      //     id:cartData[index].id,
      //     price : cartData[index].price,
      //     title:cartData[index].title,
      //     qty :cartData[index].qty,
      //     description:cartData[index].description

      //   })
      // }

      dispatch(
        showData(cartData)
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
export const sendCartData = (cartProducts) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      console.log("cart", cartProducts);
      const response = await fetch(
        "https://react-http-5b187-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartProducts),
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("res", response);

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
