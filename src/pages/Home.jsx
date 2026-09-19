import { Link } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import Item from '../components/Item';

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

export default Home;