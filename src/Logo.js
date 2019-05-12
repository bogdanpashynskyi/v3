import React from 'react';

import logo from './logo.png';

import './App.css';

const Logo = () => {
  return (
    <div>
      <img 
        src={logo}
        className="logo"
        alt="V3"
      />
    </div>

  )
}

export default Logo;