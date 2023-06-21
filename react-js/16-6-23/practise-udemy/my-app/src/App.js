import logo from './logo.svg';
import './App.css';
import Excercise from './components/Excercise';

function App() {

  const arr = [{
    title : "product1",
    price : 10,
    info : "this is product1"
  },
  {
    title : "product2",
    price : 100,
    info : "this is product2"
  }];

  return (<div>

    <Excercise product ={arr[0]}/>
    <Excercise product ={arr[1]}/>

  </div>
  );
}

export default App;
