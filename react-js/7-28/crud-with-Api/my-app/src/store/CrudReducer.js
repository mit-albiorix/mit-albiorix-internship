import { createStore } from "redux";

let initialState = { products: [] };
const crudReducer = (state = initialState, action) => {
  if (action.type === "apiData") {
    return {
      ...state,
      products: action.value,
    };
  }

//   if(action.type === "addProduct"){
//     let temp = state.products;
//     temp.push(action.value)
//     return{
//              ...state,
//              products : [...temp]
//     }
//   }
  return state;
};
const store = createStore(crudReducer);

export default store;
