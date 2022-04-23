import React, { useState, useEffect } from 'react';
import './App.css';
import OrderSummary from './components/OrderSummary';
import assets from './assets';

const App = () => {
  const [bg, setBg] = useState(assets.bgDesktop);

  const updateBackground = (e) => {
    if (e.currentTarget.innerWidth < 700) {
      setBg(assets.bgMobile);
    } else {
      setBg(assets.bgDesktop);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateBackground);

    return () => window.removeEventListener('resiz', updateBackground);
  });

  return (
    <div className="wrapper" style={{ backgroundImage: `url(${bg})` }}>
      <OrderSummary />
      <div className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <button>Bashar Khdr</button>.
      </div>
    </div>
  );
};

export default App;
