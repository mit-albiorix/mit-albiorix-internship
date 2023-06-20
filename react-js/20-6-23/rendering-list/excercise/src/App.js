import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";
// import "./Conditional.css";
import React, { useState } from "react";

function App() {
  const todos = ["Learn React", "Practice React", "Profit!"];
  const [isDeleting, setIsDeleting] = useState(false);

  // const handleDelete = () => {
  //   setContent(true);
  // };

  // const handleProcced = () => {
  //   setContent(false);
  // };
  function handleDelete() {
    setIsDeleting(true);
}

function handleProcced() {
    setIsDeleting(false);
}


  let warning;
  if (isDeleting===true) {
    warning = 
      <div id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={handleProcced}>Proceed</button>
      </div>
    
  }
  return (
    //  todo list excercise
    // <div className="App">
    //   <Todo items={todos} />
    // </div>;

    // conditional rendering excercise
    <div>
      {warning}
      <button type="submit" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default App;
