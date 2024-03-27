import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Panier from './Panier';

function BarNav({changeCurrentPage, products}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => changeCurrentPage('home')}>E-com</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => changeCurrentPage('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => changeCurrentPage('about')}>About</Nav.Link>
            <Nav.Link  onClick={() => changeCurrentPage('features')}>Features</Nav.Link>
          </Nav>
          <Button onClick={handleShow}>Panier </Button>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
        <Offcanvas.Body>
            <Panier product={products}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default BarNav;