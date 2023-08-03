import { createStore } from "redux";

let initialState = { products: [], isFetched: false };
const crudReducer = (state = initialState, action) => {
  if (action.type === "apiData") {
    return {
      ...state,
      products: action.value,
      isFetched: true,
    };
  }

  if (action.type === "addProduct") {
    console.log();
    let temp = [...state.products];
    let addedProduct = action.value;
    temp.unshift(addedProduct);

    return {
      ...state,
      products: [...temp],
    };
  }

  if (action.type === "deleteProduct") {
    let temp = state.products;
    let matchedIndex = temp.findIndex((product) => {
      return product.id === action.value;
    });

    temp.splice(matchedIndex, 1);

    return {
      ...state,
      products: [...temp],
    };
  }
  if (action.type === "updateProduct") {
    let temp = state.products;

    let matchedIndex = temp.findIndex((product) => {
      return product.id == action.value.id;
    });

    temp[matchedIndex] = action.value;
    return {
      ...state,
      products: [...temp],
    };
  }
  return state;
};
const store = createStore(crudReducer);

export default store;
