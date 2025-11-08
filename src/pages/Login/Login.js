import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/images/OBJECTS.png";
import zarftasgeldokhol from '../../assets/images/zarftasgeldokhol.png';
import locktasgeldokhol from '../../assets/images/locktasgeldokhol.png';
import NavComponents from "../../components/NavComponents";
import FooterComponents from '../../components/FooterComponents';
import iconhome from '../../assets/images/iconhome.png';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("من فضلك أدخل البريد الإلكتروني وكلمة المرور");
      return;
    }

    try {
      const response = await fetch("https://maxim-test.courseszone-eg.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message || "بيانات الدخول غير صحيحة ❌");
        return;
      }

      // حفظ التوكن
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      setLoggedIn(true);
      navigate("/profile"); // ✅ بعد الدخول الناجح انتقل للملف الشخصي
    } catch (error) {
      setErrorMessage("حدث خطأ في الاتصال بالخادم ❌");
    }
  };

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
          <div className="text-center mb-4">
            <img src={logo} alt="Maxim Center" className="login-logo" />
          </div>

          {!loggedIn ? (
            <>
              <h2 className="login-title text-center mb-2">تسجيل دخول</h2>
              <p className="login-subtitle text-center mb-4">
                الرجاء إدخال بياناتك لتسجيل دخولك
              </p>

              {errorMessage && (
                <div className="alert alert-danger text-center">{errorMessage}</div>
              )}

              <form onSubmit={handleLogin}>
                <div className="mb-3 position-relative">
                  <label htmlFor="email" className="form-label">البريد الإلكتروني</label>
                  <input
                    type="email"
                    className="form-control input-with-icon"
                    id="email"
                    placeholder="الرجاء إدخال البريد الإلكتروني"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <img src={zarftasgeldokhol} className="input-icon" alt="email-icon" />
                </div>

                <div className="mb-3 position-relative">
                  <label htmlFor="password" className="form-label">كلمة المرور</label>
                  <input
                    type="password"
                    className="form-control input-with-icon"
                    id="password"
                    placeholder="الرجاء إدخال كلمة المرور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <img src={locktasgeldokhol} className="input-icon" alt="password-icon" />
                </div>

                <button type="submit" className="btn btn-login w-100 mb-3">
                  تسجيل الدخول
                </button>

                <div className="text-center">
                  <span>ليس لديك حساب؟ </span>
                  <a href="/register" className="create-account-link">
                    إنشاء حساب جديد
                  </a>
                </div>
              </form>
            </>
          ) : (
            <h3 className="text-center text-success mt-3">✅ تم تسجيل الدخول بنجاح!</h3>
          )}
        </div>
      </div>

      <FooterComponents />
    </>
  );
};

export default Login;
