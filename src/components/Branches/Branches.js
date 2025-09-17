import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Branches.css";
import iconlocation from '../../assets/images/iconlocation.png';

const branches = [
  { id: 1, name: "المحلة" },
  { id: 2, name: "الرياض" },
  { id: 3, name: "المدينة" },
  { id: 4, name: "دبي" },
  { id: 5, name: "القاهرة" },
  { id: 6, name: "المنصورة" },
  { id: 7, name: "مكة" },
  { id: 8, name: "طنطا" },
];

const Branches = () => {
  return (
    
    <Accordion defaultActiveKey="0" flush dir="rtl">
      
      {/* 🔍 فورم البحث فوق القائمة */}
      <div className="accordion-form-wrapper width-form">
        <form className="subscribe-form " dir="rtl">
          <div className="input-wrapper ">
            <span className="input-icon">
              <i className="fas fa-search"></i>
            </span>
            <input type="text" placeholder="  إبحث بإسم الفرع" />
            <button type="submit">بحث</button>
          </div>
        </form>
      </div>

      {/* 📍 لستة الفروع */}
      {branches.map((branch, idx) => (
        <Accordion.Item eventKey={idx.toString()} key={branch.id}>
          <Accordion.Header>
            <span className="branch-header">
              <img src={iconlocation} alt="icon" />
              <span className="branch-name">{branch.name}</span>
            </span>
          </Accordion.Header>

          <Accordion.Body>
            <p>+966 123 456 789</p>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
    
  );
};

export default Branches;
