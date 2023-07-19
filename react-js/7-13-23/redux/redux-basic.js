
const redux = require("redux");

// reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

// store
const store = redux.createStore(counterReducer);

// subscriber

const counterSubscriber = () => {
  // it gets latest state
  const lateststate = store.getState();
  console.log(lateststate);
};

store.subscribe(counterSubscriber);

// action
store.dispatch({ type: "increment" });
