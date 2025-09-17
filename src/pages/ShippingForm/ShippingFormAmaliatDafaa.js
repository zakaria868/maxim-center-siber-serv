import React, { useState } from "react";

function ShippingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    homeNumber: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("بيانات الشحن:", formData);
    alert("تم حفظ بيانات الشحن ✅");
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>تفاصيل الشحن</h3>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>اسم المستلم</label>
        <input
          type="text"
          name="name"
          placeholder="الرجاء إدخال الاسم كامل"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>الجوال</label>
        <div style={styles.phoneRow}>
          <span style={styles.prefix}>+966</span>
          <input
            type="text"
            name="phone"
            placeholder="الرجاء إدخال رقم الجوال"
            value={formData.phone}
            onChange={handleChange}
            style={{ ...styles.input, flex: 1 }}
          />
        </div>

        <label style={styles.label}>رقم المنزل</label>
        <input
          type="text"
          name="homeNumber"
          placeholder="الرجاء إدخال رقم المنزل"
          value={formData.homeNumber}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>المدينة</label>
        <input
          type="text"
          name="city"
          placeholder="الرجاء إدخال المدينة"
          value={formData.city}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>العنوان</label>
        <textarea
          name="address"
          placeholder="الرجاء إدخال عنوانك بالتفصيل"
          value={formData.address}
          onChange={handleChange}
          style={{ ...styles.input, height: "70px" }}
        />

        <button type="submit" style={styles.submitBtn}>
          تابع عملية الدفع
        </button>
      </form>

      <button style={styles.backBtn}>العودة إلى عربة التسوق</button>
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #eee",
    borderRadius: "10px",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
    direction: "rtl",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  label: {
    fontSize: "14px",
    marginBottom: "4px",
  },
  input: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    outline: "none",
  },
  phoneRow: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  prefix: {
    background: "#f3f3f3",
    padding: "8px 12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  submitBtn: {
    marginTop: "15px",
    padding: "10px",
    backgroundColor: "#d4f8d4",
    color: "#007500",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  backBtn: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#fff",
    color: "#333",
    border: "1px solid #ddd",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default ShippingForm;
