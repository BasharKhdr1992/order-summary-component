import React from 'react';
import './App.css';
import OrderSummary from './components/OrderSummary';

const App = () => {
  return (
    <div className="wrapper">
      <OrderSummary />
      <div class="attribution">
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
