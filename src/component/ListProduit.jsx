import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default function ListProduit({ products, Cart }){

    return (
        <Container>
            {products.length === 0 && <div>Loading... <Spinner animation="grow" variant="dark" /></div>} 
            <Row xs={1} md={4} className="g-2">
                {products.map(product => (
                    <Col key={product.id}>
                      <div className="bg-gray-200 p-4">
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={'http://ecommerce.api.pierre-jehan.com/' + product.image.contentUrl} alt={product.name} />
                            <Card.Body>
                              <Card.Title>{product.name}</Card.Title>
                              <Card.Text>
                              {product.category.name} / {product.price} €
                              </Card.Text>
                              <Card.Text>
                              Remaining stocks : {product.quantity}
                              </Card.Text>
                              <Button variant="primary" onClick={() => Cart(product) }>Add to cart</Button>
                            </Card.Body>
                          </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}