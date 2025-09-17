import React, { useState } from 'react';
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
  FaGlobe, 
  FaYoutube, 
  FaUser, 
  FaUserPlus, 
  FaAngleDown, 
  FaWhatsapp,
  FaShoppingBag, 
  FaSignOutAlt 
} from 'react-icons/fa';

// كومبوننت
import CustomDropdown from './CustomDropdown/CustomDropdown';

const NavComponents = ({ loggedIn, username }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    // هنا ممكن تستدعي فنكشن من parent تمسح البيانات
    window.location.href = "/"; // مثلًا يرجع المستخدم للصفحة الرئيسية بعد تسجيل الخروج
  };

  return (
    <>
      {/* Banner top */}
     {/* Banner top */}
<div style={{ backgroundColor: "#88ff88", padding: "5px 0" }}>
  <Container>
    <Row className="align-items-center ">
      {/* النص يمين */}
      
     <Col className="d-flex align-items-center gap-2" style={{ paddingLeft: "100px" }}>
      <a href="#"><img src={persent} alt="خصم" /></a>
      <span style={{ 
  color: "#2d2d2d", 
  fontSize: "14px", 
  whiteSpace: "nowrap" 
}}>
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
              <li><Link to="/Tagreba">صفحة للتجربة</Link></li>
              <li><Link to="/blogs">المدونة</Link></li>
              <li><Link to="/Contactus">تواصل معنا</Link></li>
              <li><Link to="/CartTwo">سلة التسوق</Link></li>
              <li><Link to="/OrderSummary"> اوردر سامارى</Link></li>
              <li><Link to="/ChangePassword">  تغيير الباسوورد</Link></li>
              <li><Link to="/BlogDetails">   تفاصيل المدونة</Link></li>
              <li><Link to="/PaymentMethod">    دالة الدفع</Link></li>
              <li><Link to="/InvoiceDetails">    تابع عمليات</Link></li>
              <li><Link to="/UserProfile">    يوزر بروفايل </Link></li>
              <li><Link to="/ShippingForm">    شيبنج فورم  </Link></li>
              <li><Link to="/TermsAndConditions">     الشروط والاحكام  </Link></li>
              <li><Link to="/UpdateSuccess">      تحديث بنجاح  </Link></li>
              <li>
                <Link to="/cart" className="cart-button">
                  <img src={cart} alt="Cart" className="cart-icon" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Dropdown + صورة */}
          <div>
            <img src={shearsaodi} alt="شعار" />
            <CustomDropdown />
          </div>

          {/* الأزرار / اسم المستخدم */}
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
              <div className="user-dropdown">
                <div 
                  className="user-info" 
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <span>{username}</span>
                  <FaAngleDown />
                </div>

                {showDropdown && (
                  <div className="dropdown-menu">
                    <Link to="/profile" className="dropdown-item">
                      <FaUser /> الملف الشخصي
                    </Link>
                    <Link to="/orders" className="dropdown-item">
                      <FaShoppingBag /> مشترياتي
                    </Link>
                    <button onClick={handleLogout} className="dropdown-item logout">
                      <FaSignOutAlt /> تسجيل الخروج
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default NavComponents;
