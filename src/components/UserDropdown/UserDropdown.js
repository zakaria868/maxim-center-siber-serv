import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingBag, FaSignOutAlt } from "react-icons/fa";
import "./UserDropdown.css";

const UserDropdown = ({ userName }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        await fetch("https://maxim-test.courseszone-eg.com/api/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });
      }

      // ✅ حذف بيانات المستخدم محلياً
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // ✅ إعادة تحميل الصفحة لتحديث الـ Navbar
      window.location.reload();

      // ✅ توجيه المستخدم لصفحة تسجيل الدخول
      navigate("/login");
    } catch (error) {
      console.error("خطأ أثناء تسجيل الخروج:", error);
    }
  };

  return (
    <div className="user-dropdown">
      <div className="user-dropdown-toggle" onClick={() => setOpen(!open)}>
        {userName} ⮟
      </div>

      {open && (
        <ul className="user-dropdown-menu">
          <li>
            <FaUser /> <Link to="/Profile">الملف الشخصي</Link>
          </li>
          <li>
            <FaShoppingBag /> <Link to="/Orders">مشترياتي</Link>
          </li>
          <li onClick={handleLogout} style={{ cursor: "pointer", color: "red" }}>
            <FaSignOutAlt /> تسجيل الخروج
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserDropdown;
