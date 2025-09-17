import React, { useState } from 'react';
import NavComponents from '../../components/NavComponents';

function PaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState('visa');

  const handleSelect = (method) => {
    setSelectedMethod(method);
  };

  return (
    <>
    <NavComponents></NavComponents>
  
    <div style={styles.container}>
      <h3 style={styles.title}>طريقة الدفع أو السداد</h3>

      {/* خيار الدفع بالفيزا */}
      <div
        style={{
          ...styles.option,
          borderColor: selectedMethod === 'visa' ? '#3cbc3c' : '#ddd',
        }}
        onClick={() => handleSelect('visa')}
      >
        <div style={styles.radioCircle}>
          {selectedMethod === 'visa' && <div style={styles.radioDot} />}
        </div>
        <span style={styles.optionText}>الدفع باستخدام الفيزا</span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
          alt="visa"
          style={styles.icon}
        />
      </div>

      {/* خيار الدفع عند الاستلام */}
      <div
        style={{
          ...styles.option,
          borderColor: selectedMethod === 'cash' ? '#3cbc3c' : '#ddd',
        }}
        onClick={() => handleSelect('cash')}
      >
        <div style={styles.radioCircle}>
          {selectedMethod === 'cash' && <div style={styles.radioDot} />}
        </div>
        <span style={styles.optionText}>الدفع عند الاستلام</span>
        <img
          src="https://img.icons8.com/emoji/48/parcel-emoji.png"
          alt="cash"
          style={styles.icon}
        />
      </div>

      {/* زر الدفع */}
      <button style={styles.payButton}>إتمام الدفع</button>

      {/* زر العودة */}
      <button style={styles.backButton}>العودة إلى عربة التسوق</button>
    </div>
  </>

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
  option: {
    display: 'flex',
    alignItems: 'center',
    border: '2px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    marginBottom: '10px',
    cursor: 'pointer',
    transition: '0.3s',
  },
  radioCircle: {
    height: '20px',
    width: '20px',
    border: '2px solid #3cbc3c',
    borderRadius: '50%',
    marginLeft: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: {
    width: '10px',
    height: '10px',
    backgroundColor: '#3cbc3c',
    borderRadius: '50%',
  },
  optionText: {
    flex: 1,
  },
  icon: {
    width: '30px',
    height: '20px',
    objectFit: 'contain',
  },
  payButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#d4f8d4',
    color: '#007500',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
  },
  backButton: {
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};
export default PaymentMethod;
