import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (prop) => {
    const [addStatus, setAddStatus] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        prop.onSubmitExpense(expenseData)
    }

    const changeAddStatusHandler = () => {
        setAddStatus(true)
    }

    const cancelAddStatusHandler = () => {
        setAddStatus(false)
    }

    let content =  <ExpenseForm onClickCancel={cancelAddStatusHandler} onSaveExpenseData={saveExpenseDataHandler}  />;
    if(!addStatus){
        content = <div className="new-expense__actions"><button onClick={changeAddStatusHandler} >Add New Expense</button></div>
    }

    return <div className="new-expense">
        {content}
    </div>
};

export default NewExpense;