import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";


function ExpenseItem(props) {

    // date (it is leter moved to new component)
    // const month = props.expense.date.toLocaleString("en-us", { month: "long" });
    // const day = props.expense.date.toLocaleString("en-us", { day: "2-digit" });
    // const year = props.expense.date.getFullYear();


  return (

    //first way to handle props
    //    <div className="expense-item">
    //     <div>{props.date}</div>
    //       <div className="expense-item__description">
    //         <h2>
    //             {props.title}
    //         </h2>
    //         <div className="expense-item__price">${props.amount}</div>
    //       </div>
    //       </div>
    

    // second way to handle props
    <div className="expense-item">
      <ExpenseDate expense = {props.expense}/>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
