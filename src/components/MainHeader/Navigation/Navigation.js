import React, { useContext } from 'react';

import styles from './Navigation.module.css';
import AuthContext from '../../../store/auth-context';

const Navigation = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={styles.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href='/'> Users </a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href='/'> Admin </a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button type='button' onClick={props.onLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
