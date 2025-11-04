import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
 // استيراد ملف JSON
// import dressred from '../../assets/images/pic-home/dressred.png';
// import dressmove from '../../assets/images/pic-home/dressmove.png';
// import dressblack from '../../assets/images/pic-home/dressblack.png';
// import dressgreen from '../../assets/images/pic-home/dressgreen.png';
import NavComponents from '../../components/NavComponents';
import FooterComponents from '../../components/FooterComponents';

function Tagreba() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((mohamed) => {
        setData(mohamed.slice(0, 10)); // خذ أول 10 عناصر فقط
      });
  }, []);
  return (
    <>
    <NavComponents></NavComponents>
    <Row style={{ marginBottom: "30px" }}>
      {data.map((item) => (
        <Col key={item.id}>
          <Card style={{ backgroundColor: "#ECFFEC", width: "18rem", border: "none", position: "relative" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h6 style={{ margin: 0 }}>{item.price}</h6>
                <Button variant="transparent" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  المزيد<span>&raquo;</span>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <FooterComponents></FooterComponents>
    </>
  );
}

export default Tagreba;
