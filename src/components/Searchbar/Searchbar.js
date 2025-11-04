import React from 'react';
import './Searchbar.css';

export default function SearchBar() {
  return (
    
    <form className="subscribe-form" dir="rtl">
  <div className="input-wrapper">
    <span className="input-icon">
     <i className="fas fa-search"></i>
    </span>
    <input type="email" placeholder="   بحث بعنوان المدونة" />
    <button type="submit">بحث</button>
  </div>
</form>

  );
}
