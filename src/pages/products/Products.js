import React from 'react';
import NavComponents from '../../components/NavComponents';
import FooterComponents from '../../components/FooterComponents';
import { Col, Container, Row } from 'react-bootstrap';
import dressred from '../../assets/images/pic-home/dressred.png';
import dressblack from '../../assets/images/pic-home/dressblack.png';
import dressmove from '../../assets/images/pic-home/dressmove.png';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Pagination from '../../components/Pagination/Pagination';
import SidebarFilter from '../../components/SidebarFilter/SidebarFilter';
import './produts.css';
import iconhome from '../../assets/images/iconhome.png';



import { useNavigate } from "react-router-dom";


const Products = () => {
  const navigate = useNavigate();

  return (
   <>
   <NavComponents></NavComponents>


   <div className="breadcrumb-container">
  <div className="breadcrumb-text">
    <span className="home-icon">
      <img src={iconhome} alt="homeIcon" />
    </span>
    <span>الرئيسية &lt;  المنتجات</span>
  </div>
</div>
   <Container className="my-4">
        <Row>
          {/* العمود الخاص بالفلاتر */}
          <Col md={3}>
            <SidebarFilter></SidebarFilter>
          </Col>

          {/* العمود الخاص بالمنتجات */}
          <Col md={9}>
            
    <Row className='product-card-spce'>
      <Col>
     <Card 
  style={{ backgroundColor: '#ccffcc', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/CartTwo')}
>
    <Card.Img variant="top" src={dressred} />
    <Card.Body className="align-right-text">
      <Card.Title>فستان بأطلالة حمراء</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span>&laquo;</span>المزيد 
        </Button>
        <h6 style={{ margin: 0 }}>ر.س 140</h6>
      </div>
    </Card.Body>
  </Card>
  </Col>
      <Col>
           <Card 
  style={{ backgroundColor: '#ccffcc', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/CartTwo')}
>
    <Card.Img variant="top" src={dressblack} />
    <Card.Body>
      <Card.Title>مناسبة زفاف</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span>&laquo;</span>المزيد 
        </Button>
        <h6 style={{ margin: 0 }}>ر.س 140</h6>
      </div>
    </Card.Body>
  </Card>
      </Col>
      <Col>
          <Card 
  style={{ backgroundColor: '#ccffcc', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/CartTwo')}
>
    <Card.Img variant="top" src={dressmove} />
    <Card.Body className="align-right-text">
      <Card.Title>فستان بأطلالة حمراء</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span>&laquo;</span>المزيد 
        </Button>
        <h6 style={{ margin: 0 }}>ر.س 140</h6>
      </div>
    </Card.Body>
  </Card>
      </Col>
      <Col>
      
      
      </Col>
      </Row>

      <Row className='product-card-spce'>
       <Col>
           <Card 
  style={{ backgroundColor: '#ccffcc', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/CartTwo')}
>
    <Card.Img variant="top" src={dressred} />
    <Card.Body className="align-right-text">
      <Card.Title>فستان بأطلالة حمراء</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span>&laquo;</span>المزيد 
        </Button>
        <h6 style={{ margin: 0 }}>ر.س 140</h6>
      </div>
    </Card.Body>
  </Card>
  </Col>
      <Col>
          <Card 
  style={{ backgroundColor: '#ccffcc', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/CartTwo')}
>
    <Card.Img variant="top" src={dressblack} />
    <Card.Body>
      <Card.Title>مناسبة زفاف</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span>&laquo;</span>المزيد 
        </Button>
        <h6 style={{ margin: 0 }}>ر.س 140</h6>
      </div>
    </Card.Body>
  </Card>
      </Col>
      <Col>
          <Card 
  style={{ backgroundColor: '#ccffcc', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/CartTwo')}
>
    <Card.Img variant="top" src={dressmove} />
    <Card.Body className="align-right-text">
      <Card.Title>فستان بأطلالة حمراء</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span>&laquo;</span>المزيد 
        </Button>
        <h6 style={{ margin: 0 }}>ر.س 140</h6>
      </div>
    </Card.Body>
  </Card>
      </Col>


      <Col></Col>
      </Row>

      <Row className='product-card-spce'>
       <Col>     <Card 
  style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/CartTwo')}
>
    <Card.Img variant="top" src={dressred} />
    <Card.Body className="align-right-text">
      <Card.Title>فستان بأطلالة حمراء</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span>&laquo;</span>المزيد 
        </Button>
        <h6 style={{ margin: 0 }}>ر.س 140</h6>
      </div>
    </Card.Body>
  </Card>
  </Col>
      <Col>
           <Card 
  style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/CartTwo')}
>
    <Card.Img variant="top" src={dressblack} />
    <Card.Body>
      <Card.Title>مناسبة زفاف</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span>&laquo;</span>المزيد 
        </Button>
        <h6 style={{ margin: 0 }}>ر.س 140</h6>
      </div>
    </Card.Body>
  </Card>
      </Col>
      <Col>
        <Card 
  style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/CartTwo')}
>
    <Card.Img variant="top" src={dressmove} />
    <Card.Body className="align-right-text">
      <Card.Title>فستان بأطلالة حمراء</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span>&laquo;</span>المزيد 
        </Button>
        <h6 style={{ margin: 0 }}>ر.س 140</h6>
      </div>
    </Card.Body>
  </Card>
      </Col>
      <Col></Col>
      </Row>

      <Row className='product-card-spce'>
       <Col>
          <Card 
  style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/CartTwo')}
>
    <Card.Img variant="top" src={dressred} />
    <Card.Body className="align-right-text">
      <Card.Title>فستان بأطلالة حمراء</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span>&laquo;</span>المزيد 
        </Button>
        <h6 style={{ margin: 0 }}>ر.س 140</h6>
      </div>
    </Card.Body>
  </Card>
  </Col>
      <Col>
           <Card 
  style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/CartTwo')}
>
    <Card.Img variant="top" src={dressblack} />
    <Card.Body>
      <Card.Title>مناسبة زفاف</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span>&laquo;</span>المزيد 
        </Button>
        <h6 style={{ margin: 0 }}>ر.س 140</h6>
      </div>
    </Card.Body>
  </Card>
      </Col>
      <Col>
          <Card 
  style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/CartTwo')}
>
    <Card.Img variant="top" src={dressmove} />
    <Card.Body className="align-right-text">
      <Card.Title>فستان بأطلالة حمراء</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span>&laquo;</span>المزيد 
        </Button>
        <h6 style={{ margin: 0 }}>ر.س 140</h6>
      </div>
    </Card.Body>
  </Card>
      </Col>
      <Col></Col>
      </Row>

      <Row className='product-card-spce'>
       <Col>
           <Card 
  style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/CartTwo')}
>
    <Card.Img variant="top" src={dressred} />
    <Card.Body className="align-right-text">
      <Card.Title>فستان بأطلالة حمراء</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span>&laquo;</span>المزيد 
        </Button>
        <h6 style={{ margin: 0 }}>ر.س 140</h6>
      </div>
    </Card.Body>
  </Card>
  </Col>
      <Col>
            <Card 
  style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/CartTwo')}
>
    <Card.Img variant="top" src={dressblack} />
    <Card.Body>
      <Card.Title>مناسبة زفاف</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span>&laquo;</span>المزيد 
        </Button>
        <h6 style={{ margin: 0 }}>ر.س 140</h6>
      </div>
    </Card.Body>
  </Card>
      </Col>
      <Col>
        <Card 
  style={{ backgroundColor: '#ECFFEC', width: '18rem', border: 'none', cursor: 'pointer' }}
  onClick={() => navigate('/CartTwo')}
>
    <Card.Img variant="top" src={dressmove} />
    <Card.Body className="align-right-text">
      <Card.Title>فستان بأطلالة حمراء</Card.Title>
      <Card.Text></Card.Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="transparent" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span>&laquo;</span>المزيد 
        </Button>
        <h6 style={{ margin: 0 }}>ر.س 140</h6>
      </div>
    </Card.Body>
  </Card>
      </Col>
      <Col></Col>
      </Row>

    <Row className="my-4">
  <Col className="d-flex justify-content-center">
    <Pagination />
  </Col>
</Row>

</Col>



</Row>
</Container>

   
   <FooterComponents></FooterComponents>
   </>
  );
};

export default Products;
