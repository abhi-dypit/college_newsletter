import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row, Col, Card} from 'react-bootstrap';
import logo from '../logo.svg';
import './News_Cards.css';

function News_Cards()
{
    return(
        <div className='News'>
        
        <Row xs={1} md={5} className="g-4">
  {Array.from({ length: 5 }).map((_, idx) => (
    <Col>
      <Card border="primary">
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
        </div>
    )
}


export default News_Cards;