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
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Ecos Libros - Tienda Online</h1>
      <p>Bienvenido a nuestra librería. Próximamente catálogo de libros y literatura.</p>
      
      {/* Sección con la tarjeta individual del libro */}
      <section className="catalog">
        <Item 
          titulo={libroEjemplo.titulo}
          autor={libroEjemplo.autor}
          precio={libroEjemplo.precio}
          imagen={libroEjemplo.imagen}
        />
      </section>

      <hr style={{ margin: '2rem 0', borderColor: '#ccc' }} />

      {/* Componente contenedor con la lógica asíncrona de useEffect */}
      <ItemListContainer />
    </main>
  )
}

export default App