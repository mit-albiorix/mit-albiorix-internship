import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [errorMsg,setMsg] = useState("");
  const [counter,setCounter] = useState(0);

  const handleInput =(e)=>{
      console.log(e.target.value);
      console.log(e.target.value.trim().length);
      if(e.target.value.trim().length>3)
      {
        setMsg("valid msg")
      }else{
        setMsg("invalid msg! length of line must be greater than 3")
      }

  }


  

const handleIncrement = ()=>{
  // setCounter(prevCounter => prevCounter +1)
  setCounter((prevCounter)=>{
      return prevCounter= prevCounter+1;
  })
    
}  
 


  

  return (
    <>
      <div>
          <label htmlFor="">Message</label><br />
          <input type="text" onChange={handleInput}/>
          <span>{errorMsg}</span>


           {/* second excercise  */}
          <p>{counter}</p>
          <button type='button' onClick={handleIncrement}>Increment</button>
           
      </div>
    </>
  );
}

export default App;
