import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [Color, setColor] = useState("black");

  const handleColor = () => {
    if (Color === "black") {
      setColor("red");
    } else {
      setColor("black");
    }
  };
  return (
    <div>
      <p className={Color === 'black' ? 'stylemered' : 'stylemeblack'}>Style me!</p>
      <button onClick={handleColor}>Toggle style</button>
    </div>
  );
}

export default App;
