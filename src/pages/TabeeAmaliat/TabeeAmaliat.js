import React, { useState } from 'react';
import logo from './logo.svg';


function InvoiceDetails() {
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(100);
  const productPrice = 2500;
  const shipping = 100;
  const vat = 100;

  const total = productPrice + shipping + vat - discount;

  const applyCoupon = () => {
    if (coupon === 'DISCOUNT100') {
      setDiscount(100);
    } else {
      setDiscount(0);
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>تفاصيل الفاتورة</h3>

      <div style={styles.couponSection}>
        <input
          type="text"
          placeholder="ادخل كوبون الخصم ..."
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          style={styles.input}
        />
        <button onClick={applyCoupon} style={styles.button}>تطبيق</button>
      </div>

      <div style={styles.line}><span>سعر المنتجات</span><span>{productPrice} ريال</span></div>
      <div style={styles.line}><span>خدمة الشحن</span><span>{shipping} ريال</span></div>
      <div style={styles.line}><span>ضريبة القيمة المضافة</span><span>{vat} ريال</span></div>
      <div style={styles.line}><span>الخصم</span><span>{discount} ريال</span></div>

      <hr />

      <div style={styles.total}><span>الإجمالي</span><span>{total} ريال</span></div>

      <button style={styles.checkoutBtn}>تابع عملية الشراء</button>
    </div>
  );
}

const styles = {
  container: {
    width: '300px',
    padding: '20px',
    border: '1px solid #eee',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    direction: 'rtl',
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: '15px',
    fontSize: '18px',
    textAlign: 'center',
  },
  couponSection: {
    display: 'flex',
    marginBottom: '15px',
  },
  input: {
    flex: 1,
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px 0 0 4px',
  },
  button: {
    padding: '8px 15px',
    backgroundColor: '#3CBC3C',
    color: 'white',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
  },
  line: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
    fontSize: '14px',
  },
  total: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    fontSize: '16px',
    margin: '10px 0',
  },
  checkoutBtn: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#d4f8d4',
    color: '#007500',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};

// هنا بنعرض InvoiceDetails جوة App
function App() {
  return <InvoiceDetails />;
}

export default TabeeAmaliat;
