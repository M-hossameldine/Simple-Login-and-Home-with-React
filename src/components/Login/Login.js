import React, { useState, useEffect, useRef } from 'react';

import styles from './Login.module.css';

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Form Validation');
      setFormIsValid(
        enteredEmail.trim().includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);

    // Cleanup Function
    return () => {
      console.log('Clean Validation');
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
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
