import React, { useState, useEffect, useRef } from 'react';

import styles from './Login.module.css';

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';

const Login = (props) => {
  // const emailInputRef = useRef();
  // const passwrodInputRef = useRef();
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      enteredEmail.trim().includes('@') && enteredPassword.trim().length > 6
    );
  };

  // useEffect(() => {
  //   setEnteredEmail(emailInputRef.current.value);
  //   setEnteredPassword(passwrodInputRef.current.value);
  //   setFormIsValid(
  //     enteredEmail.trim().includes('@') && enteredPassword.trim().length > 6
  //   );
  // }, []);

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      enteredPassword.trim().length > 6 && enteredEmail.trim().includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.trim().includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div className={styles.controls}>
          <div
            className={`${styles.control} ${
              emailIsValid === false ? styles.invalid : ''
            }`}
          >
            <label htmlFor='email'> E-Mail </label>
            <input
              type='email'
              id='email'
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </div>
          <div
            className={`${styles.control} ${
              passwordIsValid === false ? styles.invalid : ''
            }`}
          >
            <label htmlFor='password'> Password </label>
            <input
              id='password'
              type='password'
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          </div>
        </div>
        <div className={styles.actions}>
          <Button type='submit' className={styles.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
