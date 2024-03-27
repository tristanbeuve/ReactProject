import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Panier({products, takeOffCart}) {

  const cart = products.filter(product => product.quantityCart > 0);
  
  return (
    <Container>
            {cart.length === 0 && <div>Your cart is empty</div>} 
            <Row>
                {cart.map(product => (
                    <Col>
                      <div className="bg-gray-200 p-4">
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={'http://ecommerce.api.pierre-jehan.com/' + product.image.contentUrl} alt={product.name} />
                            <Card.Body>
                              <Card.Title>{product.name}</Card.Title>
                              <Card.Text>
                              {product.category.name}
                              </Card.Text>
                              <Card.Text>
                                  Quantity : {product.quantityCart}
                                  <br/>
                                  Unit rice : {product.price} €
                                  <br/>
                                  Total price : {Math.round(product.price * product.quantityCart)} € 
                                  <br/>
                                  <span className=''>delivery costs included</span>
                              </Card.Text>
                              <Button variant="danger" onClick={() => takeOffCart(product) }>Remove</Button>
                            </Card.Body>
                          </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
  );
}

export default Panier;