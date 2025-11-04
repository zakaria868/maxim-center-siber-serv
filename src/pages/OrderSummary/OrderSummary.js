import React from 'react';
import NavComponents from '../../components/NavComponents';
import FooterComponents from '../../components/FooterComponents';
import iconhome from '../../assets/images/iconhome.png';

const orders = [
  {
    id: 1,
    cardInfo: '2354 **** **** ****',
    address: 'شارع محمد حسن شامي - أبو شاهين - المحلة الكبرى',
    phone: '+20 121 281 8105',
    product: {
      name: 'فستان بإطلالة حمراء 2025',
      price: 750,
      size: 70,
      color: 'أحمر',
      quantity: 2,
      image: 'https://i.imgur.com/bV5jKqB.png', // صورة الفستان
    },
  },
  // كرر الطلبات حسب الحاجة
];

function OrderSummary() {
  const handleReorder = () => {
    alert('تمت إعادة الشراء');
    // هنا يمكن ربط العملية مع API أو redirect
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

   
  
    <div style={styles.container}>
      {orders.map((order, index) => (
        <div key={index} style={styles.orderBox}>
          {/* الجزء الأيسر */}
          <div style={styles.left}>
            <div style={styles.cardInfo}>
              <span>{order.cardInfo}</span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                alt="visa"
                style={styles.visaIcon}
              />
            </div>
            <p style={styles.address}>📍 {order.address}</p>
            <p style={styles.phone}>📞 {order.phone}</p>
          </div>

          {/* الجزء الأيمن */}
          <div style={styles.right}>
            <img
              src={order.product.image}
              alt="product"
              style={styles.productImage}
            />
            <div style={styles.productInfo}>
              <h4 style={styles.productName}>{order.product.name}</h4>
              <p>{order.product.price} ريال سعودي</p>
              <p>اللون: <span style={styles.colorDot}></span></p>
              <p>المقاس: {order.product.size}</p>
              <p>عدد القطع: {order.product.quantity}</p>
            </div>
          </div>
        </div>
      ))}

      {/* زر إعادة الشراء */}
      <button onClick={handleReorder} style={styles.reorderButton}>
        إعادة الشراء
      </button>
    </div>
     <FooterComponents></FooterComponents>
      </>
  );
}

const styles = {
  container: {
    padding: '20px',
    direction: 'rtl',
    fontFamily: 'Arial',
    backgroundColor: '#f4f4f4',
  },
  orderBox: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '15px',
    marginBottom: '20px',
    boxShadow: '0 0 8px rgba(0,0,0,0.05)',
  },
  left: {
    flex: 1,
    padding: '10px',
  },
  cardInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px',
  },
  visaIcon: {
    width: '35px',
  },
  address: {
    fontSize: '14px',
    marginBottom: '5px',
  },
  phone: {
    fontSize: '14px',
  },
  right: {
    flex: 1,
    display: 'flex',
    gap: '15px',
    backgroundColor: '#e9fced',
    borderRadius: '10px',
    padding: '10px',
  },
  productImage: {
    width: '100px',
    height: 'auto',
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: '14px',
  },
  productName: {
    margin: '0 0 5px 0',
  },
  colorDot: {
    display: 'inline-block',
    width: '12px',
    height: '12px',
    backgroundColor: 'red',
    borderRadius: '50%',
    marginLeft: '6px',
  },
  reorderButton: {
    backgroundColor: '#d4f8d4',
    color: '#2e7d32',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'block',
    margin: 'auto',
  },
};

export default OrderSummary;
