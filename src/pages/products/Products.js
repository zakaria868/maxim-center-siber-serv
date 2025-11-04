import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';




import NavComponents from '../../components/NavComponents';
import FooterComponents from '../../components/FooterComponents';
import Pagination from '../../components/Pagination/Pagination';
import SidebarFilter from '../../components/SidebarFilter/SidebarFilter';

import iconhome from '../../assets/images/iconhome.png';
import placeholderImage from '../../assets/images/pic-home/dressred.png'; // صورة افتراضية

import './produts.css';

const BASE_IMAGE_URL = "https://maxim-test.courseszone-eg.com/storage/";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://maxim-test.courseszone-eg.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        const items = data.data || [];
        setProducts(items);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
      <NavComponents />

      {/* مسار الصفحة */}
      <div className="breadcrumb-container">
        <div className="breadcrumb-text">
          <span className="home-icon">
            <img src={iconhome} alt="Home Icon" />
          </span>
          <span>الرئيسية &lt; المنتجات</span>
        </div>
      </div>

      <Container className="my-4">
        <Row>
          {/* الفلاتر */}
          <Col md={3}>
            <SidebarFilter />
          </Col>

          {/* المنتجات */}
          <Col md={9}>
            <Row className="product-card-spce">
              {products.length === 0 ? (
                <p>جارٍ تحميل المنتجات...</p>
              ) : (
                products.map((product, index) => {
                  const imageUrl = product.image
                    ? BASE_IMAGE_URL + product.image
                    : placeholderImage;

                  const mainColor = product.colors?.[0]?.color_code || '#000';

                  return (
                    <Col key={index} md={4} className="mb-4">
                      <Card
                        style={{
                          backgroundColor: '#ECFFEC',
                          width: '18rem',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                        onClick={() => navigate(`/CartTwo/${product.id}`)} // يفضل تمييز المنتج عند الانتقال
                      >
                        <Card.Img
                          variant="top"
                          src={imageUrl}
                          alt={product.name}
                        />
                        <Card.Body className="align-right-text">
                          <Card.Title>{product.name}</Card.Title>
                          <Card.Text>
                            {product.description || 'لا يوجد وصف لهذا المنتج'}
                          </Card.Text>

                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center'
                            }}
                          >
                            <Button
                              variant="transparent"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px'
                              }}
                            >
                              <span>&laquo;</span>المزيد
                            </Button>
                            <h6 style={{ margin: 0 }}>
                              {product.price
                                ? `ر.س ${product.price}`
                                : 'السعر غير متوفر'}
                            </h6>
                          </div>

                          {/* اللون الرئيسي */}
                          <div className="mt-2">
                            <span>اللون: </span>
                            <span
                              style={{
                                display: 'inline-block',
                                width: '15px',
                                height: '15px',
                                backgroundColor: mainColor,
                                borderRadius: '50%',
                                border: '1px solid #ccc'
                              }}
                            ></span>
                          </div>

                          {/* المقاسات */}
                          <div className="mt-1">
                            <span>المقاسات: </span>
                            {product.sizes.map((s, i) => (
                              <span key={i} className="ms-2 badge bg-light text-dark border">
                                {s.size}
                              </span>
                            ))}
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })
              )}
            </Row>

            {/* الباجينيشن - ممكن تبقى ثابتة لو عندك صفحة واحدة */}
            <Row className="my-4">
              <Col className="d-flex justify-content-center">
                <Pagination />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <FooterComponents />
    </>
  );
};

export default Products;
  