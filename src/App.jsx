import { useEffect, useState, useRef } from "react";
import './App.css'
import BarNav from './component/Navbar'
import About from './component/pages/About'
import Store from './component/pages/Store'
import Homepage from './component/pages/Homepage'
import Footer from "./component/Footer";


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [products, setProducts] = useState([]); // Crée une variable d'état vide pour stocker la liste des biens immobiliers



  
  useEffect(() => {
    fetch('http://ecommerce.api.pierre-jehan.com/products')
      .then(response => response.json()) // Transform the response into a JavaScript object
      .then(data => {
        const savedCart = JSON.parse(localStorage.getItem('cart')); // Load from local storage
        if (savedCart) {
          setProducts(savedCart);
        } else {
          setProducts(data['hydra:member'].map(p => ({ ...p, quantityCart: 0 })));
        }
      });
  }, []);


function Cart(product) {
  const newProducts = [...products];
  const updatedProduct = products.find(p => p.id === product.id);
  if (updatedProduct.quantity != 0) {
    updatedProduct.quantity--;
    updatedProduct.quantityCart++;
    setProducts(newProducts);
    localStorage.setItem('cart', JSON.stringify(newProducts)); // Save to local storage
  }
}

function takeOffCart(product) {
  const newProducts = [...products];
  const updatedProduct = products.find(p => p.id === product.id);
  if (updatedProduct.quantityCart != 0) {
    updatedProduct.quantity++;
    updatedProduct.quantityCart--;
    setProducts(newProducts);
    localStorage.setItem('cart', JSON.stringify(newProducts)); // Save to local storage
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
      <Footer />
    </>
  )
}

export default App
