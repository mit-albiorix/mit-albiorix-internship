import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const expenseFilterYearHandler = (selectedYear) => {
    console.log("value in expenses " + selectedYear);
    setFilterYear(selectedYear);
  };

  let filteredExpenses = props.items.filter((expense) => {
    return (
      filterYear === expense.date.toLocaleString("en-US", { year: "numeric" })
    );
  });


  // rendering expenses based on year
  let expenseContent = <p>No expenses found</p>

  if(filteredExpenses.length > 0){
    expenseContent = filteredExpenses.map((expense, index) => {
        return (
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          initialSelected={filterYear}
          expenseFilterYear={expenseFilterYearHandler}
        />

        {/* conditional rendering  */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filteredExpenses.map((expense, index) => {
            return (
              <ExpenseItem
                key={index}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })
        )} */}

      {/* second way conditional rendering  */}
        {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense, index) => {
            return (
              <ExpenseItem
                key={index}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })} */}


          {/* third way of rendering conditional content 
           */}

           {expenseContent}

      </Card>
    </div>
  );
};

export default Expenses;
