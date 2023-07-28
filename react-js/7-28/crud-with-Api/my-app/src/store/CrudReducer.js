import { createStore } from "redux";

let initialState = { products: [] };
const crudReducer = (state = initialState, action) => {
    
};
const store = createStore(crudReducer);

export default store;
