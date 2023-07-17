import { createSlice } from "@reduxjs/toolkit";
const initialAuthStates = { isAuthenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthStates,
  reducers: {
    logIn(state) {
      state.isAuthenticated = true;
    },

    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice;
export const { logIn, logOut } = authSlice.actions;
