// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 

const Home = ({ loggedIn, handleLogout }) => {
  return (
    <div className="container">
      <div className="main-content">
        <h1>Home Page</h1>
        {loggedIn ? (
          <div>
            <div className="button-container">
              <button onClick={handleLogout}>Logout</button>
              <div className="button-group">
                <Link to="/quotes"><button>Quotes</button></Link>
                <Link to="/images"><button>Images</button></Link>
              </div>
            </div>
          </div>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    </div>
  );
}

export default Home;
