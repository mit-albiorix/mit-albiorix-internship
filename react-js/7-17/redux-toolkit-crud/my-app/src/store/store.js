import { configureStore } from "@reduxjs/toolkit";
import crudSlice from './crudSlice'

const store = configureStore({
    reducer : {
        createUser : crudSlice.reducer
    }
})


export default store