import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  // multiple states for form
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const titleChangeHandler = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    console.log(e.target.value);
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
  };

  //single state for whole form

  // const [inputForm,setInputForm] = useState({
  //     enteredTitle : "",
  //     enteredAmount : "",
  //     enteredDate : ""

  // })

  //  const titleChangeHandler = (e)=>{
  //     console.log(e.target.value);
  //     setInputForm({
  //         ...inputForm,
  //         enteredTitle : e.target.value
  //     })
  // }

  // const amountChangeHandler = (e)=>{
  //     console.log(e.target.value);
  //     setInputForm({
  //         ...inputForm,
  //         enteredAmount : e.target.value
  //     })
  // }

  // const dateChangeHandler = (e)=>{
  //     console.log(e.target.value);
  //     setInputForm({
  //         ...inputForm,
  //         enteredDate : e.target.value
  //     })
  // }

  // when you depend on prevState then u should use prevState concept
  // const titleChangeHandler = (e)=>{
  //     console.log(e.target.value);
  //     setInputForm((prevState =>{
  //         return {
  //             ...prevState,
  //         enteredTitle : e.target.value
  //         }
  //     }))
  // }

  // only one event handler function
//   const inputChangeHandler = (inputIdentifier,value) =>{
//      if(inputIdentifier === 'title'){
//         setTitle(value)
//      }else if(inputIdentifier === "amount"){
//         setAmount(value)
//      }else{
//         setDate(value)
//      }
//   }

  return (
    <form>
        {/* this div for to understand for how one function is used for all input events  */}
      {/* <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={(event)=>{inputChangeHandler("title",event.target.value)}} />
        </div>
      </div> */}

      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
