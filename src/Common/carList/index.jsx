
import { useParams, useNavigate } from 'react-router-dom';
import CarSingle from '../carSingle';

const CarList = ({ inventory } ) => {

    return (
        <div className="container mx-auto row">
        {
    inventory.map( (car) => 
         (
            <CarSingle 
                id={car.id} 
                Name={car.Name} 
                Year={car.Year} 
                Odometer={car.Odometer}
                Cylinders={car.Cylinders} 
                Body_type = {car.Body_type}
                Origin={car.Origin}
                Price={car.Price}
            />

        )
        )
    }
    </div>
    )
}

export default CarList