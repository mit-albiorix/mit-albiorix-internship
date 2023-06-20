import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Home from './Home';

function App() {
  const [data,setData] = useState(0);
  const [count,setCount] = useState(100);

  return (
   <>
      <Home data={data}/>
      <h1>count is {count}</h1>
      <button onClick={()=>setCount(count+1)}>Clickforcount</button>

   </>
  );
}

export default App;
