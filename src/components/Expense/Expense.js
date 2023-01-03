import React, { useState } from "react";
import "./Expense.css";
import ExpensesFilter from "../UI/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";

function Expense(props) {
  const [filterYear, setFilterYear] = useState("2022");
  const setYearHandler = (selectYear) => {
    setFilterYear(selectYear);
  };

  const filteredExpense = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectYear={filterYear} onSelectYear={setYearHandler} />
        <ExpenseList expense={filteredExpense} />
      </Card>
    </div>
  );
}

export default Expense;
