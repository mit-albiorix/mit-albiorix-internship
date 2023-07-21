import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchProducts } from "./services";

const initialCartState = {
  cartProducts: [],
  error: "",
  pending: false,
  // count: 0,
  // quantity: 0,
  // showProducts: [],
};

// const dispatch=useDispatch()
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addProduct(state, action) {
      let addProd = { ...action.payload };
      // console.log("item",action.payload);
      let statewithoutProxy = JSON.parse(JSON.stringify(state));

      // console.log(statewithoutProxy);

      // console.log("pay",action.payload);s
      let matctedProdInCart = statewithoutProxy.cartProducts?.filter(
        (product) => {
          return product.id === action.payload.id;
        }
      );

      let matchedIndex = statewithoutProxy.cartProducts?.findIndex(
        (product) => {
          return product.id === addProd.id;
        }
      );

      // console.log("inddex", matchedIndex);
      // console.log("pro", statewithoutProxy);

      if (matctedProdInCart?.length > 0) {
        // console.log("macted", matctedProdInCart);
        // console.log("qty", statewithoutProxy.cartProducts[matchedIndex]);
        statewithoutProxy.cartProducts[matchedIndex].qty =
          statewithoutProxy.cartProducts[matchedIndex].qty + 1;
      } else {
        addProd.qty = 1;
        statewithoutProxy.cartProducts.push(addProd);
      }
      state.cartProducts = [...statewithoutProxy.cartProducts];
      console.log("pro", statewithoutProxy.cartProducts);
    },

    increaseProductCart(state, action) {
      let statewithoutProxy = JSON.parse(JSON.stringify(state));
      let matchedIndexForIncrement = state.cartProducts.findIndex((product) => {
        return product.id === action.payload;
      });

      statewithoutProxy.cartProducts[matchedIndexForIncrement].qty =
        statewithoutProxy.cartProducts[matchedIndexForIncrement].qty + 1;

      state.cartProducts = [...statewithoutProxy.cartProducts];
    },
    decreaseProductCart(state, action) {
      let statewithoutProxy = JSON.parse(JSON.stringify(state));
      let matchedIndexForDecrement = state.cartProducts.findIndex((product) => {
        return product.id === action.payload;
      });

      statewithoutProxy.cartProducts[matchedIndexForDecrement].qty =
        statewithoutProxy.cartProducts[matchedIndexForDecrement].qty - 1;

      if (statewithoutProxy.cartProducts[matchedIndexForDecrement].qty === 0) {
        statewithoutProxy.cartProducts.splice(matchedIndexForDecrement, 1);
      }
      state.cartProducts = [...statewithoutProxy.cartProducts];
      console.clear();
      console.log(statewithoutProxy.cartProducts);

      if (statewithoutProxy.cartProducts.length > 0) {
        state.cartProducts = [...statewithoutProxy.cartProducts];
      }

      console.log("statefor0", state.cartProducts);
    },

    showData(state, action) {
      console.log("loaded", action.payload);

      state.cartProducts = [...action.payload];
      console.log("fserver", state.cartProducts);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log("stateinbui", state);
      let tempstate = JSON.parse(JSON.stringify(state));

      console.log("state2", tempstate);

      console.log("action", action.payload);
      state.cartProducts = [...action.payload];
      state.pending = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log("rejected", action.error.message);
      state.error = action.error.message;
      state.pending = false;
    });
    builder.addCase(fetchProducts.pending, (state) => {
      //  console.log("pending",action.payload);
      state.pending = true;
    });
  },
});

export default cartSlice;

export const {
  addProduct,
  increaseProductCart,
  decreaseProductCart,
  showData,
  removeItem,
  countOfProducts,
} = cartSlice.actions;
