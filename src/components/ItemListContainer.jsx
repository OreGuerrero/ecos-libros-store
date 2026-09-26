import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { useProducts } from '../hooks/useProducts';

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();

  const { items, isLoading, error } = useProducts();

  const categoriaMap = {
    'obras-clasicas': 'Obras Clásicas',
    'historia-y-arqueologia': 'Historia y Arqueología'
  };

  const categoria = categoriaMap[categoryId];
  const productosFiltrados = categoryId
    ? items.filter((product) => product.category === categoria)
    : items;

  const tituloPagina = categoryId
    ? `Categoría: ${categoria || categoryId.replace(/-/g, ' ')}`
    : greeting;

  if (isLoading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>{tituloPagina}</h2>
      <ItemList products={productosFiltrados} />
    </div>
  );
}

export default ItemListContainer;