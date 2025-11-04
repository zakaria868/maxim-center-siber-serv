import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './CartTwo.css';
import { FaShoppingCart, FaStar } from "react-icons/fa";

import NavComponents from '../../components/NavComponents';
import FooterComponents from '../../components/FooterComponents';

import ReviewList from '../../pages/ReviwList';

const BASE_IMAGE_URL = "https://maxim-test.courseszone-eg.com/storage/";

const ProductPage = () => {
  const { id } = useParams(); // 👈 ID من URL
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("none");

  useEffect(() => {
    fetch("https://maxim-test.courseszone-eg.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        const productList = data.data;
        const foundProduct = productList.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
      })
      .catch((err) => console.error("فشل في تحميل بيانات المنتج", err));
  }, [id]);

  if (!product) {
    return <p style={{ textAlign: 'center' }}>جارٍ تحميل بيانات المنتج...</p>;
  }

  const mainColor = product.colors?.[0]?.color_code || "#ccc";
  const mainSize = product.sizes?.[0]?.size || "غير محدد";
  const imageUrl = product.image ? BASE_IMAGE_URL + product.image : "";

  return (
    <>
      <NavComponents />

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        alignItems: "center",
        background: "#f9fff9",
        borderRadius: "12px",
        padding: "20px",
        gap: "20px",
      }}>
        {/* النصوص */}
        <div style={{ flex: 1 }}>
          <h2>{product.name}</h2>
          <p style={{ color: "#555", fontSize: "14px", marginBottom: "15px" }}>
            {product.description || 'لا يوجد وصف لهذا المنتج.'}
          </p>

          <div style={{ display: "flex", gap: "40px", marginBottom: "15px" }}>
            <div>
              <span>اللون</span>
              <div style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: mainColor,
                marginTop: "5px",
                border: '1px solid #ccc'
              }}></div>
            </div>
            <div>
              <span>المقاس</span>
              <div style={{
                marginTop: "5px",
                fontWeight: "bold",
              }}>{mainSize}</div>
            </div>
          </div>

          {/* التقييم */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} color="#FFD700" />
            ))}
            <FaStar color="#ddd" />
            <span style={{ marginRight: "8px", color: "#777" }}>(+2763 تقييم)</span>
          </div>

          {/* السعر وزر */}
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <button 
              className="buttonCarttwo"
              onClick={() => navigate('/ShippingForm')}
            >
              أضف للسلة
            </button>
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>
              {product.price ? `${product.price} USD` : 'السعر غير متوفر'}
            </span>
          </div>
        </div>

        {/* صورة المنتج */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <img
            src={imageUrl}
            alt={product.name}
            style={{ width: "250px", borderRadius: "8px" }}
          />
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "10px"
          }}>
            <img src={imageUrl} alt="thumbnail" width="60" />
            <img src={imageUrl} alt="thumbnail" width="60" />
            <img src={imageUrl} alt="thumbnail" width="60" />
          </div>
        </div>
      </div>

      {/* التبويبات */}
      <div>
        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginBottom: "20px"
        }}>
          <button onClick={() => setActiveTab("reviews")}>التعليقات</button>
          <button onClick={() => setActiveTab("related")}>منتجات ذات صلة</button>
        </div>

        <div>
          {activeTab === "reviews" && (
            <div>
              <h3> <ReviewList /></h3>
              <p>هنا يظهر قسم التعليقات...</p>
            </div>
          )}

          {activeTab === "related" && (
            <div>
              <h3>منتجات ذات صلة</h3>
              <p>هنا تظهر المنتجات ذات الصلة...</p>
            </div>
          )}
        </div>
      </div>

      <FooterComponents />
    </>
  );
};

export default ProductPage;
