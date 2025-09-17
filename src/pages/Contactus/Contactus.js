import React, { useState } from "react";
import NavComponents from "../../components/NavComponents";
import FooterComponents from "../../components/FooterComponents";
import { Col, Row } from "react-bootstrap";
import soratcontactus from "../../assets/images/soratcontactus.png";
import Branches from '../../components/Branches/Branches';
import './Contactus.css';
import Branchcard from '../../components/Branchcard/Branchcard';
import headercontactus from '../../assets/images/headercontactus.png';
import iconhome from '../../assets/images/iconhome.png';
const ContactUs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeBranch, setActiveBranch] = useState("riyadh");

  const branches = [
    {
      id: "riyadh",
      name: "الرياض",
      phone: "+966 123 456 789",
      whatsapp: "+966 123 456 789",
    },
    { id: "medina", name: "المدينة" },
    { id: "dammam", name: "دبي" },
    { id: "qahira", name: "القاهرة" },
    { id: "mansoura", name: "المنصورة" },
    { id: "mecca", name: "مكة" },
    { id: "tanta", name: "طنطا" },
  ];

  const handleSearch = () => {
    console.log("بحث عن:", searchTerm);
  };

  const selectBranch = (id) => {
    setActiveBranch(id);
    console.log("تم اختيار:", id);
  };

  return (
    <>
      <NavComponents />


      
        <div className="breadcrumb-container">
  <div className="breadcrumb-text">
    <span className="home-icon">
      <img src={iconhome} alt="homeIcon" />
    </span>
    <span>الرئيسية &lt;  تواصل معنا</span>
  </div>
</div>




       <Row>

         <Col>
          <Branches />
        </Col>
        <Col className="image-container">
          <img className="space-sora" src={soratcontactus} alt="صورة تواصل معنا" />

          {/* Branchcard في منتصف الصورة */}
          <div className="branchcard-overlay">
            <Branchcard />
          </div>
        </Col>

       
      </Row>
      <FooterComponents />
    </>
  );
};

export default ContactUs;
