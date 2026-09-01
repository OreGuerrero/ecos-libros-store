import Item from './components/Item'
import './App.css'

function App() {
  const libroEjemplo = {
    titulo: "El Popol Vuh",
    autor: "Anónimo / Tradición Maya",
    precio: 18500,
    imagen: "https://via.placeholder.com/150x220?text=Popol+Vuh"
  }

  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Ecos Libros - Tienda Online</h1>
      <p>Bienvenido a nuestra librería. Próximamente catálogo de libros y literatura.</p>
      
      {/* Mantenemos tu mensaje y agregamos la sección con el libro interactivo */}
      <section className="catalog">
        <Item 
          titulo={libroEjemplo.titulo}
          autor={libroEjemplo.autor}
          precio={libroEjemplo.precio}
          imagen={libroEjemplo.imagen}
        />
      </section>
    </main>
  )
}

export default App