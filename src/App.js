import React from 'react';
import './App.css';
import { Container, Row, Col, Card, Button, Nav, Navbar } from 'react-bootstrap';
import { FaFacebookF, FaLinkedinIn, FaGlobe, FaYoutube, FaPercent } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';
import ButtonComponent from './components/ButtonComponents';
import aarabia from './assets/images/pic-home/aarabia.png';
import Group11 from './assets/images/Group 11.png';
import Vector from './assets/images/Vector.png';

import Group from './assets/images/Group.png';
import RectangleRosasy from './assets/images/RectangleRosasy.png';
import Navcomponents from './components/NavComponents';
import FooterComponents from './components/FooterComponents';
import dressred from './assets/images/pic-home/dressred.png';
import dressblack from './assets/images/pic-home/dressblack.png';
import dressgreen from './assets/images/pic-home/dressgreen.png';
import dressmove from './assets/images/pic-home/dressmove.png';
import zarf from './assets/images/pic-home/zarf.png';
import Rectangledresses from './assets/images/pic-home/rectangledresses.png';
import persent from './assets/images/pic-home/persent.png';
import person from './assets/images/pic-home/person.png';
import NavComponents from './components/NavComponents';


import { useNavigate } from "react-router-dom";




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetails from './pages/BlogDetails/BlogDetails'; // عدّل المسار حسب مشروعك


import { Link } from 'react-router-dom';

import star from './assets/images/Star.png';
import number from './assets/images/number.png';
import ahdastasamem from './assets/images/ahdastasamem.png';
import data from "../src/data/products.json"; // استيراد ملف JSON

function App() {
  const navigate = useNavigate();

  return (
    <>
    

           <Navcomponents></Navcomponents> 



             

        
   <div className="carousel-wrapper mb-30">

  <Carousel controls={false} indicators={false} interval={1000}>
    <Carousel.Item>
      <img className="d-block w-100" src={Group11} alt="First slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={Group11} alt="Second slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={Group11} alt="Third slide" />
    </Carousel.Item>
  </Carousel>

  <div className="centered-text   mt-60" dir="rtl">
    <h3 className="bold-arabic">
  <span className="first-word">أناقة خالدة</span> <span className="modern-style">بأسلوب عصري</span>
</h3>
    <p className="subtext">
    يقدم أرقى تصاميم الفساتين، بجودة عالية وأسلوب عصري.<br />
    يلبي جميع المناسبات.
  </p>
  <ButtonComponent></ButtonComponent>
  </div>
</div>

      

      {/* Carousel */}
      <Container>
        <Row>
      


        </Row>

        {/* Cards */}
        
       <Row  >
       <Col>
  <div 
    className="card mb-3 border-0 d-flex flex-row align-items-center" 
    style={{ maxWidth: '540px', backgroundColor: 'transparent' }}
  >
    {/* الصورة */}
    <img 
      src={zarf} 
      className="img-fluid rounded-start" 
      alt="..." 
      style={{ width: '100px', margin: 0 }} 
    />

    {/* النص */}
    <div className="card-body text-right p-2 m-0">
      <h5 className="card-title">مرونة الدفع</h5>
      <p className="card-text">سهولة الدفع من خلال فيزا أو كاش.</p>
    </div>
  </div>
</Col>

        
        <Col><div className="d-flex align-items-center">
  <img src={person} className="img-fluid rounded-start" style={{ width: '100px' }} alt="..." />
  <div className="card-body text-right">
    <h5 className="card-title">دعم 7/24</h5>
    <p className="card-text">حلول تقنية موثوقة ودعم مستمر.</p>
  </div>
</div>
</Col>
       <Col><div className="card mb-3 border-0 d-flex flex-row align-items-center" 
     style={{ maxWidth: '540px', backgroundColor: 'transparent' }}>

  {/* الصورة */}
  <img 
    src={aarabia} 
    className="img-fluid rounded-start" 
    alt="..." 
    style={{ width: '100px', height: 'auto' }} 
  />

  {/* النص */}
  <div className="card-body text-right p-2">
    <h5 className="card-title">سرعة التوصيل</h5>
    <p className="card-text">خصومات وسرعة توصيل الطرد.</p>
  </div>
</div>

</Col> 
       </Row>

        {/* Jumbotron-style section */}
        <Row>
         <div
  className="jumbotron"
  style={{ direction: 'rtl', textAlign: 'right', position: 'relative' }}
>
  <h1 className="display-4">أحدث المنتجات</h1>
 <p className="lead">
  <span className="">أحدث التصاميم</span> العصرية للفساتين بجودة عالية وأناقة تناسب جميع <br />المناسبات والأذواق.
</p>


<a
  className="btn btn-lg"
  href="#"
  role="button"
  style={{
    backgroundColor: 'transparent',
    color: '#888',
    position: 'absolute',
    left: '20px',
    bottom: '20px',
    textDecoration: 'underline',
    textDecorationColor: '#888', // لون رمادي
    fontWeight:'500',
    textDecorationThickness: '2px', // سمك الخط
    textUnderlineOffset: '3px' // المسافة بين النص والخط
  }}
>
  عرض المزيد
</a>

</div>

        </Row>
        {/**/}
        <Row style={{ marginBottom: '30px' }}>
       <Col>
  <Card 
  style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none', cursor: 'pointer' , position: 'relative' }}
  onClick={() => navigate('/CartTwo')}

>
    <Card.Img variant="top" src={dressred}  />
    {/* النجمة والرقم */}
  <div className="starandnumber">
    <span><img src={number} alt="number" /></span>
    <span><img src={star} alt="star" /></span>
  </div>
    <Card.Body className="align-right-text">
      <Card.Title>فستان بأطلالة حمراء</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <h6 style={{ margin: 0 }}>140 ر.س</h6>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          المزيد<span>&raquo;</span>  
 

        </Button>
      </div>
    </Card.Body>
  </Card>
</Col>

<Col>
  <Card style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none' ,position:'relatve' }}>
    <Card.Img variant="top" src={dressmove} />
     {/* النجمة والرقم */}
  <div className="starandnumber">
    <span><img src={number} alt="number" /></span>
    <span><img src={star} alt="star" /></span>
  </div>
    <Card.Body>
      <Card.Title>فستان مناسبة</Card.Title>
      <Card.Text></Card.Text>
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <h6 style={{ margin: 0 }}>140 ر.س</h6>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          المزيد<span>&raquo;</span>  
 

        </Button>
      </div>
    </Card.Body>
  </Card>
</Col>

<Col>
  <Card style={{ backgroundColor: '#ECFFEC', width: '18rem' , border: 'none' ,position:'relative'}}>
    <Card.Img variant="top" src={dressgreen} />
     {/* النجمة والرقم */}
  <div className="starandnumber">
    <span><img src={number} alt="number" /></span>
    <span><img src={star} alt="star" /></span>
  </div>
    <Card.Body>
      <Card.Title>فستان سهرة 2025</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <h6 style={{ margin: 0 }}>140 ر.س</h6>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          المزيد<span>&raquo;</span>  
 

        </Button>
      </div>
    </Card.Body>
  </Card>
</Col>

<Col>
  <Card style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none' ,position:'relative' }}>
    <Card.Img variant="top" src={dressmove} />
     {/* النجمة والرقم */}
  <div className="starandnumber">
    <span><img src={number} alt="number" /></span>
    <span><img src={star} alt="star" /></span>
  </div>
    <Card.Body>
      <Card.Title>فستان مناسبة</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <h6 style={{ margin: 0 }}>140 ر.س</h6>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          المزيد<span>&raquo;</span>  
 

        </Button>
      </div>
    </Card.Body>
  </Card>
</Col>
</Row>
<Row style={{ marginBottom: '30px' }}>
<Col>
  <Card style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none',position:'relative' }}>
    <Card.Img variant="top" src={dressgreen} />
     {/* النجمة والرقم */}
  <div className="starandnumber">
    <span><img src={number} alt="number" /></span>
    <span><img src={star} alt="star" /></span>
  </div>
    <Card.Body>
      <Card.Title>فستان سهرة 2025</Card.Title>
      <Card.Text></Card.Text>
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <h6 style={{ margin: 0 }}>140 ر.س</h6>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          المزيد<span>&raquo;</span>  
 

        </Button>
      </div>
    </Card.Body>
  </Card>
</Col>

<Col>
  <Card style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none' ,position:'relative'}}>
    <Card.Img variant="top" src={dressred} />
     {/* النجمة والرقم */}
  <div className="starandnumber">
    <span><img src={number} alt="number" /></span>
    <span><img src={star} alt="star" /></span>
  </div>
    <Card.Body>
      <Card.Title>فستان باطلالة حمراء</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <h6 style={{ margin: 0 }}>140 ر.س</h6>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          المزيد<span>&raquo;</span>  
 

        </Button>
      </div>
    </Card.Body>
  </Card>
</Col>

<Col>
  <Card style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none',position:'relative' }}>
    <Card.Img variant="top" src={dressblack} />
     {/* النجمة والرقم */}
  <div className="starandnumber">
    <span><img src={number} alt="number" /></span>
    <span><img src={star} alt="star" /></span>
  </div>
    <Card.Body>
      <Card.Title>مناسبة زفاف</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <h6 style={{ margin: 0 }}>140 ر.س</h6>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          المزيد<span>&raquo;</span>  
 

        </Button>
      </div>
    </Card.Body>
  </Card>
</Col>

<Col>
  <Card style={{ backgroundColor: '#ECFFEC', width: '18rem' , border: 'none',position:'relative'}}>
    <Card.Img variant="top" src={dressblack} />
     {/* النجمة والرقم */}
  <div className="starandnumber">
    <span><img src={number} alt="number" /></span>
    <span><img src={star} alt="star" /></span>
  </div>
    <Card.Body>
      <Card.Title>مناسبة زفاف</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <h6 style={{ margin: 0 }}>140 ر.س</h6>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          المزيد<span>&raquo;</span>  
 

        </Button>
      </div>
    </Card.Body>
  </Card>
</Col>
</Row>
<Row>
<Col>
  <Card style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none',position:'relative' }}>
    <Card.Img variant="top" src={dressred} />
     {/* النجمة والرقم */}
  <div className="starandnumber">
    <span><img src={number} alt="number" /></span>
    <span><img src={star} alt="star" /></span>
  </div>
    <Card.Body>
      <Card.Title>فستان باطلالة حمراء</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <h6 style={{ margin: 0 }}>140 ر.س</h6>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          المزيد<span>&raquo;</span>  
 

        </Button>
      </div>
    </Card.Body>
  </Card>
</Col>

<Col>
  <Card style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none',position:'relative' }}>
    <Card.Img variant="top" src={dressgreen} />
     {/* النجمة والرقم */}
  <div className="starandnumber">
    <span><img src={number} alt="number" /></span>
    <span><img src={star} alt="star" /></span>
  </div>
    <Card.Body>
      <Card.Title>فستان سهرة 2025</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <h6 style={{ margin: 0 }}>140 ر.س</h6>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          المزيد<span>&raquo;</span>  
 

        </Button>
      </div>
    </Card.Body>
  </Card>
</Col>

<Col>
  <Card style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none',position:'relative' }}>
    <Card.Img variant="top" src={dressmove} />
     {/* النجمة والرقم */}
  <div className="starandnumber">
    <span><img src={number} alt="number" /></span>
    <span><img src={star} alt="star" /></span>
  </div>
    <Card.Body>
      <Card.Title>فستان مناسبة</Card.Title>
      <Card.Text></Card.Text>
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <h6 style={{ margin: 0 }}>140 ر.س</h6>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          المزيد<span>&raquo;</span>  
 

        </Button>
      </div>
    </Card.Body>
  </Card>
</Col>

<Col>
  <Card style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none',position:'relative' }}>
    <Card.Img variant="top" src={dressblack} />
     {/* النجمة والرقم */}
  <div className="starandnumber">
    <span><img src={number} alt="number" /></span>
    <span><img src={star} alt="star" /></span>
  </div>
    <Card.Body>
      <Card.Title>مناسبة زفاف</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <h6 style={{ margin: 0 }}>140 ر.س</h6>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          المزيد<span>&raquo;</span>  
 

        </Button>
      </div>
    </Card.Body>
  </Card>
</Col>


        </Row>
        {/**/}
</Container>
        {/* Image */}
      <Container fluid>
  <Row className="my-5">
    <div className="position-relative">
      <img src={ahdastasamem} alt="Rectangle Rosasy" style={{ width: "100%" }} />
      <div className="position-absolute">
        <p className="lead">
          <span className="arabic-highlight">أحدث التصاميم </span>
          <span className="arabic-style">العصرية للفساتين بجودة عالية</span>.
        </p>
        <ButtonComponent />
      </div>
    </div>
  </Row>
</Container>

      <Container>   
       
      <Row>
    <Col>
<Card 
  style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/BlogDetails')}

>
  <Card.Img variant="top" src={Rectangledresses} />
  <Card.Body style={{ textAlign: 'right' }}>
    <Card.Title style={{ fontWeight: 'bold' }}>
      اختيار الفستان المناسب لشكل جسمك.
    </Card.Title>
    <Card.Text style={{ fontSize: '0.9rem', color: '#555' }}>
      تعرفي على كيفية اختيار الفستان المثالي الذي يبرز جمالك ويتناسب مع شكل جسمك بسهولة...
    </Card.Text>
    <Button
      variant="transparent"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        backgroundColor: 'transparent',
        border: 'none',
        color: '#000',
      }}
    >
      <span>&laquo;</span>المزيد
    </Button>
  </Card.Body>
</Card>
</Col>

    <Col>
<Card 
  style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/BlogDetails')}

>
  <Card.Img variant="top" src={Rectangledresses} />
  <Card.Body style={{ textAlign: 'right' }}>
    <Card.Title style={{ fontWeight: 'bold' }}>
      اختيار الفستان المناسب لشكل جسمك.
    </Card.Title>
    <Card.Text style={{ fontSize: '0.9rem', color: '#555' }}>
      تعرفي على كيفية اختيار الفستان المثالي الذي يبرز جمالك ويتناسب مع شكل جسمك بسهولة...
    </Card.Text>
    <Button
      variant="transparent"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        backgroundColor: 'transparent',
        border: 'none',
        color: '#000',
      }}
    >
      <span>&laquo;</span>المزيد
    </Button>
  </Card.Body>
</Card>
</Col>

    <Col>
<Card 
  style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/BlogDetails')}

>
  <Card.Img variant="top" src={Rectangledresses} />
  <Card.Body style={{ textAlign: 'right' }}>
    <Card.Title style={{ fontWeight: 'bold' }}>
      اختيار الفستان المناسب لشكل جسمك.
    </Card.Title>
    <Card.Text style={{ fontSize: '0.9rem', color: '#555' }}>
      تعرفي على كيفية اختيار الفستان المثالي الذي يبرز جمالك ويتناسب مع شكل جسمك بسهولة...
    </Card.Text>
    <Button
      variant="transparent"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        backgroundColor: 'transparent',
        border: 'none',
        color: '#000',
      }}
    >
      <span>&laquo;</span>المزيد
    </Button>
  </Card.Body>
</Card>
</Col>


     </Row>



     <Row>
    <Col>
<Card 
  style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/BlogDetails')}

>
  <Card.Img variant="top" src={Rectangledresses} />
  <Card.Body style={{ textAlign: 'right' }}>
    <Card.Title style={{ fontWeight: 'bold' }}>
      اختيار الفستان المناسب لشكل جسمك.
    </Card.Title>
    <Card.Text style={{ fontSize: '0.9rem', color: '#555' }}>
      تعرفي على كيفية اختيار الفستان المثالي الذي يبرز جمالك ويتناسب مع شكل جسمك بسهولة...
    </Card.Text>
    <Button
      variant="transparent"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        backgroundColor: 'transparent',
        border: 'none',
        color: '#000',
      }}
    >
      <span>&laquo;</span>المزيد
    </Button>
  </Card.Body>
</Card>
</Col>

    <Col>
<Card 
  style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/BlogDetails')}

>
  <Card.Img variant="top" src={Rectangledresses} />
  <Card.Body style={{ textAlign: 'right' }}>
    <Card.Title style={{ fontWeight: 'bold' }}>
      اختيار الفستان المناسب لشكل جسمك.
    </Card.Title>
    <Card.Text style={{ fontSize: '0.9rem', color: '#555' }}>
      تعرفي على كيفية اختيار الفستان المثالي الذي يبرز جمالك ويتناسب مع شكل جسمك بسهولة...
    </Card.Text>
     <Button
      variant="transparent"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        backgroundColor: 'transparent',
        border: 'none',
        color: '#000',
      }}
    >
      <span>&laquo;</span>المزيد
    </Button>
  </Card.Body>
</Card>
</Col>

    <Col>
<Card 
  style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/BlogDetails')}

>
  <Card.Img variant="top" src={Rectangledresses} />
  <Card.Body style={{ textAlign: 'right' }}>
    <Card.Title style={{ fontWeight: 'bold' }}>
      اختيار الفستان المناسب لشكل جسمك.
    </Card.Title>
    <Card.Text style={{ fontSize: '0.9rem', color: '#555' }}>
      تعرفي على كيفية اختيار الفستان المثالي الذي يبرز جمالك ويتناسب مع شكل جسمك بسهولة...
    </Card.Text>
    <Button
      variant="transparent"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        backgroundColor: 'transparent',
        border: 'none',
        color: '#000',
      }}
    >
      <span>&laquo;</span>المزيد
    </Button>
  </Card.Body>
</Card>
</Col>


     </Row>

    






      </Container>


      

       <FooterComponents></FooterComponents>
       
    </>
 
  );
}







export default App;
