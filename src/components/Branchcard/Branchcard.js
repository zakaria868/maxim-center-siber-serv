import Card from 'react-bootstrap/Card';
import iconlocation from '../../assets/images/iconlocation.png';
import './Branchcard.css';
function BgColorExample() {
  return (
  <Card
  bg="light"
  text="dark"
  style={{ width: '100%', maxWidth: '800px', margin: 'auto' }}
  className="mb-2 "
  dir="rtl"
>

      <Card.Header className="text-center">فرع الرياض</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>  {/* ← هنا بدّل Light بالنص اللي تريده */}
        <Card.Text className="text-muted">
          <img className='layout-iconlocation' src={iconlocation}/> 9 شارع المحمدى - حى العتيبى - الرياض - السعودية
        </Card.Text>
        <Card.Text className="text-muted">
          <img className='layout-iconlocation' src={iconlocation}/> +966 123 456 789
        </Card.Text>
        <Card.Text className="text-muted">
          <img className='layout-iconlocation' src={iconlocation}/> +966 123 456 789
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BgColorExample;
