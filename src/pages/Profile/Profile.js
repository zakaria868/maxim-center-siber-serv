import React, { useEffect, useState } from "react";
import NavComponents from "../../components/NavComponents";
import FooterComponents from "../../components/FooterComponents";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import iconhome from "../../assets/images/iconhome.png";
import "./Profile.css";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token"); // ✅ تعريف التوكن هنا قبل الاستخدام

    const fetchProfile = async () => {
      try {
        if (!token) {
          setError("يجب تسجيل الدخول أولاً للوصول إلى الملف الشخصي.");
          setLoading(false);
          return;
        }

        const response = await fetch("https://maxim-test.courseszone-eg.com/api/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "فشل تحميل البيانات.");
        }

        setProfile(data.user || data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <NavComponents />

      <div className="breadcrumb-container">
        <div className="breadcrumb-text">
          <span className="home-icon">
            <img src={iconhome} alt="homeIcon" />
          </span>
          <span>الرئيسية &lt; الملف الشخصي</span>
        </div>
      </div>

      <Container className="mt-5 mb-5" dir="rtl">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="profile-card shadow-sm p-4 bg-white rounded">
              <h3 className="text-center mb-4">الملف الشخصي</h3>

              {loading && (
                <div className="text-center my-4">
                  <Spinner animation="border" variant="success" />
                  <p className="mt-2">جارٍ تحميل البيانات...</p>
                </div>
              )}

              {error && (
                <div className="text-center text-danger">❌ {error}</div>
              )}

              {!loading && profile && (
                <div>
                  <p><strong>الاسم:</strong> {profile.name}</p>
                  <p><strong>البريد الإلكتروني:</strong> {profile.email}</p>
                  {profile.phone && <p><strong>رقم الهاتف:</strong> {profile.phone}</p>}
                  {profile.address && <p><strong>العنوان:</strong> {profile.address}</p>}
                  {profile.created_at && <p><strong>تاريخ الإنشاء:</strong> {profile.created_at}</p>}
                </div>
              )}

              {!loading && !error && !profile && (
                <div className="text-center text-muted">
                  ⚠️ لا توجد بيانات متاحة
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      <FooterComponents />
    </>
  );
};

export default Profile;
