import Navbar from './components/Navbar'
import Item from './components/Item'
import ItemListContainer from './components/ItemListContainer'
import './App.css'

function App() {
  // Mantenemos el Popol Vuh pero con la estructura de propiedades del catálogo
  const libroEjemplo = {
    id: 'destacado-1',
    name: 'El Popol Vuh',
    category: 'Tradición Maya / Mitología',
    price: 18500,
    img: '/popol.jpg', // Requiere tener el archivo en la carpeta public/popol.jpg
    description: 'Texto sagrado maya que narra la creación del mundo y la historia de los dioses gemelos.',
    stock: 5
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
      {/* 1. Navbar con el logo, categorías reales y el CartWidget */}
      <Navbar />

      <main style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        {/* Sección destacada con la tarjeta individual previa */}
        <section className="catalog" style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ color: '#1d3557', fontSize: '1.2rem', marginBottom: '1rem' }}>
            Destacado de la Semana
          </h2>

          <div style={{ maxWidth: '320px', width: '100%' }}>
            {/* Pasamos el objeto completo a la prop product */}
            <Item product={libroEjemplo} />
          </div>
        </section>

        <hr style={{ margin: '2rem auto', maxWidth: '1200px', borderColor: '#e0e0e0' }} />

        {/* 2. ItemListContainer con la prop greeting integrada */}
        <ItemListContainer greeting="¡Bienvenidos a Ecos Libros Store!" />
      </main>
    </div>
  )
}

export default App