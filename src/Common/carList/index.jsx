
import { useParams, useNavigate } from 'react-router-dom';
import CarSingle from '../carSingle';
import { onClickWishlist } from '../../Services/firebase';

const CarList = ({ inventory, addWishlist } ) => {

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
                onClickBtn={addWishlist}
                btnText={"Add to Wishlist"}
                disabled={"hello"}

            />

        )
        )
    }
    </div>
    )
}

export default CarList