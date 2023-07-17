import {createSlice} from '@reduxjs/toolkit'
const initialCounterStates = { counter: 10, showCounter: true };

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterStates,
    reducers: {
      increment(state) {
        state.counter++;
      },
      decrement(state) {
        state.counter--;
      },
      increase(state, action) {
        state.counter = state.counter + action.payload;
      },
      toggleCounter(state) {
        state.showCounter = !state.showCounter;
      },
    },
  });


  export default counterSlice

  export const { increment, decrement, increase, toggleCounter } =
  counterSlice.actions;