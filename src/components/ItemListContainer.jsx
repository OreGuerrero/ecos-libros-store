import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { useProducts } from '../hooks/useProducts';

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();

  const { items, isLoading, error } = useProducts('https://fakestoreapi.com/products');

  const categoriaMap = {
    'obras-clasicas': ['Obras Clásicas', 'Novela Clásica'],
    'historia-y-arqueologia': ['Historia y Arqueología', 'Novela Histórica'],
    'filosofia-antigua': ['Filosofía Antigua', 'Ficción Existencial'],
    'ediciones-ilustradas': ['Ediciones Ilustradas', 'Poesía Épica']
  };

  const productosFiltrados = categoryId
    ? items.filter((prod) => {
        const categoriaProducto = (prod.category || '').toLowerCase();
        const categoriasPermitidas = (categoriaMap[categoryId] || []).map((categoria) =>
          categoria.toLowerCase()
        );

        return categoriasPermitidas.some((categoria) =>
          categoriaProducto.includes(categoria) || categoriaProducto === categoria
        );
      })
    : items;

  const tituloPagina = categoryId
    ? `Categoría: ${
        (categoriaMap[categoryId] || [categoryId.replace(/-/g, ' ')])[0]
          .replace(/(^\w|\s\w)/g, (match) => match.toUpperCase())
      }`
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