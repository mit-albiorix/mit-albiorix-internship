// import logo from "./logo.svg";
import "./App.css";
import Mit from "./components/Mit";
import Prajapati from "./components/Prajapati";

function App() {
  let name = "mit";

  let Func = () => {
    if (name === "mit20") {
      console.log("mit");
      return (<Mit/>);   
  }else{
    return (<Prajapati/>);  
  }
}
  return (
    <>
  
      <Func/>
      
    </>
  );
}


export default App;
