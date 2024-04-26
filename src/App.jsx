// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Quotes from './components/Quotes';
import Images from './components/Images';
import './styles.css';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
    localStorage.setItem('loggedIn', 'true');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.setItem('loggedIn', 'false');
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home loggedIn={loggedIn} handleLogout={handleLogout} />} />
        <Route path="/login" element={<Login loggedIn={loggedIn} handleLogin={handleLogin} />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/images" element={<Images />} />
      </Routes>
    </Router>
  );
}

export default App;
