import React, { useState, useEffect, useReducer, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../context/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  } else if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  } else if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, dispatchPasword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  const authCtx = useContext(AuthContext);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

	const emailInputRef = useRef();
	const passwordInputRef = useRef();

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("setFormIsValid");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      // a clean up function
      console.log("Clean Up");
      clearTimeout(identifier);
    };
  }, [setFormIsValid, emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    // setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    dispatchPasword({ type: "USER_INPUT", val: event.target.value });
    // setEnteredPassword(emailState.value);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
    // setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    dispatchPasword({ type: "INPUT_BLUR" });
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
			emailInputRef.current.focus();
    } else if (!passwordIsValid) {
			passwordInputRef.current.focus();
    } else {
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
					ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
					ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
