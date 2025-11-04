import React from 'react';

const ReviewItem = ({ name, date, rating, text, avatar }) => {
  return (
    <div style={styles.reviewItem}>
      <div style={styles.header}>
        <span style={styles.stars}>{'⭐'.repeat(rating)}</span>
        <span style={styles.date}>{date}</span>
      </div>
      <div style={styles.body}>
        <img src={avatar} alt={name} style={styles.avatar} />
        <div>
          <h4 style={styles.name}>{name}</h4>
          <p style={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  reviewItem: {
    borderBottom: '1px solid #ddd',
    padding: '16px 0',
    direction: 'rtl',
    textAlign: 'right',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    marginBottom: 8,
  },
  stars: {
    color: '#f5a623',
    marginRight: 8,
  },
  date: {
    color: '#888',
    fontSize: 14,
  },
  body: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: '50%',
  },
  name: {
    margin: '4px 0',
  },
  text: {
    margin: 0,
    color: '#333',
  },
};

export default ReviewItem;
