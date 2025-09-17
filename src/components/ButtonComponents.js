import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './ButtonComponents.css';

function TypesExample() {
  return (
    <Button 
      as={Link} 
      to="/products" 
      className="login-btn px-4 py-2 buttonDokhool"
    >
      منتجاتنا
    </Button>
  );
}

export default TypesExample;
