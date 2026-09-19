import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', fontFamily: 'sans-serif' }}>
      <Navbar />

      <Routes>
        {/* Ruta Inicio */}
        <Route path="/" element={<Home />} />

        {/* Ruta Catálogo Completo (Resuelve el enlace CTA de la Home) */}
        <Route 
          path="/productos" 
          element={
            <main style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <ItemListContainer greeting="Catálogo General de Productos" />
            </main>
          } 
        />

        {/* Ruta por Categoría */}
        <Route 
          path="/category/:categoryId" 
          element={
            <main style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <ItemListContainer greeting="Catálogo por Categoría" />
            </main>
          } 
        />

        {/* Ruta Detalle por ID */}
        <Route 
          path="/item/:id" 
          element={
            <main style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <ItemDetailContainer />
            </main>
          } 
        />

        {/* Espacio reservado para la vista previa de detalle */}
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

        {/* Ruta Comodín 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;