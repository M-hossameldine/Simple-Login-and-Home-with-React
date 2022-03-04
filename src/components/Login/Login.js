import React, { useRef } from 'react';

import styles from './Login.module.css';

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';

const Login = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(emailInputRef.current.value);
    console.log(passwordInputRef.current.value);
  };
  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor='email'> E-Mail </label>
            <input id='email' type='text' ref={emailInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='password'> Password </label>
            <input id='password' type='password' ref={passwordInputRef} />
          </div>
        </div>
        <div className={styles.actions}>
          <Button type='submit' className={styles.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
