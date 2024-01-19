import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'
function NavScroll() {
  return (
    <Navbar expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand href="#" className='n1'><b>Pharma</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Nav.Link> <Link to= '/home' className='l6'>Home</Link></Nav.Link>
         
            <Nav.Link> <Link to= '/pharm' className='l6'>Medicines</Link></Nav.Link>
            <Nav.Link> <Link to= '/about' className='l6'>About</Link></Nav.Link>
            <NavDropdown title="Account"  className='l6'>
              <NavDropdown.Item> <Link to= '/register' className='link3'>Sign Up</Link></NavDropdown.Item>
              <NavDropdown.Item >
              <Link to= '/login' className='link3'>Sign In</Link>
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
            <Button  className='btn3'><Link to="/signout" className='l4'>Sign Out</Link></Button>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;