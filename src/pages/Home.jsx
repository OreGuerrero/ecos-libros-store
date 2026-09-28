import ItemListContainer from '../components/ItemListContainer';

function Home() {
  return (
    <main style={{ textAlign: 'center', padding: '2rem 1rem' }}>
      <ItemListContainer greeting="¡Bienvenidos a Ecos Libros Store!" />
    </main>
  );
}

export default Home;