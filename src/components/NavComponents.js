import React from 'react';
import { Link } from 'react-router-dom';
import './Navcomponents.css';

// صور
import logomaxim from './../assets/images/pic-home/logomaxim.png';
import cart from './../assets/images/cart.png';
import persent from '../assets/images/pic-home/persent.png';
import shearsaodi from '../assets/images/shearsaodi.png';

// من react-bootstrap
import { Container, Row, Col } from 'react-bootstrap';

// أيقونات
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaYoutube, 
  FaUser, 
  FaUserPlus, 
  FaWhatsapp
} from 'react-icons/fa';

// كومبوننت
import CustomDropdown from './CustomDropdown/CustomDropdown';
import UserDropdown from './UserDropdown/UserDropdown';
import  { useEffect, useState } from "react";

const NavComponents = ({ loggedIn: initialLoggedIn, userName: initialUserName }) => {
  const [loggedIn, setLoggedIn] = useState(initialLoggedIn);
  const [userName, setUserName] = useState(initialUserName);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser?.name || savedUser?.email) {
      setLoggedIn(true);
      setUserName(savedUser.name || savedUser.email);
    }
  }, []);



  return (
    <>
      {/* Banner top */}
      <div style={{ backgroundColor: "#88ff88", padding: "5px 0", height: "40px" }}>
        <Container>
          <Row className="align-items-center">
            {/* النص يمين */}
            <Col className="d-flex align-items-center gap-2" style={{ paddingLeft: "100px" }}>
              <a href="#"><img src={persent} alt="خصم" /></a>
              <span style={{ color: "#2d2d2d", fontSize: "14px", whiteSpace: "nowrap" }}>
                خصومات تصل إلى %50 في عروض الخميس والجمعة.
              </span>
            </Col>

            <Col></Col>
            <Col></Col>

            {/* الايقونات شمال */}
            <Col xs="auto" className="d-flex gap-2 justify-content-end">
              <a href="#" className="icon-circle"><FaWhatsapp size={24} /></a>
              <a href="#" className="icon-circle"><FaYoutube size={24} /></a>
              <a href="#" className="icon-circle"><FaLinkedinIn size={24} /></a>
              <a href="#" className="icon-circle"><FaFacebookF size={24} /></a>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Navbar */}
      <div className="custom-navbar">
        <div className="navbar-content">
          
          {/* اللوجو */}
          <div className="navbar-logo">
            <img src={logomaxim} alt="Maxim Center Logo" />
          </div>

          {/* روابط التنقل */}
          <nav className="navbar">
            <ul className="nav-links">
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/About">من نحن</Link></li>
              <li><Link to="/products">المنتجات</Link></li>
              <li><Link to="/blogs">المدونة</Link></li>
              <li><Link to="/Contactus">تواصل معنا</Link></li>
              <li><Link to="/Cart">سلة التسوق</Link></li>
              <li>
                <Link to="/cart" className="cart-button">
                  <img src={cart} alt="Cart" className="cart-icon" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Dropdown + صورة */}
          <div className="d-flex align-items-center gap-2">
            <img src={shearsaodi} alt="شعار" style={{ height: "40px" }} />
            <CustomDropdown />
          </div>

          {/* الأزرار / القائمة حسب تسجيل الدخول */}
          <div className="nav-buttons">
            {!loggedIn ? (
              <>
                <Link to="/login" className="buttonDokhool">
                  <FaUser style={{ marginLeft: "8px" }} /> دخول
                </Link>

                <Link to="/register" className="buttonAccount">
                  <FaUserPlus style={{ marginLeft: "8px" }} /> إنشاء حساب
                </Link>
              </>
            ) : (
              <UserDropdown userName={userName || ""} />
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default NavComponents;
