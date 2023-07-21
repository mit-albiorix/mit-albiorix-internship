import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "cart/fetchProducts",
  async () => {
    const response = await fetch(
      "https://react-http-5b187-default-rtdb.firebaseio.com/cart.json"
    );

    // console.log("response", response);
    // if (!response.ok) {
    //   return response.statusText;
    // }

    const responseData = await response.json();
    console.log("rs", responseData);
    return responseData || [];
  }
);

export const sendProducts = createAsyncThunk(
  "cart/sendProducts",
  async (cartProducts) => {
    const res = await fetch(
      "https://react-http-5b187-default-rtdb.firebaseio.com/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cartProducts),
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log("sent", res);
  }
);
