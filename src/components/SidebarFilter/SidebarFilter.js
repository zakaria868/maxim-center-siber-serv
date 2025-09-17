import React from "react";
import "./Do.css";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function SidebarFilter() {
  const categories = [
    { name: "فساتين زفاف", count: 236 },
    { name: "فساتين سوارية", count: 196 },
    { name: "فساتين كتب كتاب", count: 81 },
    { name: "فساتين خطوبة", count: 87 },
    { name: "فساتين أطفال", count: 26 },
    { name: "إكسسوارات زفاف", count: 635 },
  ];

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

  return (
    <div className="sidebar-filter">
      <h5 className="mb-3">
        كل المنتجات <span className="count">(2346)</span>
      </h5>
      


      <div className="filter-section">
        <h6 className="filter-title">الفئات</h6>
        <ul className="list-unstyled mb-4">
          {categories.map((cat, index) => (
            <li key={index} className="filter-item">
              <span>{cat.name}</span>
              <span className="filter-count">({cat.count})</span>
            </li>
          ))}
        </ul>
      </div>

      <hr className="divider" />  {/* ← الخط هنا */}

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
  trackStyle={[{ backgroundColor: "#000" }]}      // الخط الأسود بين المؤشرين
  railStyle={{ backgroundColor: "#ccc" }}         // الخلفية الرمادية
  handleStyle={[
    { borderColor: "#000", backgroundColor: "#000" }, // المؤشر الأول أسود
    { borderColor: "#000", backgroundColor: "#000" }  // المؤشر الثاني أسود
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
