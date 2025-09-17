import React, { useState } from "react";
import shearsaodi from '../../assets/images/shearsaodi.png';
import usa from '../../assets/images/usa.png';
import './CustomDropdown.css';

const LangCurrencyDropdown = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("العربية ");
  const [currency, setCurrency] = useState(" ر س");

  const toggleMenu = () => setOpen(!open);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* الزر */}
      <button
        onClick={toggleMenu}
        style={{
          padding: "8px 12px",
          border: " #ccc",
          borderRadius: "6px",
          background: "#ffffff",
          cursor: "pointer",
          minWidth: "200px",
          textAlign: "right",
        }}
      >
        {language} - {currency} ▼
      </button>

      {/* القائمة */}
      {open && (
        <div className="dropdown-menu-custom">
          {/* اللغة */}
          <div style={{ marginBottom: "10px" }}>
            <h4 className="dropdown-title">اللغة</h4>
           <label className="radio-left">
  <input
    type="radio"
    name="language"
    checked={language === "العربية 🇸🇦"}
    onChange={() => setLanguage("العربية 🇸🇦")}
  />
  <div className="text-with-flag">
       <img src={shearsaodi} alt="🇸🇦" />
    العربية
 
  </div>
</label>


           <label className="radio-left">
  <input
    type="radio"
    name="language"
    checked={language === "English 🇬🇧"}
    onChange={() => setLanguage("English 🇬🇧")}
  />
  <div className="text-with-flag">
     <img src={usa} alt="🇬🇧" />
    English
   
  </div>
</label>

          </div>

          <hr />

          {/* العملة */}
          <div>
            <h4 className="dropdown-title">العملة</h4>
            <label className="radio-left">
              <input
                type="radio"
                name="currency"
                checked={currency === "ريال سعودي"}
                onChange={() => setCurrency("ريال سعودي")}
              />
              ريال سعودي
            </label>
            <label className="radio-left">
              <input
                type="radio"
                name="currency"
                checked={currency === "جنية مصري"}
                onChange={() => setCurrency("جنية مصري")}
              />
              جنية مصري
            </label>
            <label className="radio-left">
              <input
                type="radio"
                name="currency"
                checked={currency === "دولار أمريكي"}
                onChange={() => setCurrency("دولار أمريكي")}
              />
              دولار أمريكي
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default LangCurrencyDropdown;
