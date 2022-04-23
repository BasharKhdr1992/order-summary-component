import React from 'react';
import './OrderSummary.css';
import assets from '../assets';
import Order from './Order';

const OrderSummary = () => {
  return (
    <div className="order-summary">
      <img src={assets.hero} alt={'illustration hero'} />
      <div className="heading-text">
        <h1>Order Summary</h1>
        <p className="description">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
      </div>
      <Order />
      <button className="btn btn-proceed">proceed to payment</button>
      <button className="btn btn-cancel">cancel</button>
    </div>
  );
};

export default OrderSummary;
