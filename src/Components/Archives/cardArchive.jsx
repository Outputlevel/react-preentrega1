import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Database from "../../data.json";


function CardArchive() {   
  return (
    
    Database.map( car => {
        const cylindersString = (string) => {
            if(car.Cylinders > 4){
            return "V"
            } else {
                return "I"
            }

        }
        return (
            <div className="col-12 col-md-6 col-lg-4 col-xxl-3">        
                <Card className="mt-4" >
                <Card.Img variant="top" src="imgs/comingSoon.png" />
                <Card.Body>
                    <Card.Title className="uppercase">{car.Name}</Card.Title>
                    <Card.Text>
                    This is the price: {car.Price}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Year: {car.Year}</ListGroup.Item>
                    <ListGroup.Item className="capitalize">Body Type: {car.Body_type}</ListGroup.Item>
                    <ListGroup.Item>Odometer: {car.Odometer} km</ListGroup.Item>
                    <ListGroup.Item>Cylinders: {cylindersString}{car.Cylinders}</ListGroup.Item>
                    <ListGroup.Item>Country: {car.Origin}</ListGroup.Item>
                </ListGroup>
                <Card.Body className="d-flex">
                    <Button variant="primary">Learn More</Button>
                </Card.Body>
                </Card>
            </div>
        )
        })
  );
}

export default CardArchive;