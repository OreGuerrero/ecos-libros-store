import ItemList from './ItemList';
import { useProducts } from '../hooks/useProducts';

function ItemListContainer({ greeting }) {
  // Desestructuración directa de la API unificada del Custom Hook
  const { items, isLoading, error } = useProducts('https://fakestoreapi.com/products');

  // 1. Estado de Carga (Loading)
  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h3 style={{ color: '#1d3557', fontSize: '1.4rem' }}>
          Cargando catálogo con Custom Hook...
        </h3>
      </div>
    );
  }

  // 2. Estado de Error
  if (error) {
    return (
      <div
        style={{
          textAlign: 'center',
          margin: '2rem auto',
          padding: '1.5rem',
          maxWidth: '500px',
          backgroundColor: '#ffe6e6',
          border: '1px solid #ff4d4d',
          borderRadius: '8px',
          color: '#d90429'
        }}
      >
        <h2 style={{ margin: '0 0 0.5rem 0' }}>¡Atención!</h2>
        <p style={{ margin: 0 }}>{String(error)}</p>
      </div>
    );
  }

  // 3. Renderizado Principal de la Lista
  return (
    <main
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1rem',
        boxSizing: 'border-box'
      }}
    >
      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1
          style={{
            fontSize: '2.2rem',
            color: '#1d3557',
            marginBottom: '0.5rem',
            fontWeight: '700'
          }}
        >
          {greeting}
        </h1>
        <h2
          style={{
            fontSize: '1.3rem',
            color: '#457b9d',
            marginTop: '0',
            fontWeight: '500'
          }}
        >
          Ecos Libros Store - Catálogo
        </h2>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Libros disponibles: <strong>{items.length}</strong>
        </p>
      </header>

      <ItemList products={items} />
    </main>
  );
}

export default ItemListContainer;