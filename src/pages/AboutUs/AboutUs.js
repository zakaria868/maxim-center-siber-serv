// AboutUs.jsx
import React from 'react';
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




   <Row     className="margin-jumb-trun">
    <Col></Col> 
    <Col> <div className="custom-jumbotron text-center" dir="rtl">
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

      </div></Col> 
    <Col></Col> 
    
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
  <Col>
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
  <Col className="space-zarfabout">
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

<Row>
<Col> <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ibrahemdias} />
  <Card.Body className="text-center">
    <Card.Title>أبراهيم دياز</Card.Title>
    <Card.Text>مدير فرع الرياض</Card.Text>
  </Card.Body>
</Card>
</Col>
<Col> <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={saadelmoula} />
  <Card.Body className="text-center">
    <Card.Title> سعد المولي</Card.Title>
    <Card.Text>  عضو مجلس إدارة</Card.Text>
  </Card.Body>
</Card>
</Col>
<Col> <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ahmedeid} />
  <Card.Body className="text-center">
    <Card.Title>  أحمدعيد</Card.Title>
    <Card.Text>  رئيس مجلس إدارة</Card.Text>
  </Card.Body>
</Card>
</Col>
<Col> <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ahmedatia} />
  <Card.Body className="text-center">
    <Card.Title>أحمد عطية</Card.Title>
    <Card.Text>    مؤسس الشركة</Card.Text>
  </Card.Body>
</Card>
</Col>

</Row>

<Row className='images-owner'>
<Col> <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={abdlasoltan} />
  <Card.Body className="text-center">
    <Card.Title> عبدالله سلطان</Card.Title>
    <Card.Text>  عضو مجلس إدارة</Card.Text>
  </Card.Body>
</Card>
</Col>
<Col> <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={aliatef} />
  <Card.Body className="text-center">
    <Card.Title>  على عاطف </Card.Title>
    <Card.Text>    مدير فرع القاهرة</Card.Text>
  </Card.Body>
</Card>
</Col>
<Col> <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ahmedelba} />
  <Card.Body className="text-center">
    <Card.Title>  أحمد علبة </Card.Title>
    <Card.Text>    مدير فرع دبى</Card.Text>
  </Card.Body>
</Card>
</Col>
<Col> <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={khlilalrian} />
  <Card.Body className="text-center">
    <Card.Title> خليل الريان</Card.Title>
    <Card.Text>     مدير فرع مكة</Card.Text>
  </Card.Body>
</Card>
</Col>

</Row>


    
   <FooterComponents></FooterComponents>
   </>
  );
};

export default AboutUs;
