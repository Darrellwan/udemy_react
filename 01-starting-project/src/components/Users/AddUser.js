import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();



  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Username or Age is empty",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Age should > 0",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    const enterUsername = event.target.value;
    if (enterUsername !== "") {
      setEnteredUsername(event.target.value);
    }
    return;
  };
  const ageChangeHandler = (event) => {
    const enterAge = event.target.value;
    if (!isNaN(enterAge)) {
      setEnteredAge(event.target.value);
    }
    return;
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal title={error.title} message={error.message} onClose={errorHandler}></ErrorModal>
      )}
      <Card classPropName={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            onChange={usernameChangeHandler}
            value={enteredUsername}
            id="username"
            type="text"
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            onChange={ageChangeHandler}
            value={enteredAge}
            id="age"
            type="number"
          />
          <Button type="submit" onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
