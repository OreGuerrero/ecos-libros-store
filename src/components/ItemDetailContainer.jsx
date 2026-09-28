import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/getProductById';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { id } = useParams();
  const [result, setResult] = useState({ id: null, product: null, error: null });
  const isLoading = result.id !== id;
  const product = isLoading ? null : result.product;
  const error = isLoading ? null : result.error;

  useEffect(() => {
    let isActive = true;

    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);
        if (isActive) setResult({ id, product: response, error: null });
      } catch (err) {
        if (isActive) {
          setResult({ id, product: null, error: err.message || 'No se pudo cargar el producto' });
        }
      }
    };

    fetchProduct();
    return () => {
      isActive = false;
    };
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