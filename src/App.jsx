import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/cart" element={<Cart />} />

          <Route 
            path="/productos" 
            element={
              <main style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <ItemListContainer greeting="Catálogo General de Productos" />
              </main>
            } 
          />

          <Route 
            path="/category/:categoryId" 
            element={
              <main style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <ItemListContainer greeting="Catálogo por Categoría" />
              </main>
            } 
          />

          <Route 
            path="/item/:id" 
            element={
              <main style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <ItemDetailContainer />
              </main>
            } 
          />

          <Route 
            path="/detalle" 
            element={
              <main style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <p style={{ fontSize: '1.2rem', color: '#1d3557', fontWeight: 'bold' }}>
                  Próximamente vista de detalle del producto
                </p>
              </main>
            } 
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer style={{ backgroundColor: '#1d3557', color: '#fff', textAlign: 'center', padding: '1rem', marginTop: '2rem' }}>
        Ecos Libros Store © 2026
      </footer>
    </div>
  );
}

export default App;