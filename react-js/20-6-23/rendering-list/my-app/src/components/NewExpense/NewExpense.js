import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isExtendingForm, setExtendingForm] = useState(false);

  //child to parent communication
  const expenseFormData = (inputformData) => {
    const formData = {
      ...inputformData,
    };
    //  console.log(formData);
    props.expense(formData);
  };

  let form;
  let expenseButton;

  const expenseFormHandler = () => {
    setExtendingForm(true);
  };

  const collapseFormHandler = () => {
    setExtendingForm(false);
  };

  if (isExtendingForm) {
    form = (
      <ExpenseForm
        expenseFormData={expenseFormData}
        onCancel={collapseFormHandler}
      />
    );
  } else {
    expenseButton = (
      <button type="button" onClick={expenseFormHandler}>
        Add New Expense
      </button>
    );
  }

  return (
    <div className="new-expense">
      {form}
      {expenseButton}
    </div>
  );
}

export default NewExpense;
