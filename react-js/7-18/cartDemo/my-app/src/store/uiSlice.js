import { createSlice } from "@reduxjs/toolkit";




const initialUiState = {showCart :false,notification:false}
const uiSlice = createSlice({
 name : 'ui',
 initialState : initialUiState,
 reducers : {
    toggle(state,action){
        state.showCart = !state.showCart
    },
    showNotification(state,action){
       state.notification = {
        status :action.payload.status,
        title : action.payload.title,
        message : action.payload.message
       }
    }
 }

})

export default uiSlice;

export const {toggle,showNotification} =uiSlice.actions