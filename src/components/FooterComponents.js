import React from "react";
import "./Footercomponents.css";
import { TbObjectScan } from "react-icons/tb";
import OBJECTS from './../assets/images/OBJECTS.png';

const Footer = () => {
  return (
   <footer className="footer direction my-footer">

      <div className="footer-container">
        <div className="footer-subscribe">
          <p>ادخل بريدك الإلكتروني لمتابعة كل جديد</p>
        <form class="subscribe-form" dir="rtl">
  <div class="input-wrapper">
    <span class="input-icon">
      <i class="fas fa-envelope"></i>
    </span>
    <input type="email" placeholder="يرجى إدخال بريدك الإلكتروني" />
    <button type="submit">اشترك</button>
  </div>
</form>


          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>روابط سريعة</h4>
          <ul>
          <li> <a href="#">من نحن</a><span>&lsaquo;</span></li>
<li> <a href="#">المدونة</a><span>&lsaquo;</span></li>
<li> <a href="#">سياسة الخصوصية</a><span>&lsaquo;</span></li>
<li> <a href="#">الشروط والأحكام</a><span>&lsaquo;</span></li>
<li> <a href="#">تواصل معنا</a><span>&lsaquo;</span></li>

          </ul>
        </div>
        <div className="footer-about">
          <img src={OBJECTS} />
          <p>
            ماكسيم يقدم مجموعة راقية من التصاميم العصرية بتصاميم فريدة وجودة عالية تناسب جميع الأذواق والمناسبات.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>جميع الحقوق محفوظة لـ ماكسيم © 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
