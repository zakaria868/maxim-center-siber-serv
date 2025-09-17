import React from 'react';
import './Searchbar.css';

export default function SearchBar() {
  return (
    
    <form class="subscribe-form" dir="rtl">
  <div class="input-wrapper">
    <span class="input-icon">
     <i class="fas fa-search"></i>
    </span>
    <input type="email" placeholder="   بحث بعنوان المدونة" />
    <button type="submit">بحث</button>
  </div>
</form>

  );
}
