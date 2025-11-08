import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavComponents from "../../components/NavComponents";
import FooterComponents from "../../components/FooterComponents";
import {  } from "react-bootstrap";
import iconhome from "../../assets/images/iconhome.png";
import soraonesaletshera from "../../assets/images/soraonesaletshera.png";
import dressblack from "../../assets/images/pic-home/dressblack.png";
import dressgreen from "../../assets/images/pic-home/dressgreen.png";
import dressmove from "../../assets/images/pic-home/dressmove.png";
import dressred from "../../assets/images/pic-home/dressred.png";
import "./Cart.css";
import { Container, Row, Col } from "react-bootstrap";


const Cart = () => {
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

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(100);

  const productPrice = products.reduce((acc, p) => acc + p.price * p.qty, 0);
  const shipping = 100;
  const vat = 100;
  const total = productPrice + shipping + vat - discount;

  const applyCoupon = () => {
    if (coupon === "DISCOUNT100") {
      setDiscount(100);
    } else {
      setDiscount(0);
    }
  };

  return (
    <>
      <NavComponents />

      {/* breadcrumb */}
      <div className="breadcrumb-container">
        <div className="breadcrumb-text">
          <span className="home-icon">
            <img src={iconhome} alt="homeIcon" />
          </span>
          <span>الرئيسية &lt; سلة الشراء</span>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="progress-steps">
        <div className="container tadel">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="steps-container">
                <div className="step active"><div className="step-number">1</div><div className="step-label">السلة</div></div>
                <div className="step-line"></div>
                <div className="step"><div className="step-number">2</div><div className="step-label">معلومات الشحن</div></div>
                <div className="step-line"></div>
                <div className="step"><div className="step-number">3</div><div className="step-label">الدفع</div></div>
                <div className="step-line"></div>
                <div className="step"><div className="step-number">4</div><div className="step-label">تتميم الطلب</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Container >
        <Row className="g-0">

          
       
          {/* Products */}
         <Col md={7} className="margin-right"> 

          <div className="card-size" >
            {products.map(product => (
             <div key={product.id} className="card mb-3  product-card">



                <div className="row g-0" dir="rtl">
                  {/* الصورة يمين */}
                  <div className="col-md-4" style={{ backgroundColor: "#ccffcc" }}>
                    <img src={product.img} className="img-fluid rounded-start" alt={product.name} />
                  </div>

                  {/* النص شمال */}
                  <div className="col-md-8">
                    
                    <div className="product-info">
                      <div className="product-title">{product.name}</div>
                      <div className="product-price">{product.price} ريال سعودي</div>
                       <div className="delete-btn" onClick={() => deleteProduct(product.id)}>🗑️</div>
                      <div className="options">
                        <div className="option">
                          اللون
                          <div className="color-circle" style={{ backgroundColor: product.color }}></div>
                        </div>
                        <div className="option">
                          المقاس
                          <div className="size-circle">{product.size}</div>
                        </div>
                        <div className="option ">
                          عدد القطع
                          <div className="quantity-control">
                            <button className="quantity-btn" onClick={() => decreaseQuantity(product.id)}>-</button>
                            <span className="quantity">{product.qty}</span>
                            <button className="quantity-btn" onClick={() => increaseQuantity(product.id)}>+</button>
                          </div>
                            
                        </div>
                        <div className="option">
                          
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </Col>

          {/* Sidebar */}
           <Col md={5}>
          <div >
            <div className="invoice-card">
              <h3 className="invoice-title">تفاصيل الفاتورة</h3>

              <div className="coupon-section">
                <input
                  type="text"
                  placeholder="ادخل كوبون الخصم ..."
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button className="apply-btn" onClick={applyCoupon}>تطبيق</button>
              </div>

              <div className="invoice-row">
                <span>سعر المنتجات</span>
                <span><span className="price-number">{productPrice}</span> <span className="price-currency">ريال</span></span>
              </div>

              <div className="invoice-row">
                <span>خدمة الشحن</span>
                <span><span className="price-number">{shipping}</span> <span className="price-currency">ريال</span></span>
              </div>

              <div className="invoice-row">
                <span>ضريبة القيمة المضافة</span>
                <span><span className="price-number">{vat}</span> <span className="price-currency">ريال</span></span>
              </div>

              <div className="invoice-row">
                <span>الخصم</span>
                <span><span className="price-number">{discount}</span> <span className="price-currency">ريال</span></span>
              </div>

              <div className="invoice-total">
                <span>الإجمالي</span>
                <span><span className="price-number total">{total}</span> <span className="price-currency">ريال</span></span>
              </div>

             <button 
  className="checkout-btn" 
  onClick={() => navigate('/CartTwo')}
>
  تابع عملية الشراء
</button>

            </div>
          </div>
          </Col>
        

        </Row>
      </Container>

      <FooterComponents />
    </>
  );
};

export default Cart;
