import React, { useState } from 'react';
import NavComponents from '../../components/NavComponents';
import FooterComponents from '../../components/FooterComponents';

function ProductReview() {
  const [rating, setRating] = useState(4);
  const [comment, setComment] = useState('');

  const handleRatingClick = (star) => {
    setRating(star);
  };

  const handleSubmit = () => {
    alert(`تم إرسال التقييم: ${rating} نجوم - تعليق: ${comment}`);
    setComment('');
  };

  return (
    <>
    <NavComponents></NavComponents>
    <FooterComponents></FooterComponents>
    
    
    
  
    <div style={styles.container}>
      {/* شريط المراحل */}
      <div style={styles.steps}>
        {['السلة', 'معلومات الشحن', 'الدفع', 'تقييم المنتج'].map((step, index) => (
          <div key={index} style={styles.stepItem}>
            <div style={styles.stepCircle}>{index + 1}</div>
            <div style={styles.stepLabel}>{step}</div>
            {index !== 3 && <div style={styles.dash}></div>}
          </div>
        ))}
      </div>

      {/* اسم المنتج */}
      <h3 style={styles.productTitle}>فستان بإطلالة حمراء</h3>

      {/* النجوم */}
      <div style={styles.stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRatingClick(star)}
            style={{
              fontSize: '24px',
              color: star <= rating ? '#FFD700' : '#ccc',
              cursor: 'pointer',
            }}
          >
            ★
          </span>
        ))}
      </div>

      {/* حقل التعليق */}
      <textarea
        style={styles.textarea}
        placeholder="الرجاء كتابة تعليقاتك عن المنتج..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      {/* زر الإرسال */}
      <button style={styles.button} onClick={handleSubmit}>
        إرسال
      </button>

      {/* صورة المنتج */}
      <img
        src="https://i.imgur.com/fJ5ZrxW.png" // يمكنك استبدال هذا الرابط بصورة أخرى
        alt="product"
        style={styles.productImage}
      />
    </div>
      </>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    direction: 'rtl',
    position: 'relative',
  },
  steps: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '30px',
  },
  stepItem: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  stepCircle: {
    width: '30px',
    height: '30px',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '50%',
    textAlign: 'center',
    lineHeight: '30px',
    fontWeight: 'bold',
  },
  stepLabel: {
    fontSize: '12px',
    marginTop: '5px',
    textAlign: 'center',
  },
  dash: {
    width: '30px',
    height: '2px',
    backgroundColor: '#ccc',
    margin: '0 10px',
  },
  productTitle: {
    textAlign: 'center',
    marginBottom: '10px',
  },
  stars: {
    textAlign: 'center',
    marginBottom: '15px',
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginBottom: '20px',
    resize: 'none',
  },
  button: {
    backgroundColor: '#d4f8d4',
    color: '#007500',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    marginBottom: '30px',
  },
  productImage: {
    width: '130px',
    position: 'absolute',
    bottom: '30px',
    left: '30px',
  },
};

export default ProductReview;
