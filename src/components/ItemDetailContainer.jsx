import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../mock/asyncMock';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);
    setError(null);

    getProductById(id)
      .then((response) => {
        setProduct(response);
      })
      .catch((err) => {
        setError(err.message || 'No se pudo cargar el producto');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h3 style={{ color: '#1d3557' }}>Cargando detalle del libro...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: '#e63946' }}>
        <h2>¡Error!</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      {product && <ItemDetail product={product} />}
    </main>
  );
}

export default ItemDetailContainer;