import Container from 'react-bootstrap/Container';
import CarsList from '../../Common/carList'
import NavCategories from '../../Components/Categories/NavCategories'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCars2, getCategories2 } from '../../Services'


function CardArchive() {  
    const { id } = useParams()
    const [categories, setCategories] = useState([])
    const [inventory, setInventory] = useState([])

    useEffect(() =>{
        getCars2(id).then((data) => {
            setInventory(data)
            console.log(inventory)
        })

    },[id])

    useEffect(() =>{
        getCategories2().then((data) => {
            setCategories(data)
        })

    },[])
    
    return (
    <Container>
        <NavCategories categories={categories}></NavCategories>
        <CarsList inventory={inventory} />
    </Container>
    )
}


export default CardArchive;