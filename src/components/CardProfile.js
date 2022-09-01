import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

let pp = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQes0uko4K9xTha6B1jyJxZSYmWHCkOAtwYp-sJW2dtZ5-PSqzauYjQ395pt-8qX6rXZAo&usqp=CAU'
let linkFacebook = 'www.facebook.com/example'
let whatsapp = '08123456789'
let bio = 'ini adalah Bio Saya'

const Cardprofile = () => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pp} />
      <Card.Body>
        <Card.Title>Sri Mulyati</Card.Title>
        <Card.Text>
          {bio}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Blabla bla</ListGroup.Item>
        <ListGroup.Item>Blablabla blabla</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="outline-success" href={whatsapp}>WhatsApp</Button>{' '}
        <Button variant="outline-primary" href={linkFacebook}>FaceBook</Button>{' '}
        {/*<Card.Link href="#">Facebook</Card.Link>*/}
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cardprofile;