import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function CardProduct({ product, Cart, width }) {



    return (
        <>
        <Col>
          <div className="bg-gray-200 p-4">
            <Card style={{ width: {width}+"rem" }}>
                <Card.Img variant="top" src={'http://ecommerce.api.pierre-jehan.com/' + product.image.contentUrl} alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                  {product.category.name} / {product.price} €
                  </Card.Text>
                  <Card.Text>
                      Stocks restant : {product.quantity}
                  </Card.Text>
                  <Button variant="primary" onClick={() => Cart(product) }>Ajouter au panier</Button>
                </Card.Body>
              </Card>
            </div>
        </Col>
        </>
    );
}