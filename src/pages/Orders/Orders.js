import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Card } from "react-bootstrap";
import NavComponents from "../../components/NavComponents";
import FooterComponents from "../../components/FooterComponents";
import iconhome from "../../assets/images/iconhome.png";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchOrders = async () => {
      try {
        if (!token) {
          setError("يجب تسجيل الدخول لعرض المشتريات ❌");
          setLoading(false);
          return;
        }

        const response = await fetch("https://maxim-test.courseszone-eg.com/api/orders", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "فشل في تحميل المشتريات.");
        }

        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <NavComponents />

      <div className="breadcrumb-container">
        <div className="breadcrumb-text">
          <span className="home-icon">
            <img src={iconhome} alt="homeIcon" />
          </span>
          <span>الرئيسية &lt; مشترياتي</span>
        </div>
      </div>

      <Container className="mt-5 mb-5" dir="rtl">
        <h3 className="text-center mb-4">🛍️ مشترياتي</h3>

        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="success" />
            <p>جارٍ تحميل الطلبات...</p>
          </div>
        )}

        {error && <p className="text-center text-danger">{error}</p>}

        {!loading && !error && orders.length === 0 && (
          <p className="text-center text-muted">لا توجد طلبات حتى الآن.</p>
        )}

        {orders.map((order) => (
          <Card key={order.id} className="mb-4 shadow-sm">
            <Card.Header className="bg-light">
              <strong>رقم الطلب:</strong> {order.id} &nbsp; | &nbsp;
              <strong>الحالة:</strong> {order.status} &nbsp; | &nbsp;
              <strong>الإجمالي:</strong> {order.total_price} ريال
              <span className="float-end text-muted">
                {new Date(order.created_at).toLocaleDateString("ar-EG")}
              </span>
            </Card.Header>

            <Card.Body>
              {order.items && order.items.length > 0 ? (
                order.items.map((item) => (
                  <Row key={item.id} className="align-items-center mb-3">
                    <Col xs={3} md={2}>
                      <img
                        src={`https://maxim-test.courseszone-eg.com/storage/${item.product.image}`}
                        alt={item.product.name_ar}
                        className="img-fluid rounded"
                      />
                    </Col>
                    <Col>
                      <p><strong>{item.product.name_ar}</strong></p>
                      <p>اللون: <span style={{ color: item.color.code }}>{item.color.name_ar}</span></p>
                      <p>المقاس: {item.size.name_ar}</p>
                      <p>الكمية: {item.quantity}</p>
                      <p>السعر: {item.price} ريال</p>
                    </Col>
                  </Row>
                ))
              ) : (
                <p className="text-muted">لا توجد منتجات في هذا الطلب.</p>
              )}
            </Card.Body>
          </Card>
        ))}
      </Container>

      <FooterComponents />
    </>
  );
};

export default Orders;
