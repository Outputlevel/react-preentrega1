import { useEffect, useState } from "react";
import { CarDetail } from "../../Common/itemDetail";
import { useParams } from "react-router-dom"
import { getCar } from "../../Services";

const CarDetailContainer = () => {
    const {id} = useParams()
    const [car, setCar] = useState([])

    useEffect(()=> {
        getCar(id).then((data) => {
            setCar(data)
        })
    },[])


    return (
        <CarDetail id={car.id} Name={car.Name} Price={car.Price} Odometer={car.Odometer} Cylinders={car.Cylinders} Origin={car.Origin} Body_type={car.Body_type} Year={car.Year}/>

    )
}

export default CarDetailContainer