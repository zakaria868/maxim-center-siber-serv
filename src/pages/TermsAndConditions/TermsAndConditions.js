import React, { useEffect, useState } from 'react';
import NavComponents from '../../components/NavComponents';
import FooterComponents from '../../components/FooterComponents';
import iconhome from '../../assets/images/iconhome.png';

function TermsAndConditions() {
  const [title, setTitle] = useState('');
  const [paragraphs, setParagraphs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://maxim-test.courseszone-eg.com/api/pages/terms')
      .then((res) => {
        if (!res.ok) throw new Error('فشل تحميل البيانات');
        return res.json();
      })
      .then((data) => {
        const { title, content } = data;

        // تقسيم المحتوى إلى فقرات حسب \r\n أو حتى السطور الطويلة
        const paragraphsArray = content
          .split(/\r\n|\n|\r/) // يقسم بناءً على أي نوع سطر جديد
          .map(p => p.trim())
          .filter(p => p.length > 0); // حذف الفقرات الفارغة

        setTitle(title);
        setParagraphs(paragraphsArray);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
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
          <span>الرئيسية &lt; {title || 'الشروط والأحكام'}</span>
        </div>
      </div>

      <div style={styles.container}>
        <h2 style={styles.title} className="privacy-policy-title">{title}</h2>

        {loading && <p>جاري تحميل البيانات...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!loading && !error && paragraphs.map((para, index) => (
          <p key={index} style={styles.paragraph}>{para}</p>
        ))}
      </div>

      <FooterComponents />
    </>
  );
}

const styles = {
  container: {
    maxWidth: '700px',
    margin: '40px auto',
    backgroundColor: '#f8f9fa',
    padding: '30px',
    borderRadius: '12px',
    fontFamily: 'Arial',
    direction: 'rtl',
    textAlign: 'right',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  paragraph: {
    fontSize: '15px',
    lineHeight: '2',
    marginBottom: '15px',
    color: '#555',
  },
};

export default TermsAndConditions;
