import NavDropdown from 'react-bootstrap/NavDropdown';
import Categories from '../../categories.json'

function NavCategories(){
    function selectFilter (e) {
        console.log(e.target.innerHTML)
    }
    return (
        Categories.map(category => {
            return(
                <NavDropdown.Item href="#action-3"  className="capitalize categoryList" onClick={selectFilter}>{category.name}</NavDropdown.Item>
            )
        })
    )
}

export default NavCategories;