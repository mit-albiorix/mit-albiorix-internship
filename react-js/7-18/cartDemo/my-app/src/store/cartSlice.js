import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cartProducts: [], count: 0, quantity: 0 };
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
      let matctedProdInCart = statewithoutProxy.cartProducts.filter(
        (product) => {
          return product.id === action.payload.id;
        }
      );

      let matchedIndex = statewithoutProxy.cartProducts.findIndex((product) => {
        return product.id === addProd;
      });

      // console.log("mactehd",matctedProdInCart);
      console.log("len",matctedProdInCart?.length);
      if (matctedProdInCart?.length > 0) {
        console.log("macted", matctedProdInCart);
        state.cartProducts[matchedIndex].qty = state.cartProducts[matchedIndex].qty + 1
      } else {
        addProd.qty = 1;
        state.cartProducts.push(addProd);
        console.log("pro", statewithoutProxy.cartProducts);
      }
    },
  },
});

export default cartSlice;

export const { addProduct } = cartSlice.actions;
