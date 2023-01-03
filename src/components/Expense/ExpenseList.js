import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = props => {    
    if(props.expense.length === 0){
        return <h2 className="expenses-list__fallback">Found no expense</h2>
    }

    return <ul className="expenses-list">
        {props.expense.map((item, index) => (
        <ExpenseItem
          index={index}
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
};

export default ExpenseList