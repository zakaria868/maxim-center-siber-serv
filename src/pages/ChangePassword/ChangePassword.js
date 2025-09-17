import React, { useState } from 'react';

function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleShow = (field) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      alert('كلمة المرور الجديدة وتأكيدها غير متطابقين!');
      return;
    }
    alert('تم حفظ كلمة المرور الجديدة بنجاح!');
    // من هنا يتم إرسال البيانات إلى الـ API أو معالجتها حسب التطبيق
  };

  const handleCancel = () => {
    setFormData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>تغيير كلمة المرور</h3>

      {/* كلمة المرور الحالية */}
      <label style={styles.label}>كلمة المرور الحالية</label>
      <div style={styles.inputWrapper}>
        <input
          type={showPasswords.current ? 'text' : 'password'}
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange}
          style={styles.input}
        />
        <span style={styles.icon} onClick={() => toggleShow('current')}>👁️</span>
        <span style={{ ...styles.icon, left: '10px' }}>🔒</span>
      </div>

      {/* كلمة المرور الجديدة */}
      <label style={styles.label}>كلمة المرور الجديدة</label>
      <div style={styles.inputWrapper}>
        <input
          type={showPasswords.new ? 'text' : 'password'}
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          style={styles.input}
        />
        <span style={styles.icon} onClick={() => toggleShow('new')}>👁️</span>
        <span style={{ ...styles.icon, left: '10px' }}>🔒</span>
      </div>

      {/* تأكيد كلمة المرور الجديدة */}
      <label style={styles.label}>تأكيد كلمة المرور الجديدة</label>
      <div style={styles.inputWrapper}>
        <input
          type={showPasswords.confirm ? 'text' : 'password'}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={styles.input}
        />
        <span style={styles.icon} onClick={() => toggleShow('confirm')}>👁️</span>
        <span style={{ ...styles.icon, left: '10px' }}>🔒</span>
      </div>

      {/* الأزرار */}
      <div style={styles.buttonGroup}>
        <button style={styles.cancelButton} onClick={handleCancel}>إلغاء</button>
        <button style={styles.saveButton} onClick={handleSubmit}>حفظ</button>
      </div>
    </div>
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
  icon: {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '16px',
    cursor: 'pointer',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '25px',
    gap: '10px',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#d4f8d4',
    color: '#007500',
    border: 'none',
    padding: '10px',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  cancelButton: {
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

export default ChangePassword;
