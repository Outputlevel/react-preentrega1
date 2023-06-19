import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/esm/ListGroup';


const CarDetail = ({id, Name, Price, Odometer, Cylinders, Origin, Body_type, Year}) => {
    return (
        <Container>
        <Card>
        <Card.Header>{id}</Card.Header>
        <Card.Body>
          <Card.Title>{Name}</Card.Title>
          <Card.Text>
            Price: {Price}
          </Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Year: {Year}</ListGroup.Item>
            <ListGroup.Item className="capitalize">Body Type: {Body_type}</ListGroup.Item>
            <ListGroup.Item>Odometer: {Odometer} km</ListGroup.Item>
            <ListGroup.Item>Cylinders:{Cylinders}</ListGroup.Item>
            <ListGroup.Item>Country: {Origin}</ListGroup.Item>
        </ListGroup>
          <Button variant="primary">Contact Us!</Button>
        </Card.Body>
      </Card>
      </Container>
    )
}

export {CarDetail}