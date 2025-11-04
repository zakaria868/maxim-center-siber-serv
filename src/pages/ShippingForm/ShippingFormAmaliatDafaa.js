import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import iconhome from '../../assets/images/iconhome.png';
import NavComponents from '../../components/NavComponents';
import FooterComponents from '../../components/FooterComponents';
import { Container, Row, Col } from 'react-bootstrap';
import './SFAD.css';
import soraonesaletshera from '../../assets/images/soraonesaletshera.png';
import dressblack from '../../assets/images/pic-home/dressblack.png';
import dressmove from '../../assets/images/pic-home/dressmove.png';
import dressgreen from '../../assets/images/pic-home/dressgreen.png';
import dressred from '../../assets/images/pic-home/dressred.png';



function ShippingForm() {
    const navigate = useNavigate();

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

  
  

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    homeNumber: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("بيانات الشحن:", formData);
    alert("تم حفظ بيانات الشحن ✅");
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
        <div className="step-progress">
      <div className="step active">1<br />السلة</div>
      <div className="line" />
      <div className="step">2<br />معلومات الشحن</div>
      <div className="line" />
      <div className="step">3<br />الدفع</div>
      <div className="line" />
      <div className="step">4<br />تتـمـيم الطلب</div>
    </div>
      </Row>
      <Row>
        
         {/* Products */}
         <Col md={7} className="margin-right"> // ← padding

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

      

        
        
        
        
        <Col>
           <div className="shipping-form-container">
      <h3 className="form-title">تفاصيل الشحن</h3>

      <form className="shipping-form">
        <input type="text" placeholder="الرجاء إدخال الاسم كامل" className="form-input" />
        
        <div className="form-input phone-input">
          <span className="country-code">+966</span>
          <input type="tel" placeholder="الرجاء إدخال رقم الجوال" />
        </div>

        <div className="form-row">
          <input type="text" placeholder="الرجاء إدخال المدينة" className="form-input" />
          <input type="text" placeholder="الرجاء إدخال رقم المنزل" className="form-input" />
        </div>

        <input type="text" placeholder="الرجاء إدخال عنوانك بالتفصيل" className="form-input" />

        <button type="submit" className="submit-button"onClick={() => navigate('/PaymentMethod')}>تابع عملية الدفع</button>
        <button type="button" className="back-button">العودة إلى عربة التسوق</button>
      </form>
    </div>

        </Col>
      </Row>
        
        
        
    </Container>
   
    
    
    
    
   
     <FooterComponents></FooterComponents>
     </>
  );
}



export default ShippingForm;
