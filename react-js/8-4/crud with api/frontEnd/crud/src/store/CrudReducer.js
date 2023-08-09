import { createStore } from "redux";

let initialState = { products: [], isFetched: false, isDeleted: false };
const crudReducer = (state = initialState, action) => {
  if (action.type === "apiData") {
    let temp = [...state.products, ...action.value];
    console.log('DEBUG ', temp, state, action)
    return {
      ...state,
      products: [...temp],
    };
  }

  if (action.type === "addProduct") {
    console.log();
    let temp = [...state.products];
    let addedProduct = action.value;
    temp.push(addedProduct);

    return {
      ...state,
      products: [...temp],
    };
  }

  if (action.type === "deleteProduct") {
    return {
      ...state,
      isDeleted: !state.isDeleted,
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
