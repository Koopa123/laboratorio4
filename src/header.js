import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Message from './message'


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        
      <Container fluid>
        <Navbar.Brand href="#"><i data-feather = "home"></i>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">NBA</Nav.Link> 
            <Nav.Link href="#action2">NFL</Nav.Link>

            <NavDropdown title="Siluetas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">9forty</NavDropdown.Item>
              <NavDropdown.Item href="#action4">59fifty</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;