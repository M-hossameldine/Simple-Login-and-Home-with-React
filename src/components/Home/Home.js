import React from 'react';

import styles from './Home.module.css';

import Card from '../UI/Card/Card';

const Home = (props) => {
  return (
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
