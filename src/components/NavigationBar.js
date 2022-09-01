import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../Main.css';

const NavigationBar = () => {
  return (
    <div className='NavBar'>
    <Navbar sticky="top" bg="light" expand="md">
      <Container fluid>
        <Navbar.Brand href="#">Teh Cici Halal Mart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '50px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Marketplace</Nav.Link>
            <NavDropdown title="Hubungi Saya" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Official Website HNI HPAI</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                WhatsApp
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Facebook
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Segala Kebutuhan Herbal Ada Disini
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              font-size='5px'
              type="search"
              placeholder="Cari Barang"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Cari</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavigationBar;