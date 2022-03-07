import React, { useState, useEffect, useReducer, useContext } from 'react';

import styles from './Login.module.css';

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import AuthContext from '../../store/auth-context';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().includes('@') };
  }
  if (action.type == 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().includes('@') };
  }
  return { value: '', isValid: null };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
};

const Login = () => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const authCtx = useContext(AuthContext);

  // to make useEffect validation stop running after fulfilling the validation conditions
  // because any change in the values of dependency states will make useEffect run again even if the input values are valid so we want to extract only the validation a part of the state
  // effect function would re-run whenever ANY property of state changes - not just the one property our effect might depend on.
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  // Form Validation
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Form Validation');
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    // Cleanup Function
    return () => {
      console.log('Clean Validation');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    authCtx.onLogin(emailState, passwordState);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div className={styles.controls}>
          <div
            className={`${styles.control} ${
              emailState.isValid === false ? styles.invalid : ''
            }`}
          >
            <label htmlFor='email'> E-Mail </label>
            <input
              type='email'
              id='email'
              value={emailState.value}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </div>
          <div
            className={`${styles.control} ${
              passwordState.isValid === false ? styles.invalid : ''
            }`}
          >
            <label htmlFor='password'> Password </label>
            <input
              id='password'
              type='password'
              value={passwordState.value}
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
