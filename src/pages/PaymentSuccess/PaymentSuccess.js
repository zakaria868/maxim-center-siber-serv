import React from 'react';

function PaymentSuccess() {
  return (
    <div style={styles.container}>
      {/* دائرة بعلامة صح */}
      <div style={styles.successIcon}>
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#a0f0a0" />
          <path
            d="M7 13l3 3 7-7"
            stroke="#2e7d32"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* عنوان */}
      <h2 style={styles.title}>عملية الدفع تمت بنجاح!</h2>

      {/* وصف */}
      <p style={styles.text}>
        تمت عملية الدفع بنجاح. شكرًا لك على استخدام خدماتنا. سيتم تأكيد الطلب قريبًا.
      </p>

      {/* زر تقييم المنتج */}
      <button style={styles.button}>تقييم المنتج</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '30px',
    borderRadius: '12px',
    backgroundColor: '#f8f9fa',
    fontFamily: 'Arial, sans-serif',
    direction: 'rtl',
    width: '300px',
    margin: 'auto',
    marginTop: '50px',
  },
  successIcon: {
    marginBottom: '20px',
  },
  title: {
    color: '#2e7d32',
    fontSize: '20px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '25px',
  },
  button: {
    backgroundColor: '#d4f8d4',
    color: '#2e7d32',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default PaymentSuccess;
