// Register.js
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Register.css";
import logo from "../../assets/images/OBJECTS.png";
import personregister from '../../assets/images/personregister.png';
import zarftasgeldokhol from '../../assets/images/zarftasgeldokhol.png';
import hatef from '../../assets/images/hatef.png';
import locktasgeldokhol from '../../assets/images/locktasgeldokhol.png';
import NavComponents from "../../components/NavComponents";
import FooterComponents from '../../components/FooterComponents';
import iconhome from '../../assets/images/iconhome.png';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Register = () => {
  const navigate = useNavigate();


  const [loggedIn, setLoggedIn] = useState(false);
const [username, setUsername] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState('');

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setServerMessage('');

    if (password !== confirmPassword) {
      setErrors({ password_confirmation: ["كلمتا المرور غير متطابقتين"] });
      return;
    }

    const formData = {
      name,
      email,
      phone: phoneNumber,
      password,
      password_confirmation: confirmPassword,
      terms: acceptTerms ? 1 : 0
    };

    try {
      const response = await fetch('https://maxim-test.courseszone-eg.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok || data.status === false) {
  setErrors(data.errors || {});
  setServerMessage(data.message || 'حدث خطأ أثناء التسجيل');
} else {
  setServerMessage('✅ تم التسجيل بنجاح!');

  localStorage.setItem('user', JSON.stringify(data.user || formData));

  // ✅ أضف هذه السطور:
  setLoggedIn(true);
  setUsername(data.user?.name || formData.name);

  // ✅ ثم انتقل للصفحة الرئيسية
  setTimeout(() => {
    navigate('/');
  }, 1500);
}

    } catch (error) {
      setServerMessage('❌ حدث خطأ في الاتصال بالخادم');
    }
  };

  return (
    <>
   <NavComponents loggedIn={loggedIn} userName={username} />


      <div className="breadcrumb-container">
        <div className="breadcrumb-text">
          <span className="home-icon">
            <img src={iconhome} alt="homeIcon" />
          </span>
          <span>الرئيسية &lt; إنشاء حساب</span>
        </div>
      </div>

      <div className="login-page">
        <div className="login-card">
          <div className="text-center mb-4">
            <img src={logo} alt="Maxim Center" className="login-logo" />
          </div>

          <h2 className="login-title text-center mb-2">إنشاء حساب جديد</h2>
          <p className="login-subtitle text-center mb-4">
            الرجاء إدخال بياناتك لإنشاء حساب جديد
          </p>

          {serverMessage && <div className="alert alert-info text-center">{serverMessage}</div>}

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-3 position-relative">
              <label htmlFor="name" className="form-label">الاسم</label>
              <input
                type="text"
                className="form-control input-with-icon"
                id="name"
                placeholder="الرجاء إدخال الاسم كامل"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <img src={personregister} className="input-icon" />
              {errors.name && <div className="text-danger">{errors.name[0]}</div>}
            </div>

            {/* Email */}
            <div className="mb-3 position-relative">
              <input
                type="text"
                className="form-control input-with-icon"
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <img src={zarftasgeldokhol} className="makan-zarftasgeldokhol" />
              {errors.email && <div className="text-danger">{errors.email[0]}</div>}
            </div>

            {/* Mobile */}
            <div className="phone-input-container mb-3">
              <label>الجوال</label>
              <div className="phone-input-wrapper">
                <img src={hatef} alt="phone-icon" className="hatef-icon left" />
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
              {errors.phone && <div className="text-danger">{errors.phone[0]}</div>}
            </div>

            {/* Password */}
            <div className="mb-3 position-relative">
              <label htmlFor="password" className="form-label">كلمة المرور</label>
              <input
                type="password"
                className="form-control input-with-icon"
                id="password"
                placeholder="الرجاء إدخال كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <img src={locktasgeldokhol} className="input-icon" />
              {errors.password && <div className="text-danger">{errors.password[0]}</div>}
            </div>

            {/* Confirm Password */}
            <div className="mb-3 position-relative">
              <label htmlFor="confirmPassword" className="form-label">تأكيد كلمة المرور</label>
              <input
                type="password"
                className="form-control input-with-icon"
                id="confirmPassword"
                placeholder="الرجاء تأكيد كلمة المرور"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <img src={locktasgeldokhol} className="input-icon" />
              {errors.password_confirmation && <div className="text-danger">{errors.password_confirmation[0]}</div>}
            </div>

            {/* Terms */}
            <div className="mb-3 form-check d-flex align-items-center gap-2 text-end">
              <label className="form-check-label" htmlFor="terms">
                أوافق على <a href="#">الشروط والأحكام</a>
              </label>
              <input
                type="checkbox"
                className="form-check-input"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
              />
              {errors.terms && <div className="text-danger">{errors.terms[0]}</div>}
            </div>

            <button type="submit" className="btn btn-login w-100 mb-3">
              تسجيل
            </button>

            <div className="text-center">
              <span>لدي حساب بالفعل؟ </span>
              <a href="#" className="create-account-link">تسجيل الدخول</a>
            </div>
          </form>
        </div>
      </div>

      <FooterComponents />
    </>
  );
};

export default Register;
