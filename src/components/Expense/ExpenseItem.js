import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(props) {
  // Just call it inside the component
  // return [prop.title, setTitle]  => always
  const [title, setTitle] = useState(props.title);

  // In React, here will only have one parameter
  // console.log(props);

  const clickHandler = () => {
    setTitle("Updated!")
    console.log({ title: title});
    // Here is not update right away
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
