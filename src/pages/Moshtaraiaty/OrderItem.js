// src/pages/Moshtaraiaty/OrderItem.js
import React from 'react';

const OrderItem = ({ order }) => {
  return (
    <div className="order-item">
      <img src={order.image} alt={order.title} className="order-image" />
      <div className="order-info">
        <h3>{order.title}</h3>
        <div className="order-meta">
          <span>السعر: {order.price} {order.currency}</span>
          <span>الكمية: {order.quantity}</span>
          <span>المقاس: {order.size}</span>
          <span>
            اللون:
            <span 
              className="color-dot" 
              style={{ backgroundColor: order.color }}
            ></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
