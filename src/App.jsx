import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Item from './components/Item';
import './App.css';

// Vista Inicio: incluye el libro destacado y la bienvenida general
function Home() {
  const libroEjemplo = {
    id: 'destacado-1',
    name: 'El Popol Vuh',
    category: 'Tradición Maya / Mitología',
    price: 18500,
    img: '/popol.jpg',
    description: 'Texto sagrado maya que narra la creación del mundo y la historia de los dioses gemelos.',
    stock: 5
  };

  return (
    <main style={{ textAlign: 'center', padding: '2rem 1rem' }}>
      <section className="catalog" style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: '#1d3557', fontSize: '1.4rem', marginBottom: '1rem' }}>
          Destacado de la Semana
        </h2>
        <div style={{ maxWidth: '320px', width: '100%' }}>
          <Item product={libroEjemplo} />
        </div>
      </section>

      <hr style={{ margin: '2rem auto', maxWidth: '1200px', borderColor: '#e0e0e0' }} />

      <ItemListContainer greeting="¡Bienvenidos a Ecos Libros Store!" />
    </main>
  );
}

// Vista 404
function NotFound() {
  return (
    <main style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1 style={{ fontSize: '3rem', color: '#e63946' }}>404</h1>
      <h2 style={{ color: '#1d3557' }}>Página no encontrada</h2>
    </main>
  );
}

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', fontFamily: 'sans-serif' }}>
      <Navbar />

      <Routes>
        {/* Ruta principal (Muestra Inicio + Destacado) */}
        <Route path="/" element={<Home />} />

        {/* Ruta por Categoría (Muestra el catálogo filtrado) */}
        <Route 
          path="/category/:categoryId" 
          element={
            <main style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <ItemListContainer greeting="Catálogo por Categoría" />
            </main>
          } 
        />

        {/* Ruta Detalle por ID (Reservado para cuando conectemos useParams) */}
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

        {/* Ruta 404 para direcciones inexistentes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;