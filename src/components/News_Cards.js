import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row, Col, Card} from 'react-bootstrap';
import logo from '../logo.svg';
import News_Data from './News_Data.json';
import './News_Cards.css';

function News_Cards()
{
    return(
        <div className='News'>
                {News_Data.map((data) => (
            <>
        <Row xs={1} md={5} className="g-4">
  {Array.from({ length: 5 }).map((_, idx) => (
    <Col>
      <Card border="primary">
        <>

            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.content}</Card.Text>
              <Card.Text>{data.docs_link}</Card.Text>
              <Card.Text>{data.img_link}</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
            </>

      </Card>
    </Col>
  ))}
</Row> </>
))}
        </div>
    )
}


export default News_Cards;