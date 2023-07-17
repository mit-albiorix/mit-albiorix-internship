import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import authSlice from "./authSlice";

// for one reducerSlice
// const store = configureStore({
//   reducer: counterSlice.reducer,
// });

// // for multiple reducerSlice
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
