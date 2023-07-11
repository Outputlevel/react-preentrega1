import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from "react-router-dom";

function NavCategories({categories}){
    
    
    return (
        categories.map(category => {
            return(
                <NavDropdown.Item className="capitalize categoryList" onClick={selectFilter} >
                    <Link to={`/categories/${category.id}`}> {category.catName} </Link>
                </NavDropdown.Item>
            )
            function selectFilter (e) {
                console.log(category.id)
            }
        })
    )
}

export default NavCategories;