import React, { useEffect, useState } from "react";
import './CustomDropdown.css'; // ← تأكد من استيراد ملف الـ CSS

const CurrencyDropdown = () => {
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    fetch("https://maxim-test.courseszone-eg.com/api/currencies")
      .then((res) => {
        if (!res.ok) throw new Error("فشل التحميل");
        return res.json();
      })
      .then((data) => {
        if (data.status === "success") {
          setCurrencies(data.data);
          const defaultCurrency = data.data.find(cur => cur.is_default === 1);
          if (defaultCurrency) {
            setSelectedCurrency(defaultCurrency);
          }
        } else {
          throw new Error("بيانات غير صالحة");
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ position: "relative", display: "inline-block", direction: "rtl" }}>
      <button
        onClick={toggleMenu}
        style={{
          padding: "8px 12px",
          border: "#ccc",
          borderRadius: "6px",
          background: "#ffffff",
          cursor: "pointer",
          minWidth: "200px",
          textAlign: "right",
        }}
      >
        {selectedCurrency ? `${selectedCurrency.name} (${selectedCurrency.code})` : "اختر العملة"} ▼
      </button>

      {open && (
        <div className="dropdown-menu-custom">
          <h4 className="dropdown-title">العملة</h4>

          {loading && <p>جاري التحميل...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          {!loading && !error && currencies.map((cur) => (
            <label className="radio-left" key={cur.id}>
              <input
                type="radio"
                name="currency"
                checked={selectedCurrency?.id === cur.id}
                onChange={() => setSelectedCurrency(cur)}
              />
              <span>
                {cur.name} ({cur.code}) - {parseFloat(cur.value).toFixed(2)}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;
