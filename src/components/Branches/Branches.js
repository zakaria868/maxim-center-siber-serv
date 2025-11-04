import React, { useEffect, useState } from 'react';

const BranchesList = () => {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://maxim-test.courseszone-eg.com/api/branches')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        setBranches(data); // لأن البيانات عبارة عن Array مباشرة
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px', direction: 'rtl', fontFamily: 'Arial' }}>
      <h3>📍 فروعنا</h3>

      {loading && <p>جاري تحميل البيانات...</p>}
      {error && <p style={{ color: 'red' }}>حدث خطأ: {error}</p>}

      {!loading && !error && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {branches.map(branch => (
            <li
              key={branch.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '10px',
                backgroundColor: '#f9f9f9'
              }}
            >
              <h5>🏢 {branch.name}</h5>
              <p>📍 العنوان: {branch.address}</p>
              <p>📞 الهاتف: {branch.phone}</p>
              <p>💬 واتساب: {branch.whatsapp}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BranchesList;
