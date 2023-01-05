import React, { useState } from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const InitExpenses = [
  {
    id: "001",
    title: "鼎泰豐",
    date: new Date(2021, 12, 21),
    amount: 800,
  },
  {
    id: "002",
    title: "早餐",
    date: new Date(2021, 12, 21),
    amount: 50,
  },
  {
    id: "003",
    title: "午餐",
    date: new Date(2021, 12, 21),
    amount: 150,
  },
  {
    id: "004",
    title: "晚餐",
    date: new Date(2021, 12, 21),
    amount: 100,
  },
]

// a component in react is just a function

// instructor prefer using the arrow function 
const App = () => { 
  const [expenses, setExpenses] = useState(InitExpenses)
  
  const setExpenseHandler = (expenseData) => {
    console.log(expenseData)

    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses]
    })
    // expenses.push(expenseData);
  }
  console.log(expenses)

  return (
    <div>
      <NewExpense onSubmitExpense={setExpenseHandler} />
      <Expense expense={expenses}/>
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
