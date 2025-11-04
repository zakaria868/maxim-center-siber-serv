import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Login.css";
import logo from "../../assets/images/OBJECTS.png";
import zarftasgeldokhol from '../../assets/images/zarftasgeldokhol.png';
import locktasgeldokhol from '../../assets/images/locktasgeldokhol.png';
import NavComponents from "../../components/NavComponents";
import FooterComponents from '../../components/FooterComponents';
import iconhome from '../../assets/images/iconhome.png';

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // دي مجرد محاكاة تسجيل دخول
  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      // هنا تقدر تربط API لو عندك
      setLoggedIn(true);
    } else {
      alert("من فضلك ادخل البريد الإلكتروني وكلمة المرور");
    }
  };
localStorage.setItem("user", JSON.stringify({ email }));

  return (
    <>
      <NavComponents loggedIn={loggedIn} userName={email} />


      <div className="breadcrumb-container">
        <div className="breadcrumb-text">
          <span className="home-icon">
            <img src={iconhome} alt="homeIcon" />
          </span>
          <span>الرئيسية &lt; تسجيل دخول</span>
        </div>
      </div>

      <div className="login-page">
        <div className="login-card">
          {/* Logo */}
          <div className="text-center mb-4">
            <img src={logo} alt="Maxim Center" className="login-logo" />
          </div>

          {/* Title */}
          {!loggedIn ? (
            <>
              <h2 className="login-title text-center mb-2">تسجيل دخول</h2>
              <p className="login-subtitle text-center mb-4">
                الرجاء إدخال بياناتك لتسجيل دخولك
              </p>

              {/* Form */}
              <form onSubmit={handleLogin}>
                {/* Email */}
                <div className="mb-3 position-relative">
                  <label htmlFor="email" className="form-label">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    className="form-control input-with-icon"
                    id="email"
                    placeholder="الرجاء إدخال البريد الإلكتروني"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <img src={zarftasgeldokhol} className="input-icon" />
                </div>

                {/* Password */}
                <div className="mb-3 position-relative">
                  <label htmlFor="password" className="form-label">
                    كلمة المرور
                  </label>
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
                </div>

                {/* Remember Me + Forgot Password */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check d-flex align-items-center gap-2">
                    <label className="form-check-label" htmlFor="remember">
                      تذكرني
                    </label>
                    <input type="checkbox" className="form-check-input" id="remember" />
                  </div>

                  <div id="passwordError" className="text-danger small">
                    نسيت كلمة المرور؟
                  </div>
                </div>

                {/* Submit */}
                <button type="submit" className="btn btn-login w-100 mb-3">
                  تسجيل الدخول
                </button>

                {/* Create Account */}
                <div className="text-center">
                  <span>ليس لديك حساب؟ </span>
                  <a href="#" className="create-account-link">
                    إنشاء حساب جديد
                  </a>
                </div>
              </form>
            </>
          ) : (
            <h3 className="text-center">مرحباً، {email}</h3>
          )}
        </div>
      </div>

      <FooterComponents />
    </>
  );
};

export default Login;
