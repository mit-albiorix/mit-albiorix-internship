import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    title: "shoes",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {  title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
   
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const expenseData = (expense) => {
    console.log("in app js");
    console.log(expense);
    // setExpenses(expense, ...expenses);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2 style={{textAlign:"center"}}>ExpensesList</h2>
      <NewExpense expense={expenseData} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
