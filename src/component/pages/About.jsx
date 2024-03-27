import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function About(){
    

    return (
        <section>
            <div className="container mt-4">
      <div className="jumbotron">
           <h1 className="display-4">About us</h1>
           <Container className="mt-5">
      <Row>
        <Col>
          <h2 className="mb-4">About Our Company</h2>
          <p>We are a company passionate about technology and online commerce. Our goal is to provide our customers with an exceptional shopping experience by offering high-quality products and top-notch customer service.</p>
          <p>We firmly believe in ease of use, which is why we strive to make our site user-friendly and accessible to all users.</p>
          <p>Our team consists of talented developers and e-commerce enthusiasts, all dedicated to making your shopping experience a memorable one.</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2>Our Team</h2>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="././public/john.png" />
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>
                Full Stack Developer
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="././public/jane.jpeg" />
            <Card.Body>
              <Card.Title>Jane Smith</Card.Title>
              <Card.Text>
                Marketing Manager
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="././public/micheal.jpeg" />
            <Card.Body>
              <Card.Title>Michael Johnson</Card.Title>
              <Card.Text>
                User Experience Specialist
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
</div>
</div>
        </section>
    )
}