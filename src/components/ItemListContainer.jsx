import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { useProducts } from '../hooks/useProducts';

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();

  const categoriaMap = {
    'obras-clasicas': 'Obras Clásicas',
    'historia-y-arqueologia': 'Historia y Arqueología',
    'fantasia-y-aventuras': 'Fantasía y Aventuras',
    'ciencia-ficcion': 'Ciencia Ficción'
  };

  const categoria = categoriaMap[categoryId] || null;
  const { items, isLoading, error } = useProducts(categoria);

  const tituloPagina = categoryId
    ? `Categoría: ${categoria || categoryId.replace(/-/g, ' ')}`
    : greeting;

  if (isLoading) {
    return <p className="catalog-status" role="status">Cargando productos...</p>;
  }

  if (error) {
    return <p className="catalog-status catalog-error" role="alert">Error: {error}</p>;
  }

  return (
    <div className="catalog-section">
      <header className="catalog-heading">
        <p className="catalog-eyebrow">{categoryId ? 'Explora por tema' : 'Para volver a descubrir'}</p>
        <h2>{tituloPagina}</h2>
      </header>
      <ItemList products={items} />
    </div>
  );
}

export default ItemListContainer;