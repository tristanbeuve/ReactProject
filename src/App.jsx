import { useEffect, useState } from "react";
import './App.css'
import BarNav from './component/Navbar'
import Homepage from './component/pages/Homepage'


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [products, setProducts] = useState([]); // Crée une variable d'état vide pour stocker la liste des biens immobiliers
  
  useEffect(() => {
    fetch('http://ecommerce.api.pierre-jehan.com/products')
    .then(response => response.json()) // Transforme la réponse en objet JavaScript
    .then(data => setProducts(data['hydra:member'].map(p => ({ ...p, quantityCart: 0 })))); // Stocke les données dans le state
}, []);

  function Cart(product) {
    const newProducts = [...products];
    const updatedProduct = products.find(p => p.id === product.id);
    if (updatedProduct.quantity != 0) {
      updatedProduct.quantity--;
      updatedProduct.quantityCart++;
      setProducts(newProducts);
    }
  }

  let page = null;
  switch (currentPage) {
    case 'features':
      page = <Homepage />
      history.pushState({ page: 'features'},'','/features')
      break;
      case 'cart':
      page = <Homepage />
      history.pushState({ page: 'cart'},'','/cart')
      break;
    case 'about':
      page = <Homepage />
      history.pushState({ page: 'about' }, '', '/about');
      break;
    default:
      page = <Homepage products={products} Cart={Cart} />
      history.pushState({ page: 'home' }, '', '/');
      break;
  }

  return (
    <>
      <BarNav changeCurrentPage={p => setCurrentPage(p)} products={products}/>
      <main className='md:container md:mx-auto'>
        {page}
      </main>
    </>
  )
}

export default App
