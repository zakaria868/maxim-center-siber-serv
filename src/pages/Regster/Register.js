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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState('');

  const handlePhoneChange = (value) => setPhoneNumber(value);

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok || data.status === false) {
        setErrors(data.errors || {});
        setServerMessage(data.message || 'حدث خطأ أثناء التسجيل');
      } else {
        setServerMessage('✅ تم التسجيل بنجاح!');
        // حفظ التوكن والمستخدم
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        // الانتقال
        setTimeout(() => navigate("/profile"), 1500);
      }
    } catch {
      setServerMessage('❌ خطأ في الاتصال بالخادم');
    }
  };

  return (
    <>
      <NavComponents />
      <div className="breadcrumb-container">
        <div className="breadcrumb-text">
          <span className="home-icon"><img src={iconhome} alt="homeIcon" /></span>
          <span>الرئيسية &lt; إنشاء حساب</span>
        </div>
      </div>

      <div className="login-page">
        <div className="login-card">
          <div className="text-center mb-4">
            <img src={logo} alt="Maxim Center" className="login-logo" />
          </div>
          <h2 className="login-title text-center mb-2">إنشاء حساب جديد</h2>
          {serverMessage && <div className="alert alert-info text-center">{serverMessage}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3 position-relative">
              <label>الاسم</label>
              <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
              <img src={personregister} className="input-icon" />
            </div>

            <div className="mb-3 position-relative">
              <label>البريد الإلكتروني</label>
              <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <img src={zarftasgeldokhol} className="input-icon" />
            </div>

            <div className="phone-input-container mb-3">
              <label>الجوال</label>
              <PhoneInput country={'sa'} value={phoneNumber} onChange={handlePhoneChange} />
              <img src={hatef} alt="phone-icon" className="hatef-icon left" />
            </div>

            <div className="mb-3 position-relative">
              <label>كلمة المرور</label>
              <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <img src={locktasgeldokhol} className="input-icon" />
            </div>

            <div className="mb-3 position-relative">
              <label>تأكيد كلمة المرور</label>
              <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              <img src={locktasgeldokhol} className="input-icon" />
            </div>

            <div className="mb-3 form-check d-flex align-items-center gap-2">
              <label htmlFor="terms">أوافق على <a href="#">الشروط والأحكام</a></label>
              <input type="checkbox" id="terms" checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} />
            </div>

            <button type="submit" className="btn btn-login w-100 mb-3">تسجيل</button>
          </form>
        </div>
      </div>
      <FooterComponents />
    </>
  );
};

export default Register;
