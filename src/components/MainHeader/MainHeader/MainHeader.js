import React from 'react';

import Navigation from '../Navigation/Navigation';
import styles from './MainHeader.module.css';
import AuthContext from '../../../store/auth-context';

const MainHeader = (props) => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <header className={styles['main-header']}>
            <h2>Typical Header</h2>
            <Navigation
              onLogout={props.onLogout}
              isLoggedIn={props.isAuthenticated}
            />
          </header>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default MainHeader;
