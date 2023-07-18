import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {showCart :false}
const uiSlice = createSlice({
 name : 'ui',
 initialState : initialUiState,
 reducers : {
    toggle(state,action){
        state.showCart = !state.showCart
    }
 }

})

export default uiSlice;

export const {toggle} =uiSlice.actions