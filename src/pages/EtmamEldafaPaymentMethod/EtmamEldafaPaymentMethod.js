import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import NavComponents from '../../components/NavComponents';
import FooterComponents from '../../components/FooterComponents';
import iconhome from "../../assets/images/iconhome.png";
import './EEPM.css';
import { Container, Row, Col } from 'react-bootstrap';
import soraonesaletshera from "../../assets/images/soraonesaletshera.png";
import dressblack from "../../assets/images/pic-home/dressblack.png";
import dressgreen from "../../assets/images/pic-home/dressgreen.png";
import dressmove from "../../assets/images/pic-home/dressmove.png";
import dressred from "../../assets/images/pic-home/dressred.png";
function PaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState('visa');
const navigate = useNavigate();

  const handleSelect = (method) => {
    setSelectedMethod(method);
  };

  /*cards*/
  
  const [products, setProducts] = useState([
    { id: 1, name: "فستان بأطلالة حمراء 2025", price: 750, qty: 2, color: "red", size: 70, img: soraonesaletshera },
    { id: 2, name: "فستان مناسبة زفاف", price: 750, qty: 3, color: "black", size: 60, img: dressblack },
    { id: 3, name: "فستان مناسبة", price: 750, qty: 2, color: "purple", size: 80, img: dressmove },
    { id: 4, name: "فستان بسمرة 2025", price: 750, qty: 1, color: "green", size: 75, img: dressgreen },
    { id: 5, name: "فستان أحمر كلاسيك", price: 750, qty: 1, color: "red", size: 70, img: dressred },
  ]);

  const increaseQuantity = (id) => {
    setProducts(products.map(p => p.id === id ? { ...p, qty: p.qty + 1 } : p));
  };

  const decreaseQuantity = (id) => {
    setProducts(products.map(p => p.id === id && p.qty > 1 ? { ...p, qty: p.qty - 1 } : p));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

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
  <Container>
<Row>
  <Col md={6}>
   <div >
            {products.map(product => (
             <div key={product.id} className="card mb-3 w-75">

                <div className="row g-0" dir="rtl">
                  {/* الصورة يمين */}
                  <div className="col-md-4" style={{ backgroundColor: "#ccffcc" }}>
                    <img src={product.img} className="img-fluid rounded-start" alt={product.name} />
                  </div>

                  {/* النص شمال */}
                  <div className="col-md-8">
                    <div className="delete-btn" onClick={() => deleteProduct(product.id)}>🗑️</div>
                    <div className="product-info">
                      <div className="product-title">{product.name}</div>
                      <div className="product-price">{product.price} ريال سعودي</div>

                      <div className="options">
                        <div className="option">
                          اللون
                          <div className="color-circle" style={{ backgroundColor: product.color }}></div>
                        </div>
                        <div className="option">
                          المقاس
                          <div className="size-circle">{product.size}</div>
                        </div>
                        <div className="option">
                          عدد القطع
                          <div className="quantity-control">
                            <button className="quantity-btn" onClick={() => decreaseQuantity(product.id)}>-</button>
                            <span className="quantity">{product.qty}</span>
                            <button className="quantity-btn" onClick={() => increaseQuantity(product.id)}>+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
  </Col>
  <Col md={6}>
  
   <div className="payment-container">
      <h3 className="payment-title">طريقة الدفع أو السداد</h3>

      {/* خيار الدفع بالفيزا */}
      <div
        className={`payment-option ${selectedMethod === 'visa' ? 'selected' : ''}`}
        onClick={() => handleSelect('visa')}
      >
        <div className="radio-circle">
          {selectedMethod === 'visa' && <div className="radio-dot" />}
        </div>
        <span className="option-text">الدفع باستخدام الفيزا</span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
          alt="visa"
          className="icon"
        />
      </div>

      {/* خيار الدفع عند الاستلام */}
      <div
        className={`payment-option ${selectedMethod === 'cash' ? 'selected' : ''}`}
        onClick={() => handleSelect('cash')}
      >
        <div className="radio-circle">
          {selectedMethod === 'cash' && <div className="radio-dot" />}
        </div>
        <span className="option-text">الدفع عند الاستلام</span>
        <img
          src="https://img.icons8.com/emoji/48/parcel-emoji.png"
          alt="cash"
          className="icon"
        />
      </div>

      {/* زر الدفع */}
      <button 
        className="EDPaymentMethod" 
        onClick={() => navigate('/PaymentSuccess')}
      >
         dh إتمام الدفع
      </button>

      {/* زر العودة */}
      <button className="back-button">
        العودة إلى عربة التسوق
      </button>
    </div></Col>
</Row>
</Container>
   




    
    <FooterComponents></FooterComponents>

         <div className="breadcrumb-container">
  <div className="breadcrumb-text">
    <span className="home-icon">
      <img src={iconhome} alt="homeIcon" />
    </span>
    <span>الرئيسية &lt;   سلة الشراء </span>
  </div>
</div>

{/*cards */}




  </>

  );
}


  
export default PaymentMethod;
