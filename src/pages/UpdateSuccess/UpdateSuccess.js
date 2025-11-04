import React from 'react';
import iconhome from '../../assets/images/iconhome.png';
import NavComponents from '../../components/NavComponents';
import FooterComponents from '../../components/FooterComponents';

function UpdateSuccess() {
  const handleShopNow = () => {
    alert('تم التوجيه إلى صفحة التسوق');
    // يمكنك استبدالها بـ navigate('/shop') باستخدام react-router
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
      {/* أيقونة النجاح */}
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
      <h2 style={styles.title}>تم تعديل بياناتك بنجاح!</h2>

      {/* الوصف */}
      <p style={styles.text}>
        تم تعديل بياناتك بنجاح. شكرًا لتحديث معلوماتك، مما يساعدنا على تقديم تجربة أفضل تلبي احتياجاتك.
      </p>

      {/* زر */}
      <button style={styles.button} onClick={handleShopNow}>
        تسوق الآن
      </button>
    </div>
      <FooterComponents></FooterComponents>
     </>
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

export default UpdateSuccess;
