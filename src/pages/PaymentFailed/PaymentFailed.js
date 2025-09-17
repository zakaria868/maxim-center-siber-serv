import React from 'react';

function PaymentFailed() {
  return (
    <div style={styles.container}>
      {/* دائرة بعلامة خطأ */}
      <div style={styles.errorIcon}>
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#f87171" />
          <path
            d="M15 9L9 15M9 9l6 6"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* عنوان */}
      <h2 style={styles.title}>فشل عملية الدفع!</h2>

      {/* وصف */}
      <p style={styles.text}>
        لم تتم عملية الدفع بنجاح. يُرجى التحقق من بياناتك أو استخدام وسيلة دفع أخرى.
      </p>

      {/* زر المحاولة مرة أخرى */}
      <button style={styles.button}>حاول الدفع مرة أخرى</button>
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
  errorIcon: {
    marginBottom: '20px',
  },
  title: {
    color: '#d32f2f',
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

export default PaymentFailed;
