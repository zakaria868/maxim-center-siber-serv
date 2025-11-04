import React, { useState } from 'react';
import NAVcomponents from '../../components/NavComponents';
import './UserProfile.css';
import FooterComponents from '../../components/FooterComponents';
import iconhome from '../../assets/images/iconhome.png';


function UserProfile() {
  const [formData, setFormData] = useState({
    name: 'أحمد عطية',
    email: 'info@mail.com',
    phone: '05 123 456 789',
    countryCode: '+966',
    password: '************',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSave = () => {
    alert('تم حفظ التعديلات بنجاح!');
  };

  return (
    <>
    <NAVcomponents></NAVcomponents>
    
   <div className="breadcrumb-container">
  <div className="breadcrumb-text">
    <span className="home-icon">
      <img src={iconhome} alt="homeIcon" />
    </span>
    <span>الرئيسية &lt;   سلة الشراء </span>
  </div>
</div>


    <div style={styles.container}>
      <h3 style={styles.title}>الملف الشخصي</h3>

      {/* الاسم */}
      <label style={styles.label}>الاسم</label>
      <div style={styles.inputWrapper}>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <span style={styles.icon}>👤</span>
      </div>

      {/* البريد الإلكتروني */}
      <label style={styles.label}>البريد الإلكتروني</label>
      <div style={styles.inputWrapper}>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <span style={styles.icon}>📧</span>
      </div>

      {/* الجوال */}
      <label style={styles.label}>الجوال</label>
      <div style={styles.phoneWrapper}>
        <input
          name="countryCode"
          type="text"
          value={formData.countryCode}
          onChange={handleChange}
          style={{ ...styles.input, flex: '0 0 60px' }}
        />
        <span style={{ ...styles.icon, left: '65px' }}>🌍</span>

        <input
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
          style={{ ...styles.input, flex: 1, marginLeft: '10px' }}
        />
        <span style={styles.icon}>📱</span>
      </div>

      {/* كلمة المرور */}
      <label style={styles.label}>كلمة المرور</label>
      <div style={styles.inputWrapper}>
        <input
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        <span style={styles.icon} onClick={togglePassword} title="إظهار/إخفاء">👁️</span>
        <span style={{ ...styles.icon, left: '10px' }}>🔒</span>
      </div>

      {/* الأزرار */}
      <div style={styles.buttonGroup}>
        <button style={styles.secondaryButton}>تغيير كلمة المرور</button>
        <button style={styles.primaryButton} onClick={handleSave}>
          حفظ التعديلات
        </button>
      </div>
    </div>
     <FooterComponents></FooterComponents>
     </>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '25px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    fontFamily: 'Arial, sans-serif',
    direction: 'rtl',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  label: {
    marginBottom: '6px',
    display: 'block',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  inputWrapper: {
    position: 'relative',
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px 35px 10px 35px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  phoneWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '16px',
    cursor: 'default',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '25px',
    gap: '10px',
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#d4f8d4',
    color: '#007500',
    border: 'none',
    padding: '10px',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default UserProfile;
