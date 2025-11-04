import React, { useEffect, useState } from 'react';
import NavComponents from '../../components/NavComponents';
import FooterComponents from '../../components/FooterComponents';
import { Card, Button, Col, Row } from 'react-bootstrap';
import rectangledresses from '../../assets/images/pic-home/rectangledresses.png';
import Pagination from '../../components/Pagination/Pagination';
import Searchbar from '../../components/Searchbar/Searchbar';
import iconhome from '../../assets/images/iconhome.png';
import '../blog/blogs.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_IMAGE_URL = 'https://maxim-test.courseszone-eg.com/storage/';

  useEffect(() => {
    fetch('https://maxim-test.courseszone-eg.com/api/blogs')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        setBlogs(data.data); // تعديل هنا
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <NavComponents />

      <div className="breadcrumb-container">
        <div className="breadcrumb-text">
          <span className="home-icon">
            <img src={iconhome} alt="homeIcon" />
          </span>
          <span>الرئيسية &lt; المدونة</span>
        </div>
      </div>

      <div className="blogs-content">
        <Row>
          <Col></Col>
          <Col className='space-searchbar'>
            <Searchbar />
          </Col>
          <Col></Col>
        </Row>

        {loading && <div style={{ textAlign: 'center' }}>Loading...</div>}
        {error && <div style={{ textAlign: 'center', color: 'red' }}>Error: {error.message}</div>}

        <Row className="space-row justify-content-center">
          {blogs.map((blog) => (
            <Col key={blog.id} xs={12} md={6} lg={4}>
              <Card style={{ backgroundColor: '#ECFFEC', width: '22rem', border: 'none', margin: '10px' }}>
                <Card.Img
                  variant="top"
                  src={blog.image ? `${BASE_IMAGE_URL}${blog.image}` : rectangledresses}
                  alt={blog.title}
                />
                <Card.Body style={{ textAlign: 'right' }}>
                  <Card.Title style={{ fontWeight: 'bold' }}>
                    {blog.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: '0.9rem', color: '#555' }}>
                    {blog.content?.slice(0, 100)}...
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
          ))}
        </Row>

        <Row className="justify-content-center">
          <Col></Col>
          <Col className="blogs-pagination">
            <Pagination />
          </Col>
          <Col></Col>
        </Row>
      </div>

      <FooterComponents />
    </>
  );
};

export default Blogs;
