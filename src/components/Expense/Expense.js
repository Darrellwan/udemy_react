import React, { useState } from "react";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../UI/ExpensesFilter";
import Card from "../UI/Card";

function Expense(props) {
  const [filterYear, setFilterYear] = useState("2022");
  const setYearHandler = (selectYear) => {
    setFilterYear(selectYear);
  };

  const filteredExpense = props.expense.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectYear={filterYear} onSelectYear={setYearHandler} />
        {filteredExpense.map((item, index) => (
          <ExpenseItem
            index={index}
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expense;
