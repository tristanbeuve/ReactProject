
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

function Panier(products) {
  
  return (
    <Container>
            {products.length === 0 && <div>Chargement en cours... <Spinner animation="grow" variant="dark" /></div>} 
                {products.map(product => (
                  <CardProduct key={product.id} product={product} addToCart={addToCart} width="22"/>
                ))}
        </Container>
  );
}

export default Panier;