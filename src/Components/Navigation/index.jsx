import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavCategories from '../Categories/NavCategories';
import WishlistWidget from '../whishlist';
import { useState, useEffect, useContext } from 'react';
import { getWishlist } from '../../Services/firebase'
import { WishlistCounterContext } from '../../context/wishlistCounter'

function NavbarMain({categories}) {
  const {wishlistArr} = useContext(WishlistCounterContext)


  {/*const [wishlist, setWishlists] = useState([]) */}
  

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Car Dealer Ric</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '400px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Financing</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavCategories categories={categories}></NavCategories>
              
              {/*<NavDropdown.Item href="#action3" id="sedan" onClick={selectFilter}>{props.category1}</NavDropdown.Item>
              <NavDropdown.Item href="#action3.1">{props.category2}</NavDropdown.Item>
              <NavDropdown.Item href="#action3.2">{props.category3}</NavDropdown.Item>
              <NavDropdown.Item href="#action3.3">{props.category4}</NavDropdown.Item>*/} 
              {/*<NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>*/}
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Contact Us
            </Nav.Link>
          </Nav>
          {/*<WishlistWidget wishlist={wishlist} /> */}
          <WishlistWidget counter={wishlistArr}/>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;


