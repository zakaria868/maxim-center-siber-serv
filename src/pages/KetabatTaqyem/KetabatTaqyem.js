import React from 'react';
import { useNavigate } from 'react-router-dom';
import './KetabatTaqyem.css';
import iconhome from '../../assets/images/iconhome.png';
import dressred from '../../assets/images/pic-home/dressred.png';
import NavComponents from '../../components/NavComponents';
import FooterComponents from '../../components/FooterComponents';


const TaqyemProduct = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ backgroundColor: '#F5F5F5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NavComponents />

        {/* مسار الصفحة */}
        <div className="breadcrumb-container">
          <span className="breadcrumb-text">
            <span>الرئيسية &gt; سلة الشراء</span>
            <span className="home-icon">
              <img src={iconhome} alt="homeIcon" />
            </span>
          </span>
        </div>

        {/* خطوات الشراء */}
        <div className="checkout-steps">
          <div className="step active">
            <div className="circle">1</div>
            <div className="label">السلة</div>
          </div>
          <div className="step active">
            <div className="circle">2</div>
            <div className="label">معلومات الشحن</div>
          </div>
          <div className="step active">
            <div className="circle">3</div>
            <div className="label">الدفع</div>
          </div>
          <div className="step active">
            <div className="circle">4</div>
            <div className="label">تقييم المنتج</div>
          </div>
        </div>

        {/* محتوى التقييم */}
        <div className="product-container2">
          {/* صورة المنتج */}
          <div className="product-box">
            <img src={dressred} alt="product" className="product-image" />
          </div>

          {/* التفاصيل */}
          <div className="details-section">
            <h2 className="product-title">فستان بإطلالة حمراء</h2>

            {/* التقييم */}
            <div className="rating-stars">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star inactive">★</span>
            </div>

            {/* التعليق */}
            <textarea className="review-textarea" placeholder="اكتب تعليقاتك عن المنتج..."></textarea>

            {/* زر الإرسال */}
            <button className="send-button"  onClick={() => navigate('/FeedbackSuccess')}>إرسال</button>
          </div>
        </div>

        <FooterComponents />
      </div>
    </>
  );
};

export default TaqyemProduct;
