import React from 'react';
import './TamTaghierKalematElmrorBenagah.css'; // سنضيف CSS خارجي لتنسيق الصفحة
import NavComponents from '../../components/NavComponents';
import FooterComponents from '../../components/FooterComponents';
import iconhome from '../../assets/images/iconhome.png';
const PasswordChangeSuccess = () => {
  return (
<>
    <NavComponents></NavComponents>
<div className="breadcrumb-container">
  <div className="breadcrumb-text">
    <span className="home-icon">
      <img src={iconhome} alt="homeIcon" />
    </span>
    <span>الرئيسية &lt;  الملف الشخصى &lt;  تغيير كلمة المرور</span>
  </div>
</div>

    <div className="success-container">
  

      <main className="main-content">
        <div className="check-icon">✔️</div>
        <h2>تم تغيير كلمة المرور بنجاح!</h2>
        <p>
          تم تغيير كلمة المرور بنجاح. يمكنك الآن تسجيل الدخول باستخدام <br /> كلمة المرور الجديدة بكل أمان وسهولة.
        </p>
        <button className="buttonDokhool">تسوق الآن</button>
      </main>

     
    </div>
    <FooterComponents></FooterComponents>
    </>
  );
};

export default PasswordChangeSuccess;
