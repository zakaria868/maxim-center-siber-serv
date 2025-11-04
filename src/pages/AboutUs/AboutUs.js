// AboutUs.jsx
import React from 'react';
import  { useState, useEffect } from 'react';

import './AboutUs.css'; // استورد ملف CSS للتنسيق
import NavComponents from '../../components/NavComponents';
import FooterComponents from '../../components/FooterComponents';
import { Row ,Col } from 'react-bootstrap';
import './AboutUs.css';
import soraolaabout from '../../assets/images/soraolaabout.jpg';
import sorataniaabout from '../../assets/images/sorataniaabout.jpg';
import sorataltaabout from '../../assets/images/sorataltaabout.jpg';
import sorarabaabout from '../../assets/images/sorarabaabout.png';

import aien from '../../assets/images/aien.png';
import zarfabout from '../../assets/images/zarfabort.png';
import ibrahemdias from '../../assets/images/ibrahemdias.png';
import saadelmoula from '../../assets/images/saadelmoula.png';
import ahmedeid from '../../assets/images/ahmedeid.png';
import ahmedatia from '../../assets/images/ahmedatia.png';
import abdlasoltan from '../../assets/images/abdlasoltan.png';
import aliatef from '../../assets/images/aliatef.png';
import ahmedelba from '../../assets/images/ahmedelba.png';
import khlilalrian from '../../assets/images/khalilalrian.png';
// import headeraboutus from '../../assets/images/headeraboutus.png';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pagination from '../../components/Pagination/Pagination';
import iconhome from '../../assets/images/iconhome.png';



const AboutUs = () => {
   // حالة لتخزين البيانات
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect لجلب البيانات من API عند تحميل الصفحة
  useEffect(() => {
    fetch('https://maxim-test.courseszone-eg.com/api/teams')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setOwners(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
   <NavComponents></NavComponents>


  <div className="breadcrumb-container">
  <div className="breadcrumb-text">
    <span className="home-icon">
      <img src={iconhome} alt="homeIcon" />
    </span>
    <span>الرئيسية &lt; من نحن</span>
  </div>
</div>




<Row className="margin-jumb-trun justify-content-center">
  <Col xs={12} md={10} lg={8}>
    <div className="custom-jumbotron text-center" dir="rtl">
      <h1 className="jumbotron-title">الأناقة تبدأ معنا في ماكسيم.</h1>

      <div className="jumbotron-text">
        <p className="line1">
          نحن شركة رائدة فى تصميم وانتاج الفساتين العصرية، نعمل بشغف وإبداع لتقديم منتجات تلبي جميع .
        </p>
        <p className="line2">
          لأن نكون الخيار والمناسبات مع التركيز على الجودة والتميز في كل تفصيل.الأذواق
        </p>
        <p className="line3">
          نسعى دائما الأول للمرأة الباحثة عن الأناقة والتألق.
        </p>
      </div>
    </div>
  </Col>
</Row>

  <Row className="about-images-row">
  <Col>
    <div className="images-wrapper">
      <img src={sorarabaabout} alt="..." className="about-image " />
      
       <img src={sorataltaabout} alt="..." className="about-image sorataltaabout" />
      
          <img src={sorataniaabout} alt="..." className="about-image " />
     
      <img src={soraolaabout} alt="..." className="about-image soraolaabout " />
  
      
      
    </div>
  </Col>
</Row>



  <Row className="aien-zarfabout ms-5">
  

  {/* الكارت الأول */}
   <Col xs={12} md={6} className="mb-4">
    <div 
      className="card mb-3 border-0 d-flex flex-row align-items-center transparent-card margin-aien" 
      style={{ maxWidth: '540px' }}
    >
      {/* الصورة */}
   <img src={aien} className="img-fluid rounded-start equal-images" alt="..." />

      {/* النص */}
      <div className="card-body text-right p-2 m-0">
        <h5 className="card-title">رؤية الشركة</h5>
        <div className="blog-card" style={{ direction: 'rtl', textAlign: 'right' }}>
          <h5 className="line4 text-faded">
            أن تصبح الوجهة الأولى للأناقة بتقديم فساتين راقية
          </h5>
          <h5 className="line5 text-faded">
            بتصاميم عصرية وجودة إستثنائية تلبى جميع الأذواق
          </h5>
          <h5 className="line6 text-faded">
            والمناسبات
          </h5>
        </div>
      </div>
    </div>
  </Col>

  {/* الكارت الثاني */}
  <Col   xs={12} md={6} mb-4 space-zarfabout>
    <div 
      className="card mb-3 border-0 d-flex flex-row align-items-center transparent-card" 
      style={{ maxWidth: '540px' }}
    >
      {/* الصورة */}
   <img src={zarfabout} className="img-fluid rounded-start equal-images" alt="..." />

      {/* النص */}
      <div className="card-body text-right p-2 m-0">
        <h5 className="card-title">رسالتنا</h5>
        <div className="blog-card" style={{ direction: 'rtl', textAlign: 'right' }}>
          <h5 className="line1 text-faded">
            تقديم فساتين عصرية بتصاميم راقية وجودة إستثنائية
          </h5>
          <h5 className="line2 text-faded">
            لنساعد كل إمرأة على التألق بإطلالة مميزة تعكس
          </h5>
          <h5 className="line3 text-faded">
            جمالها وأسلوبها الخاص
          </h5>
        </div>
      </div>
    </div>
  </Col>

  
</Row>




<Row     className="margin-jumb-trun">
    <Col></Col> 
    <Col> <div className="custom-jumbotron text-center" dir="rtl">
      <h1 className="jumbotron-title">   فريق عمل الشركة</h1>

   <div className="jumbotron-text">
  <p className="line1">
    فريقنا يضم خبراء ومصممين مبدعين، يقدمون تصاميم فريدة 
  </p>
  <p className="line2">
    بأعلى جودة لتلبية تطلعات عملائنا باحترافية وشغف.
  </p>
  <p className="line3">
  
  </p>
</div>

      </div></Col> 
    <Col></Col> 
    
    </Row>

 {/* بيانات الفريق من API */}
      <Row className="mb-4" dir="rtl" style={{ justifyContent: 'center' }}>
        {loading && <p>جاري تحميل بيانات فريق العمل...</p>}
        {error && <p style={{ color: 'red' }}>حدث خطأ: {error}</p>}
        {!loading && !error && owners.length === 0 && <p>لا توجد بيانات لعرضها.</p>}
        {!loading &&
          !error &&
          owners.map((owner) => (
            <Col key={owner.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src={`https://maxim-test.courseszone-eg.com/storage/${owner.image}`}
                  alt={owner.name}
                />
                <Card.Body className="text-center">
                  <Card.Title>{owner.name}</Card.Title>
                  <Card.Text>{owner.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>


    
   <FooterComponents></FooterComponents>
   </>
  );
};

export default AboutUs;
