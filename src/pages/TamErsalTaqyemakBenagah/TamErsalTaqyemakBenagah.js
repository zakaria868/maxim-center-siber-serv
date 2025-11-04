import React from "react";
import { useNavigate } from "react-router-dom";
import "./TamErsalTaqyemakBenagah.css";
import NavComponents from "../../components/NavComponents";
import FooterComponents from "../../components/FooterComponents";
import iconhome from '../../assets/images/iconhome.png';
function FeedbackSuccess() {
     const navigate = useNavigate();
  return (
    <>
      <NavComponents />
 <div className="breadcrumb-container">
  <div className="breadcrumb-text">
    <span className="home-icon">
      <img src={iconhome} alt="homeIcon" />
    </span>
    <span>الرئيسية &lt;  المنتجات</span>
  </div>
</div>
      <div className="container">
        {/* خطوات */}
       
        {/* رسالة النجاح */}
        <main className="success-box">
          <div className="icon">✔️</div>
          <h2>تم إرسال تقييمك بنجاح!</h2>
          <p>
تم تغيير كلمة المرور بنجاح. يمكنك الآن تسجيل الدخول باستخدام<br/> كلمة المرور الجديدة بكل أمان وسهولة.          </p>
                 <button 
  className="ETBNagah" 
  onClick={() => navigate("/product/:id")}
>تسوق الآن</button>
        </main>
      </div>

      <FooterComponents />
    </>
  );
}

export default FeedbackSuccess;
