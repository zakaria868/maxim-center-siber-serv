import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavComponents from "../../components/NavComponents";
import FooterComponents from "../../components/FooterComponents";
import { Spinner, Container } from "react-bootstrap";

const Logout = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setMessage("لم يتم تسجيل الدخول.");
          setLoading(false);
          return;
        }

        const response = await fetch("https://maxim-test.courseszone-eg.com/api/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setMessage("✅ تم تسجيل الخروج بنجاح");

          // حذف البيانات من localStorage
          localStorage.removeItem("token");
          localStorage.removeItem("user");

          // إعادة تحميل الصفحة لتحديث الـ NavComponents
          setTimeout(() => {
            window.location.reload(); // ✅ لحل مشكلة بقاء الإيميل ظاهر
            navigate("/login");
          }, 1500);
        } else {
          setMessage(data.message || "❌ حدث خطأ أثناء تسجيل الخروج");
        }
      } catch (error) {
        setMessage("❌ فشل الاتصال بالخادم");
      } finally {
        setLoading(false);
      }
    };

    logoutUser();
  }, [navigate]);

  return (
    <>
      <NavComponents />

      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ height: "70vh" }}>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="success" />
            <p className="mt-3">جارٍ تسجيل الخروج...</p>
          </div>
        ) : (
          <div className="text-center">
            <h4>{message}</h4>
          </div>
        )}
      </Container>

      <FooterComponents />
    </>
  );
};

export default Logout;
