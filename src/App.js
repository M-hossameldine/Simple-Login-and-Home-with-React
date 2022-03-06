import React, { useState, useEffect } from 'react';

import MainHeader from './components/MainHeader/MainHeader/MainHeader';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AuthContext from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    console.log(email, password);
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 1);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') == 1) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <>
      <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
        <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home />}
        </main>
      </AuthContext.Provider>
    </>
  );
}

export default App;
