import { useEffect, useState } from "react";
import './App.css'
import BarNav from './component/Navbar'
import About from './component/pages/About'
import Store from './component/pages/Store'
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

  function takeOffCart(product) {
    const newProducts = [...products];
    const updatedProduct = products.find(p => p.id === product.id);
    if (updatedProduct.quantityCart != 0) {
      updatedProduct.quantity++;
      updatedProduct.quantityCart--;
      setProducts(newProducts);
    }
  }

  let page = null;
  switch (currentPage) {
    case 'store':
      page = <Store products={products} Cart={Cart} />
      history.pushState({ page: 'store'},'','/store')
      break;
    case 'about':
      page = <About />
      history.pushState({ page: 'about' }, '', '/about');
      break;
    default:
      page = <Homepage changeCurrentPage={p => setCurrentPage(p)}/>
      history.pushState({ page: 'home' }, '', '/');
      break;
  }

  return (
    <>
      <BarNav changeCurrentPage={p => setCurrentPage(p)} products={products} takeOffCart={takeOffCart}/>
      <main className='md:container md:mx-auto'>
        {page}
      </main>
    </>
  )
}

export default App
