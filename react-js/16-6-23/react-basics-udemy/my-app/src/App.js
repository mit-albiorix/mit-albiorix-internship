import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 1,
      title: "watch",
      amount: 250,
      date: new Date(2023, 11, 3),
    },
    {
      id: 2,
      title: "car",
      amount: 100000,
      date: new Date(2023, 10, 3),
    },
    {
      id: 3,
      title: "bikes",
      amount: 50000,
      date: new Date(2023, 9, 3),
    },
  ];

  return (
    <>
      <h1>Budget Tracker</h1>
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      /><ExpenseItem
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date} */}

      <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
      <ExpenseItem expense={expenses[2]} />
    </>
  );
}

export default App;
