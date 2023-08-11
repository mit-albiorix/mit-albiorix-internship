import { createStore } from "redux";

const initialState = { folders: [] };
const folderReducer = (state = initialState, action) => {
  if (action.type === "addfolders") {
    let temp;
    if (state.folders?.length === 0) {
      //   temp = [...state.products];
      temp = [...state.folders, action.value];
    } else {
      console.log("name", action.value);
      temp = [...state.folders, [action.value]];
    }
    return {
      ...state,
      folders: [...temp],
    };
  }
  return state;
};

const store = createStore(folderReducer);

export default store;
