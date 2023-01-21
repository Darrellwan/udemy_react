import React from "react";
import classes from "./AddUser.module.css"
import Button from "../UI/Button"
import Card from "../UI/Card";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card classPropName={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" />
        <Button type="submit" onClick={addUserHandler}>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
