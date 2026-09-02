import Navbar from './components/Navbar'
import Item from './components/Item'
import ItemListContainer from './components/ItemListContainer'
import './App.css'

function App() {
  const libroEjemplo = {
    titulo: "El Popol Vuh",
    autor: "Anónimo / Tradición Maya",
    precio: 18500,
    imagen: "/popol.jpg"
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
      {/* 1. Navbar con el logo, categorías reales y el CartWidget */}
      <Navbar />

      <main style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        {/* Sección destacada con la tarjeta individual previa */}
        <section className="catalog" style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#1d3557', fontSize: '1.2rem', marginBottom: '1rem' }}>
            Destacado de la Semana
          </h2>
          <Item 
            titulo={libroEjemplo.titulo}
            autor={libroEjemplo.autor}
            precio={libroEjemplo.precio}
            imagen={libroEjemplo.imagen}
          />
        </section>

        <hr style={{ margin: '2rem auto', maxWidth: '1200px', borderColor: '#e0e0e0' }} />

        {/* 2. ItemListContainer con la prop greeting integrada */}
        <ItemListContainer greeting="¡Bienvenidos a Ecos Libros Store!" />
      </main>
    </div>
  )
}

export default App