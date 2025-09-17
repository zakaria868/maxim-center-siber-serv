import React from "react";
import NavComponents from "../../components/NavComponents";
import FooterComponents from "../../components/FooterComponents";
import "./BlogDetails.css";

import sorablogdetails from "../../assets/images/sorablogdetails.jpg";
import ahmedatia from "../../assets/images/ahmedatia.png";
import saadelmoula from "../../assets/images/saadelmoula.png";
import ahmedeid from "../../assets/images/ahmedeid.png";
import ahmedelba from "../../assets/images/ahmedelba.png";

const BlogDetails = ({ title, author, date, content, image }) => {
  return (
    <>
      <NavComponents />

      <div className="blog-details-container">
        <img src={image || sorablogdetails} alt="Blog Main" className="blog-main-image" />

        <div className="blog-header">
          <h2>{title || "اختيار الفستان المناسب لشكل جسمك"}</h2>
          <div className="blog-meta">
            <span>{author || "✍ بواسطة مجهول"}</span>
            <span>{date || "📅 ديسمبر 2024"}</span>
            <span>🕒 7:30 مساءً</span>
          </div>
        </div>

        <div className="blog-content">
          <p>
            {content ||
              "اختيار الفستان المناسب لجسمك هو خطوة مهمة نحو إطلالة جذابة. في هذا المقال نقدم لكِ أبرز النصائح لاختيار الفستان المثالي حسب شكل جسمك."}
          </p>
        </div>

        <div className="related-blogs">
          <h3>قد يعجبك أيضاً</h3>
          <div className="related-blogs-grid">
            <div className="related-blog-card">
              <img src={ahmedatia} alt="blog1" />
              <h4>اختيار الفساتين المناسبة لشكل جسمك</h4>
              <p>اكتشفي النصائح الأساسية لاختيار الفساتين المناسبة لشكل جسمك واحصلي على إطلالة متألقة.</p>
              <button className="read-more">المزيد &laquo;</button>
            </div>

            <div className="related-blog-card">
              <img src={ahmedeid} alt="blog2" />
              <h4>دليل لاختيار الفساتين المثالية في مناسبة زفاف</h4>
              <p>اكتشفي كيف تختارين الفستان المثالي لمناسبات الزفاف بخطوات بسيطة.</p>
              <button className="read-more">المزيد &laquo;</button>
            </div>

            <div className="related-blog-card">
              <img src={ahmedelba} alt="blog3" />
              <h4>ألوان الفساتين في عالم الموضة</h4>
              <p>تعرفي على أحدث صيحات ألوان الفساتين وكيفية تنسيقها مع شخصيتك.</p>
              <button className="read-more">المزيد &laquo;</button>
            </div>
          </div>
        </div>
      </div>

      <FooterComponents />
    </>
  );
};

export default BlogDetails;
