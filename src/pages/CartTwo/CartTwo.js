import React from "react";
import './CartTwo.css';
import { FaShoppingCart, FaStar } from "react-icons/fa";

import dressred from "../../assets/images/pic-home/dressred.png";
import NavComponents from '../../components/NavComponents';
import FooterComponents from '../../components/FooterComponents';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
const ProductPage = () => {
  return (
    <>
      {/* النافبار */}
      <NavComponents />

 <div
      style={{
        display: "flex",
        justifyContent: "space-between",
         flexDirection: "row-reverse", // هنا العكس
        alignItems: "center",
        background: "#f9fff9",
        borderRadius: "12px",
        padding: "20px",
        gap: "20px",
      }}
    >
      {/* النصوص */}
      <div style={{ flex: 1 }}>
        <h2 style={{ marginBottom: "10px" }}>فستان بإطلالة حمراء</h2>
        <p style={{ color: "#555", fontSize: "14px", marginBottom: "15px" }}>
          فستان حريري بإطلالة حمراء أنيقة، تصميم عصري مميز لحفلات السهرات
          والمناسبات. مصنوع من خامات عالية الجودة لإطلالة ساحرة.
        </p>

        {/* اللون والمقاس */}
        <div style={{ display: "flex", gap: "40px", marginBottom: "15px" }}>
          <div>
            <span>اللون</span>
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "red",
                marginTop: "5px",
              }}
            ></div>
          </div>
          <div>
            <span>المقاس</span>
            <div
              style={{
                marginTop: "5px",
                fontWeight: "bold",
              }}
            >
              70
            </div>
          </div>
        </div>

        {/* التقييم */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} color="#FFD700" />
          ))}
          <FaStar color="#ddd" />
          <span style={{ marginRight: "8px", color: "#777" }}>(+2763 تقييم)</span>
        </div>

        {/* السعر وزر */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>750 ريال سعودي</span>
         <Button 
      as={Link} 
      to="/Cart" 
      className="login-btn px-4 py-2 buttonDokhool"
    >
      أضف للسلة
    </Button>
        </div>
      </div>

      {/* صورة المنتج */}
      <div style={{ flex: 1, textAlign: "center" }}>
        <img
          src={dressred}
          alt="فستان أحمر"
          style={{ width: "250px", borderRadius: "8px" }}
        />

        {/* الصور المصغرة */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
          <img src={dressred} alt="thumbnail" />
          <img src={dressred} alt="thumbnail" />
          <img src={dressred} alt="thumbnail" />
        </div>
      </div>
    </div>


    {/* التعليقات */}
<div className="product-reviews">
  <div className="Profs">
    <h3>التعليقات</h3>
    <h3>منتجات ذات صلة</h3>
  </div>

  {/* التعليق 1 */}
  <div className="review">
    <img src={dressred} alt="User" className="avatar" />
    <div>
      <div className="stars">
        <h4>أحمد عطية</h4>
        {[...Array(4)].map((_, i) => (
          <FaStar key={i} className="star filled" />
        ))}
        <FaStar className="star" />
        <span>4.5</span>
      </div>
      <p>
        الفستان رائع جدًا! اللون الأحمر ملفت والتصميم أنيق جدًا. القماش مريح
        للغاية ومناسب للسهرات. أنصح به بشدة!
      </p>
    </div>
  </div>

  {/* التعليق 2 */}
  <div className="review">
    <img src={dressred} alt="User" className="avatar" />
    <div>
      <div className="stars">
        <h4>منة محمد</h4>
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="star filled" />
        ))}
        <span>5.0</span>
      </div>
      <p>
        حلو جدًا، خامة ناعمة ومناسبة على المقاس بالضبط. التوصيل سريع والتغليف ممتاز.
      </p>
    </div>
  </div>

  {/* التعليق 3 */}
  <div className="review">
    <img src={dressred} alt="User" className="avatar" />
    <div>
      <div className="stars">
        <h4>كريم علي</h4>
        {[...Array(3)].map((_, i) => (
          <FaStar key={i} className="star filled" />
        ))}
        <FaStar className="star" />
        <FaStar className="star" />
        <span>3.0</span>
      </div>
      <p>
        شكله شيك بس المقاس كان أكبر شوية من المتوقع. محتاج أضبطه عند الترزي.
      </p>
    </div>
  </div>
</div>


      {/* الفوتر */}
      <FooterComponents />
    </>
  );
};

export default ProductPage;
