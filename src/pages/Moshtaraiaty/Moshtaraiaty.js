import React from 'react';
import OrderItem from './OrderItem';
import './Moshtaraiaty.css';
import NavComponents from '../../components/NavComponents';
import FooterComponents from '../../components/FooterComponents';
import iconhome from '../../assets/images/iconhome.png';

const Moshtaraiaty = () => {
  // بيانات افتراضية
  const orders = [
    {
      id: 1,
      title: 'فستان بإطلالة حمراء 2025',
      price: 750,
      currency: 'ريال سعودي',
      quantity: 2,
      size: 70,
      color: 'red',
      image: '/images/dress.png', // ضع الصورة في مجلد public/images
    },
    {
      id: 2,
      title: 'فستان بإطلالة حمراء 2025',
      price: 750,
      currency: 'ريال سعودي',
      quantity: 2,
      size: 70,
      color: 'red',
      image: '/images/dress.png',
    },
    {
      id: 3,
      title: 'فستان بإطلالة حمراء 2025',
      price: 750,
      currency: 'ريال سعودي',
      quantity: 2,
      size: 70,
      color: 'red',
      image: '/images/dress.png',
    },
  ];

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

    <div className="my-orders-container">
      <h2>مشترياتي</h2>
      <div className="orders-wrapper">
       
        <div className="orders-list">
          {orders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </div>

         <div className="payment-details">
          {orders.map((order) => (
            <div key={order.id} className="card">
              <p>💳 2354 **** **** ****</p>
              <p>📍 شارع محمد حسن خليل - أبو شقيل - المحلة الكبرى</p>
              <p>📞 +20 122 818105</p>
            </div>
          ))}
        </div>
      </div>
      <button className="buy-again-btn">إعادة الشراء</button>
    </div>
        <FooterComponents></FooterComponents>
    </>
  );
};

export default Moshtaraiaty;
