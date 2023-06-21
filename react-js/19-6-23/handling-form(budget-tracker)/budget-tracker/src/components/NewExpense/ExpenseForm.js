import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
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


const handleForm = (event) =>{
event.preventDefault();

 const formData = {
  title : enteredTitle,
  amount : enteredAmount,
  date : enteredDate
 }
//  console.log(formData);

// child to parent communication 
props.expenseFormData(formData);



 setTitle("");
 setAmount("");
 setDate("");
}

  return (
    <form onSubmit={handleForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
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
            value={enteredDate}
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
