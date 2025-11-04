import React from "react";
import "./FashalDafaa.css";
import NavComponents from "../../components/NavComponents";
import FooterComponents from "../../components/FooterComponents";
import { useNavigate } from "react-router-dom";

function PaymentFaild() {
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
        <h2>   فشل عملية الدفع</h2>
        <p>
        لم تتم عملية الدفع بنجاح، يرجى التحقق من بياناتك أو استخدام وسيلة دفع أخرى.
        </p>
        <button 
        className="FashalDafaa" 
        onClick={() => navigate('/PaymentSuccess')}
      >
         dh حاول الدفع مرة اخرى
      </button>
      </main>

      {/* الفوتر */}
    
    </div>
     <FooterComponents></FooterComponents>
    </>
  );
}

export default PaymentFaild;
