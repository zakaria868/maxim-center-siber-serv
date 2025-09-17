import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaMobileAlt } from "react-icons/fa";
import "./Register.css";
import logo from "../../assets/images/OBJECTS.png"; // غيّر المسار حسب مشروعك
import personregister from '../../assets/images/personregister.png';
import zarftasgeldokhol from '../../assets/images/zarftasgeldokhol.png';
import hatef from '../../assets/images/hatef.png';
import locktasgeldokhol from '../../assets/images/locktasgeldokhol.png';
import NavComponents from "../../components/NavComponents";
import FooterComponents from '../../components/FooterComponents';
import iconhome from '../../assets/images/iconhome.png';
import PhoneInput from 'react-phone-input-2';  // استيراد مكون PhoneInput
import 'react-phone-input-2/lib/style.css';

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState('');  // تعريف الهاتف باستخدام useState

  const handlePhoneChange = (value) => {  // تعريف الدالة لتحديث الرقم
    setPhoneNumber(value);
  };

  return (
    <>
      <NavComponents />
      <div className="breadcrumb-container">
        <div className="breadcrumb-text">
          <span className="home-icon">
            <img src={iconhome} alt="homeIcon" />
          </span>
          <span>الرئيسية &lt;    إنشاء حساب</span>
        </div>
      </div>

      <div className="login-page">
        <div className="login-card">
          {/* Logo */}
          <div className="text-center mb-4">
            <img src={logo} alt="Maxim Center" className="login-logo" />
          </div>

          {/* Title */}
          <h2 className="login-title text-center mb-2">إنشاء حساب جديد</h2>
          <p className="login-subtitle text-center mb-4">
            الرجاء إدخال بياناتك لإنشاء حساب جديد
          </p>

          {/* Form */}
          <form>
            {/* Name */}
            <div className="mb-3 position-relative">
              <label htmlFor="name" className="form-label">الاسم</label>
              <input
                type="text"
                className="form-control input-with-icon"
                id="name"
                placeholder="الرجاء إدخال الاسم كامل"
                required
              />
              <img src={personregister} className="input-icon" />
            </div>

            {/* Email */}
            <div className="position-relative">
              <input
                type="text"
                className="form-control input-with-icon"
                placeholder="أدخل بريدك الإلكتروني"
              />
              <img src={zarftasgeldokhol} className="makan-zarftasgeldokhol" />
            </div>

            {/* Mobile */}
          <div className="phone-input-container">
  <label>الجوال</label>
  <div className="phone-input-wrapper">
    <img src={hatef} alt="phone-icon" className="hatef-icon left" /> 
    {/* غيّر "left" لـ "right" عشان تتحرك الناحية التانية */}
    <PhoneInput
      country={'sa'}
      value={phoneNumber}
      onChange={handlePhoneChange}
      inputProps={{
        placeholder: 'الرجاء إدخال رقم الجوال',
        className: 'form-control'
      }}
      dropdownClass="custom-dropdown"
    />
  </div>
</div>



            {/* Password */}
            <div className="mb-3 position-relative">
              <label htmlFor="password" className="form-label">كلمة المرور</label>
              <input
                type="password"
                className="form-control input-with-icon"
                id="password"
                placeholder="الرجاء إدخال كلمة المرور"
                required
              />
              <img src={locktasgeldokhol} className="input-icon" />
            </div>




             {/* Password */}
            <div className="mb-3 position-relative">
              <label htmlFor="password" className="form-label"> تأكيد كلمة المرور</label>
              <input
                type="password"
                className="form-control input-with-icon"
                id="password"
                placeholder="الرجاء إدخال كلمة المرور"
                required
              />
              <img src={locktasgeldokhol} className="input-icon" />
            </div>

            {/* Terms */}
            <div className="mb-3 form-check d-flex align-items-center gap-2 text-end">
              <label className="form-check-label" htmlFor="terms">
                أوافق على <a href="#">الشروط والأحكام</a>
              </label>
              <input type="checkbox" className="form-check-input" id="terms" required />
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-login w-100 mb-3">
              تسجيل
            </button>

            {/* Login Link */}
            <div className="text-center">
              <span>لدي حساب بالفعل؟ </span>
              <a href="#" className="create-account-link">
                تسجيل الدخول
              </a>
            </div>
          </form>
        </div>
      </div>
      <FooterComponents />
    </>
  );
};

export default Register;
