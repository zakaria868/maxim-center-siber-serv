import React from 'react';

function PrivacyPolicy() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>سياسة الخصوصية</h2>
      <p style={styles.paragraph}>
        نحن ملتزمون بحماية خصوصية عملائنا وضمان أمان بياناتهم الشخصية عند استخدام متجرنا لخدمات بيع واستئجار الفساتين.
        يتم جمع واستخدام المعلومات الشخصية فقط لتحسين تجربة التسوق وتقديم الخدمات المطلوبة بكفاءة.
        تشمل البيانات التي قد نجمعها الاسم ومعلومات التواصل وتفاصيل الطلبات والتفضيلات الشخصية.
        ويتم استخدام هذه المعلومات لمعالجة الطلبات وتخصيص العروض وتحسين خدماتنا.
      </p>
      <p style={styles.paragraph}>
        نضمن أن بياناتك ستبقى سرية ولن يتم مشاركتها مع أي جهة ثالثة إلا بما تقتضيه الضرورة لتقديم الخدمات، مثل معالجة الدفع أو الشحن.
        يتم تخزين بيانات العملاء بأمان باستخدام تقنيات حديثة للحماية من الوصول غير المصرح به.
      </p>
      <p style={styles.paragraph}>
        نلتزم بالامتثال لكافة القوانين المعمول بها بشأن حماية البيانات، ونمنح عملائنا الحق في مراجعة بياناتهم وتحديثها أو طلب حذفها إذا رغبوا بذلك.
        هدفنا هو الحفاظ على خصوصيتك وتقديم تجربة تسوق آمنة ومريحة.
        نحن نستمر في مراجعة سياساتنا بشكل دائم من أجل تحسينها لتقديم أفضل مستوى من الأمان والخدمة.
      </p>
    </div>
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

export default PrivacyPolicy;
