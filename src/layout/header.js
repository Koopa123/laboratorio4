import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Message from '../message'
import { Link } from "react-router-dom";

function Header() {
  return ( 
    <Navbar expand="lg" className="secondary">
      
      <Container fluid>
        <img src='https://i.imgur.com/Zc0Z0lP.png' className='koopaEnano'></img>
        <Navbar.Brand href="#"><i data-feather = "home" className='negrita'></i>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='negrita'>NBA</Nav.Link> 
            <Nav.Link href="#action2" className='negrita'>NFL</Nav.Link>

            <NavDropdown className='negrita' title="Siluetas" id="navbarScrollingDropdown">
              <NavDropdown.Item className='negrita' href="#action3">9forty</NavDropdown.Item>
              <NavDropdown.Item className='negrita' href="#action4">59fifty</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;