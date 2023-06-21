import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {

  //child to parent communication
  const expenseFormData = (inputformData)=>{
       const formData ={
        ...inputformData
       }
      //  console.log(formData);
       props.expense(formData)
  };

  //chile to parent 


  return (
    <div className="new-expense">
       <ExpenseForm  expenseFormData = {expenseFormData}/>
    </div>
  )
}

export default NewExpense
