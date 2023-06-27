import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [theme, setTheme] = useState(false);

  // without dependencies mention
  // useEffect(() => {
  //   console.log("useeffect");
  // });
  // console.log("hello mit");


  //with blank dependencies
  // useEffect(() => {
  //   console.log("useeffect");
  // },[]);
  // console.log("hello mit");
  

// with dependencies
  useEffect(() => {
    console.log("useeffect");
    setTheme((prev)=>!prev)
  },[num]);
  console.log(theme);

  return (
    <>
      <h1>{num}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        click me
      </button>
    </>
  );
}

export default App;
