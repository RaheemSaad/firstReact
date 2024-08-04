import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink ,Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-[#2C3E50] p-4">
      <Container>
        <Link to={'/'}  className=' text-white fs-2 fw-bold'>START FRAMEWORK</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to={'/about'} className=' text-white fs-5 fw-bold mx-2 p-2'>About</NavLink>
            <NavLink to={'/portfolio'} className=' text-white fs-5 fw-bold mx-2 p-2'>Portfolio</NavLink>
            <NavLink to={'/contact'} className=' text-white fs-5 fw-bold mx-2 p-2'>Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;