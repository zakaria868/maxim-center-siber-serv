import React from "react";
import { useNavigate } from 'react-router-dom';
import "./AmaliatAldafaaTamatBenagah.css";
import NavComponents from "../../components/NavComponents";
import FooterComponents from "../../components/FooterComponents";

function PaymentSuccess() {
  const navigate = useNavigate();
  return (
    <>
    <NavComponents></NavComponents>
   
    <div className="container">
      {/* الهيدر */}
      

      {/* خطوات الدفع */}
      <div className="steps">
        <span>١ السلة</span>
        <span>٢ معلومات الشحن</span>
        <span>٣ الدفع</span>
        <span className="active">٤ تقييم المنتج</span>
      </div>

      {/* رسالة النجاح */}
      <main className="success-box">
        <div className="icon">
          ✓
        </div>
        <h2>عملية الدفع تمت بنجاح!</h2>
        <p>
          تمت عملية الدفع بنجاح. شكرًا لك على استخدام خدماتنا. سيتم تأكيد الطلب قريبًا.
        </p>
                     <button 
  className="PaymentSuccess" 
  onClick={() => navigate('/')}
>تقييم المنتج</button>
      </main>

      {/* الفوتر */}
    
    </div>
     <FooterComponents></FooterComponents>
    </>
  );
}

export default PaymentSuccess;
