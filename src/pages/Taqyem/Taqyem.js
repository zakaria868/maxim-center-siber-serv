import React from "react";



import NavComponents from '../../components/NavComponents';
import FooterComponents from '../../components/FooterComponents';
import iconhome from '../../assets/images/iconhome.png';
import dressred from '../../assets/images/pic-home/dressred.png';
import { FaStar } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Taqyem.css';
const Taqyem = () => {
  return (
<>
    <NavComponents></NavComponents>

    <div className="breadcrumb-container">
  <div className="breadcrumb-text">
    <span className="home-icon">
      <img src={iconhome} alt="homeIcon" />
    </span>
    <span>الرئيسية &lt;   سلة الشراء </span>
  </div>
</div>



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


           <Button 
      as={Link} 
      to="/Cart" 
      className="login-btn px-4 py-2 buttonDokhool"
    >
      أضف للسلة
    </Button>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>750 ريال سعودي</span>
        
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
          {/* <img src={dressred} alt="thumbnail" />
          <img src={dressred} alt="thumbnail" />
          <img src={dressred} alt="thumbnail" /> */}
        </div>
      </div>
    </div>


    
  

     

     
    
    <FooterComponents></FooterComponents>
    </>
  );
};

export default Taqyem;
