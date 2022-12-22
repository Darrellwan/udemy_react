import React from "react";
import Expense from "./components/Expense/Expense";



// a component in react is just a function

// instructor prefer using the arrow function 
const App = () => {
  const expense = [
    {
      id: "001",
      title: "鼎泰豐",
      date: new Date(2022, 12, 21),
      amount: 800,
    },
    {
      id: "002",
      title: "早餐",
      date: new Date(2022, 12, 21),
      amount: 50,
    },
    {
      id: "003",
      title: "午餐",
      date: new Date(2022, 12, 21),
      amount: 150,
    },
    {
      id: "004",
      title: "晚餐",
      date: new Date(2022, 12, 21),
      amount: 100,
    },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense expense={expense}/>
    </div>
  );

  /**
   * This equals to above return
  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Let's get started!"),
    React.createElement(Expense, {expense: expense})
  );
   */
}

export default App;
