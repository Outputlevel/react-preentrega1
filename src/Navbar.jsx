import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarTest(props) {
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
              <NavDropdown.Item href="#action3">{props.category1}</NavDropdown.Item>
              <NavDropdown.Item href="#action3.1">{props.category2}</NavDropdown.Item>
              <NavDropdown.Item href="#action3.2">{props.category3}</NavDropdown.Item>
              <NavDropdown.Item href="#action3.3">{props.category4}</NavDropdown.Item>
              {/*<NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
  </NavDropdown.Item>*/}
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Contact Us
            </Nav.Link>
          </Nav>
          <div style={{cursor: 'pointer'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path></svg>
          <span className='cart-icon-number'>1</span>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTest;


