import React from 'react';
import NavComponents from '../../components/NavComponents';
import FooterComponents from '../../components/FooterComponents';


 import { Card, Button, Col } from 'react-bootstrap';

 import { Row } from 'react-bootstrap';
import rectangledresses from '../../assets/images/pic-home/rectangledresses.png';
import SidebarFilter from '../../components/Pagination/Pagination';
import Pagination from '../../components/Pagination/Pagination';
import '../blog/blogs.css';
import Searchbar from '../../components/Searchbar/Searchbar';
import iconhome from '../../assets/images/iconhome.png';


const Blogs = () => {
  return (
   <>
<NavComponents></NavComponents>


 <div className="breadcrumb-container">
  <div className="breadcrumb-text">
    <span className="home-icon">
      <img src={iconhome} alt="homeIcon" />
    </span>
    <span>الرئيسية &lt;  المدونة</span>
  </div>
</div>



<div className="blogs-content">
  <Row>
    <Col></Col>
    <Col className='space-searchbar'> <Searchbar></Searchbar></Col>
    <Col></Col>
  </Row>
   <Row>
    <Col>
<Card style={{ backgroundColor: '#ECFFEC', width: '22rem', border: 'none', margin: '10px' }}>
  <Card.Img variant="top" src={rectangledresses} />
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
<Card style={{ backgroundColor: '#ECFFEC', width: '22rem', border: 'none', margin: '10px' }}>
  <Card.Img variant="top" src={rectangledresses} />
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
<Card style={{ backgroundColor: '#ECFFEC', width: '22rem', border: 'none', margin: '10px' }}>
  <Card.Img variant="top" src={rectangledresses} />
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



     <Row className='space-row'>
    <Col>
<Card style={{ backgroundColor: '#ECFFEC', width: '22rem', border: 'none', margin: '10px' }}>
  <Card.Img variant="top" src={rectangledresses} />
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
<Card style={{ backgroundColor: '#ECFFEC', width: '22rem', border: 'none', margin: '10px' }}>
  <Card.Img variant="top" src={rectangledresses} />
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
<Card style={{ backgroundColor: '#ECFFEC', width: '22rem', border: 'none', margin: '10px' }}>
  <Card.Img variant="top" src={rectangledresses} />
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
    <Row className="justify-content-center">
      <Col></Col>
      <Col className="blogs-pagination">
  <Pagination></Pagination>
</Col>

      <Col></Col>
      
    </Row>

    </div>


<FooterComponents></FooterComponents>


   </>
  );
};

export default Blogs;
