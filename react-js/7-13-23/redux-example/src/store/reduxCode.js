import { createStore } from "redux";

const initialStates = { counter: 0, showCounter: true };

const counterReducer = (state = initialStates, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
      // showCounter : state.showCounter
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
      // showCounter : state.showCounter
    };
  }

  if (action.type === "increseby5") {
    return {
      ...state,
      counter: state.counter + action.value,
      // showCounter : state.showCounter
    };
  }

  if (action.type === "toggle") {
    return {
      ...state,
      showCounter: !state.showCounter,
      // counter : state.counter
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
