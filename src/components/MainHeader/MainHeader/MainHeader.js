import React from 'react';

import Navigation from '../Navigation/Navigation';
import styles from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={styles['main-header']}>
      <h2>Typical Header</h2>
      <Navigation
        onLogout={props.onLogout}
        isLoggedIn={props.isAuthenticated}
      />
    </header>
  );
};

export default MainHeader;
