import React from 'react';

function PasswordChangeSuccess() {
  const handleShopClick = () => {
    alert('الانتقال إلى صفحة التسوق');
    // استخدم navigate('/shop') إذا كنت تستخدم react-router
  };

  return (
    <div style={styles.container}>
      {/* أيقونة الصح */}
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

      {/* العنوان */}
      <h2 style={styles.title}>تم تغيير كلمة المرور بنجاح!</h2>

      {/* الوصف */}
      <p style={styles.text}>
        تم تغيير كلمة المرور بنجاح. يمكنك الآن تسجيل الدخول باستخدام كلمة المرور الجديدة بكل أمان وسهولة.
      </p>

      {/* زر */}
      <button style={styles.button} onClick={handleShopClick}>
        تسوق الآن
      </button>
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
    lineHeight: '1.8',
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

export default PasswordChangeSuccess;
