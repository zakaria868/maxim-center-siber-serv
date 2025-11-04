import React, { useEffect, useState } from "react";
import "./Do.css";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function SidebarFilter() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const colors = [
    "#ff0000",
    "#00ff00",
    "#00ffff",
    "#ff00ff",
    "#0000ff",
    "#ffff00",
    "#000000",
    "#0000ff",
  ];

  useEffect(() => {
    fetch('https://maxim-test.courseszone-eg.com/api/categories')
      .then(res => {
        if (!res.ok) throw new Error("Network Error");
        return res.json();
      })
      .then(data => {
        setCategories(data); // البيانات عبارة عن array مباشرة
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="sidebar-filter">
      <h5 className="mb-3">
        كل المنتجات <span className="count">(2346)</span>
      </h5>

      <div className="filter-section">
        <h6 className="filter-title">الفئات</h6>

        {loading && <p>جارٍ التحميل...</p>}
        {error && <p style={{ color: 'red' }}>حدث خطأ: {error}</p>}

        <ul className="list-unstyled mb-4">
          {!loading && !error && categories.map((cat, index) => (
            <li key={cat.id} className="filter-item">
              <span>{cat.name}</span>
              <span className="filter-count">({cat.id})</span>
            </li>
          ))}
        </ul>
      </div>

      <hr className="divider" />

      <div className="filter-section">
        <h6 className="filter-title">السعر</h6>
        <div className="price-filter mb-3">
          <input type="number" placeholder="من" className="price-input" />
          <span className="price-separator">-</span>
          <input type="number" placeholder="إلى" className="price-input" />
        </div>
        <Slider
          range
          defaultValue={[100, 600]}
          min={0}
          max={1000}
          trackStyle={[{ backgroundColor: "#000" }]}
          railStyle={{ backgroundColor: "#ccc" }}
          handleStyle={[
            { borderColor: "#000", backgroundColor: "#000" },
            { borderColor: "#000", backgroundColor: "#000" }
          ]}
        />
      </div>

      <div className="filter-section">
        <h6 className="filter-title">اللون</h6>
        <div className="color-box">
          <div className="row-colors">
            {colors.slice(0, 4).map((color, idx) => (
              <span
                key={idx}
                className="color-circle"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
          <div className="row-colors">
            {colors.slice(4, 8).map((color, idx) => (
              <span
                key={idx + 4}
                className="color-circle"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
