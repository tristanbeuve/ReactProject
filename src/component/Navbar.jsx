import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Panier from './Panier';

function BarNav({changeCurrentPage, products, takeOffCart, addtoCart}) {

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
            <Nav.Link  onClick={() => changeCurrentPage('store')}>Store</Nav.Link>
          </Nav>
          <Button onClick={handleShow}>Cart</Button>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
        <Offcanvas.Body>
            <Panier products={products} takeOffCart={takeOffCart} addtoCart={addtoCart}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default BarNav;