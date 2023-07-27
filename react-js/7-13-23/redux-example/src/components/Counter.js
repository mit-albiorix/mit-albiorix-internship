import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { useState } from "react";

const Counter = () => {
  // const [showCounter, setShowCounter] = useState(true);

  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    console.log("hhjj");
    // setShowCounter((prevState) =>{ return(!prevState)});
    dispatch({ type: "toggle" });
  };

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const increseHandler = (val) => {
    console.log("val", val);
    dispatch({ type: "increseby5", value: 5 });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        {/* <button onClick={()=>incrementHandler()}>Increment</button>
        <button onClick={()=>increseHandler()}>IncreseBy 5</button>
        <button onClick={()=>{decrementHandler()}}>Decrement</button> */}

        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increseHandler}>IncreseBy 5</button>
        <button onClick={decrementHandler}>Decrement</button>
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
