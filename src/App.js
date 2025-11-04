import React from 'react';
import  { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
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







import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetails from './pages/BlogDetails/BlogDetails'; // عدّل المسار حسب مشروعك


import { Link } from 'react-router-dom';

import star from './assets/images/Star.png';
import number from './assets/images/number.png';
import ahdastasamem from './assets/images/ahdastasamem.png';
import data from "../src/data/products.json"; // استيراد ملف JSON
import soracarouseltwo from './assets/images/soracarouseltwo.jpg';
import soracarouselthree from './assets/images/soracarouselthree.png';

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

 useEffect(() => {
    fetch('https://maxim-test.courseszone-eg.com/api/products')
      .then(res => res.json())
      .then(data => {
        if (data && data.data) {
          setProducts(data.data);
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const getImageUrl = (imagePath) => {
    return `https://maxim-test.courseszone-eg.com/storage/${imagePath}`;
  };
  return (
    <>
    

           <Navcomponents></Navcomponents> 



             

        
   <div className="carousel-wrapper mb-30">

  <Carousel controls={false} indicators={false} interval={1000}>
    <Carousel.Item>
      <img className="d-block w-100 size-img" src={Group11} alt="First slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100 size-img" src={soracarouseltwo} alt="Second slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100 size-img" src={soracarouselthree} alt="Third slide" />
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
        
    <Row className="gy-4 justify-content-center">
  <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
    <div className="d-flex align-items-center w-100" style={{ maxWidth: "350px" }}>
      <img src={zarf} className="img-fluid rounded-start" style={{ width: '100px' }} alt="..." />
      <div className="card-body text-right">
        <h5 className="card-title">مرونة الدفع</h5>
        <p className="card-text">سهولة الدفع من خلال فيزا أو كاش.</p>
      </div>
    </div>
  </Col>

  <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
    <div className="d-flex align-items-center w-100" style={{ maxWidth: "350px" }}>
      <img src={person} className="img-fluid rounded-start" style={{ width: '100px' }} alt="..." />
      <div className="card-body text-right">
        <h5 className="card-title">دعم 7/24</h5>
        <p className="card-text">حلول تقنية موثوقة ودعم مستمر.</p>
      </div>
    </div>
  </Col>

  <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
    <div className="d-flex align-items-center w-100" style={{ maxWidth: "350px" }}>
      <img src={aarabia} className="img-fluid rounded-start" style={{ width: '100px' }} alt="..." />
      <div className="card-body text-right">
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
        {/*start cards producrs*/}
   {products.reduce((rows, product, index) => {
  if (index % 3 === 0) rows.push([]); // 3 كروت في الصف للكمبيوتر
  rows[rows.length - 1].push(product);
  return rows;
}, []).map((row, rowIndex) => (
  <Row key={rowIndex} style={{ marginBottom: '30px' }}>
    {row.map((product) => (
      <Col
        key={product.id}
        xs={12}
        sm={6}
        md={6}
        lg={4}
        className="d-flex justify-content-center mb-4"
      >
        <Card
          style={{
            backgroundColor: '#ECFFEC',
            width: '100%',
            maxWidth: '18rem',
            border: 'none',
            cursor: 'pointer',
            position: 'relative'
          }}
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <Card.Img variant="top" src={getImageUrl(product.image)} />
          <div className="starandnumber">
            <span><img src={number} alt="number" /></span>
            <span><img src={star} alt="star" /></span>
          </div>
          <Card.Body className="align-right-text">
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <h6 style={{ margin: 0 }}>{product.price} {product.currency}</h6>
              <Button variant="transparent">
                المزيد<span>&raquo;</span>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
))}


        {/* end card products*/}
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
