import { createStore } from "redux";

let initialState = { products: [], addProduct: {} };
const crudReducer = (state = initialState, action) => {
  if (action.type === "apiData") {
    return {
      ...state,
      products: action.value,
    };
  }

  if (action.type === "addProduct") {
    console.log();
    let temp = [...state.products];
    let addedProduct = action.value;
    temp.unshift(addedProduct);
    console.log("temp", temp);
    // console.log("add", addedProduct);

    // temp.push(action.value);
    return {
      ...state,
      products: [...temp],
    };
  }

  // if (action.type === "deleteProduct") {
  //   let matchedIndex = products.findIndex((product) => {
  //     return product.id === id;
  //   });
  //   console.log("matched", matchedIndex);
  //   return {};
  // }
  return state;
};
const store = createStore(crudReducer);

export default store;
