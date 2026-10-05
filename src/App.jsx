import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth';
import Checkout from './pages/Checkout';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Auth mode="login" />} />
          <Route path="/register" element={<Auth mode="register" />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/productos" element={<section className="route-content"><ItemListContainer greeting="Catálogo general" /></section>} />
          <Route path="/category/:categoryId" element={<section className="route-content"><ItemListContainer greeting="Catálogo por categoría" /></section>} />
          <Route path="/item/:id" element={<section className="route-content"><ItemDetailContainer /></section>} />
          <Route path="/detalle" element={<section className="route-content"><p>Próximamente, más formas de explorar el catálogo.</p></section>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <Link className="footer-brand" to="/">Ecos Libros Store</Link>
          <p>Un espacio para encontrar tu próxima lectura.</p>
          <span>© 2026 Ecos Libros Store</span>
        </div>
      </footer>
    </div>
  );
}

export default App;