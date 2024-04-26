// Images.js
import React, { useState, useEffect } from 'react';
import './styles.css';

const Images = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const accessKey = '05gwHk8m_GleeT8Ts8zQxOhnagR_VMuR4Gk3GR3aoKg'; 
    fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`)
      .then(response => response.json())
      .then(data => setImageUrl(data.urls.regular))
      .catch(error => console.error('Error fetching image:', error));
  }, []);

  return (
    <div className="container">
      <div className="main-content">
        <h1>Random Image</h1>
        {imageUrl ? <img src={imageUrl} alt="Random" style={{ maxWidth: '400px' }} /> : <p>Loading image...</p>}
      </div>
    </div>
  );
}

export default Images;
