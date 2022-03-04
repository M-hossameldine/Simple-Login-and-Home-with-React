import React, {useState} from 'react';

import MainHeader from './components/MainHeader/MainHeader/MainHeader';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <MainHeader isAuthenticated={} onLogout={} />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
