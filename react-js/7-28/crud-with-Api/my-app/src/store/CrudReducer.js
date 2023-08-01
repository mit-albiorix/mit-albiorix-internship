import { createStore } from "redux";

let initialState = { products: [] };
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

  if (action.type === "deleteProduct") {
    let temp = state.products;
    let matchedIndex = temp.findIndex((product) => {
      return product.id === action.value;
    });
    console.log("matched", matchedIndex);
    temp.splice(matchedIndex, 1);

    return {
      ...state,
      products: [...temp],
    };
  }
  if (action.type === "updateProduct") {
    let temp = state.products;
    console.log("temppp", temp);
    console.log("updateidd", action.value.id);
    let matchedIndex = temp.findIndex((product) => {
      return product.id == action.value.id;
    });
    // console.clear();
    console.log("matchedupdate", matchedIndex);

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
