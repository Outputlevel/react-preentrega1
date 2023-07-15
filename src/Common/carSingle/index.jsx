import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams, useNavigate } from 'react-router-dom';
import BtnWishlist from '../buttons/whishlist';
import {onClickWishlist} from '../../Services/moks'
import Image from '../../imgs/comingSoon.png'
import { WishlistCounterContext } from '../../context/wishlistCounter'
import { useContext } from 'react';




const CarSingle = ({id, Name, Price, Odometer, Cylinders, Origin, Body_type, Year, onClickBtn, btnText, disabled}) => {
    const navigate = useNavigate() 
    const {addWishlist} = useContext(WishlistCounterContext)
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3"> 
            
        <Card key={Name} className="mt-4" >
        { <Card.Img variant="top" src={Image} /> }
        <Card.Body>
            <Card.Title className="uppercase">{Name}</Card.Title>
            <Card.Title>
            This is the price: {Price}
            </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Year: {Year}</ListGroup.Item>
            <ListGroup.Item className="capitalize">Body Type: {Body_type}</ListGroup.Item>
            <ListGroup.Item>Odometer: {Odometer} km</ListGroup.Item>
            <ListGroup.Item>Cylinders:{Cylinders}</ListGroup.Item>
            <ListGroup.Item>Country: {Origin}</ListGroup.Item>
        </ListGroup>
        <Card.Body className="row gap-2 mx-1">
            <Button variant="primary" onClick={() => navigate(`/inventory/${id}`)}>Learn More</Button>
            <Button variant="secondary" onClick={() => addWishlist({ id, Name, Price, Odometer, Cylinders, Origin, Body_type, Year })} >{btnText}</Button>
        </Card.Body>
    </Card> 
    </div>

    )
}

export default CarSingle