import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { useState } from "react";
import { increment,decrement,increase,toggleCounter } from "../store/counterSlice";

const Counter = () => {
  // const [showCounter, setShowCounter] = useState(true);

  const counter = useSelector((state) => {
    return state.counter.counter;
  });
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    console.log("hhjj");
    // setShowCounter((prevState) =>{ return(!prevState)});
    dispatch(toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };

  const increseHandler = () => {
    dispatch(increase(5)); // {type  : 'some unique identifier',payload : 5}
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => incrementHandler()}>Increment</button>
        <button onClick={() => increseHandler()}>IncreseBy 5</button>
        <button
          onClick={() => {
            decrementHandler();
          }}
        >
          Decrement
        </button>
      </div>
      <button
        onClick={() => {
          toggleCounterHandler();
        }}
      >
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
