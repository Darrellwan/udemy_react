import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // })
    // this way is better
    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle: event.target.value }
    // })
    setEnteredTitle(event.target.value);
  };
  const AmountChangeHandler = (event) => {
    // setUserInput((prevState) => {
    //     return {...prevState, enteredAmount: event.target.value }
    // })
    setEnteredAmount(event.target.value);
  };
  const DateChangeHandler = (event) => {
    // setUserInput((prevState) => {
    //     return {...prevState, enteredDate: event.target.value }
    // })
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData)

    setEnteredTitle('')
    setEnteredAmount('0')    
    setEnteredDate('')
    // console.log(expenseData)

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0"
            step="1"
            value={enteredAmount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2030-12-31"
            value={enteredDate}
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onClickCancel}>Cancel</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
