import { createSlice } from "@reduxjs/toolkit";
import { showNotification } from "./uiSlice";
import { useDispatch } from "react-redux";

const initialCartState = { cartProducts: [], count: 0, quantity: 0 };
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
      let matctedProdInCart = statewithoutProxy.cartProducts.filter(
        (product) => {
          return product.id === action.payload.id;
        }
      );

      let matchedIndex = statewithoutProxy.cartProducts.findIndex((product) => {
        return product.id === addProd.id;
      });

      console.log("inddex", matchedIndex);
      console.log("pro", statewithoutProxy);

      if (matctedProdInCart?.length > 0) {
        console.log("macted", matctedProdInCart);
        console.log("qty", statewithoutProxy.cartProducts[matchedIndex]);
        state.cartProducts[matchedIndex].qty =
          state.cartProducts[matchedIndex].qty + 1;
      } else {
        addProd.qty = 1;
        state.cartProducts.push(addProd);
        console.log("pro", statewithoutProxy.cartProducts);
      }
    },

    increaseProductCart(state, action) {
      let matchedIndexForIncrement = state.cartProducts.findIndex((product) => {
        return product.id === action.payload;
      });

      state.cartProducts[matchedIndexForIncrement].qty =
        state.cartProducts[matchedIndexForIncrement].qty + 1;
    },
    decreaseProductCart(state, action) {
      let matchedIndexForDecrement = state.cartProducts.findIndex((product) => {
        return product.id === action.payload;
      });

      state.cartProducts[matchedIndexForDecrement].qty =
        state.cartProducts[matchedIndexForDecrement].qty - 1;

      if (state.cartProducts[matchedIndexForDecrement].qty === 0) {
        state.cartProducts.splice(matchedIndexForDecrement, 1);
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-http-5b187-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();

      dispatch(
        showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};

export default cartSlice;

export const { addProduct, increaseProductCart, decreaseProductCart } =
  cartSlice.actions;
