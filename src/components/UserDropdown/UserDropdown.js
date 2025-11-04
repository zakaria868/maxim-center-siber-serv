import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingBag, FaSignOutAlt } from "react-icons/fa";
import "./UserDropdown.css";

const UserDropdown = ({ userName }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="user-dropdown">
      <div className="user-dropdown-toggle" onClick={() => setOpen(!open)}>
        {userName} ⮟
      </div>

      {open && (
        <ul className="user-dropdown-menu">
          <li><FaUser /> <Link to="/profile">الملف الشخصي</Link></li>
          <li><FaShoppingBag /> <Link to="/orders">مشترياتي</Link></li>
          <li><FaSignOutAlt /> <Link to="/logout">تسجيل الخروج</Link></li>
        </ul>
      )}
    </div>
  );
};

export default UserDropdown;
