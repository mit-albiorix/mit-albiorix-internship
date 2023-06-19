
import { useState } from 'react';
import './App.css';

function App() {

  const color = "#8e44ad";
  const text = "click me";
  const [bgColor,setColor] = useState(color);
  const [buttonText,setText] =useState(text);
  
  
  const bgChange = ()=>{
      console.log("clliked");
      let newColor = "red";
      setColor(newColor);

      let newText = "Opps!";
      setText(newText);
  }

  const bgNormal = ()=>{
      console.log("double clicked");
      let normalcolor  = "#8e44ad";
      let normaltext = "click me"
      setColor(normalcolor);
      setText(normaltext);

  }

  return (
   <>
       <div style={{ backgroundColor : bgColor }}>
           <button onClick={bgChange} onDoubleClick={bgNormal}>{ buttonText }</button>
       </div>
   </>
  );
}

export default App;
