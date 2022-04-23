import React from 'react';
import './Order.css';
import assets from '../assets';

const Order = () => {
  return (
    <div className="order">
      <img src={assets.iconMusic} alt="music icon" />
      <div className="order-info">
        <h4>Annual Plan</h4>
        <p>$59.99/year</p>
      </div>
      <button className="btn-change">change</button>
    </div>
  );
};

export default Order;
