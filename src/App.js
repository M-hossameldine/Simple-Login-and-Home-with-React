import React, { useState, useContext } from 'react';

import MainHeader from './components/MainHeader/MainHeader/MainHeader';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main>
        {!authCtx.isLoggedIn && <Login />}
        {authCtx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
