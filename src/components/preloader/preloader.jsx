import React from 'react';
import './Preloader.css';

function Preloader() {
  return (
    <div className="preloader">
      <img 
        src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748511497/Comp_1_cfobvc.gif" 
        alt="Loading..." 
        className="preloader-gif"
      />
    </div>
  );
}

export default Preloader;
