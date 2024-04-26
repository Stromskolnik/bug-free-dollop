import React, { useState, useEffect } from 'react';
import './styles.css'; // Import the CSS file
const Quotes = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => setQuote(data.content));
  }, []);

  return (
    <div className="container">
      <div className="main-content">
        <h1>Random Quote</h1>
        <p>{quote}</p>
      </div>
    </div>
  );
}

export default Quotes;