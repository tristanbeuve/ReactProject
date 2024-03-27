import CardProduct from "./CardProduct";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default function ListProduit({ products, Cart }){

    return (
        <Container>
            {products.length === 0 && <div>Chargement en cours... <Spinner animation="grow" variant="dark" /></div>} 
            <Row xs={1} md={4} className="g-2">
                {products.map(product => (
                    <CardProduct key={product.id} product={product} addToCart={Cart} width='18' />
                ))}
            </Row>
        </Container>
    )
}