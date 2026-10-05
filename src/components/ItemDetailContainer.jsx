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
          const message = err.message?.startsWith('No se encontró')
            ? err.message
            : 'No pudimos cargar el libro. Intenta de nuevo.';
          setResult({ id, product: null, error: message });
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
      <p className="catalog-status" role="status">Cargando detalle del libro...</p>
    );
  }

  if (error) {
    return (
      <div className="catalog-status catalog-error" role="alert">
        <h2>¡Error!</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="item-detail-view">
      {product && <ItemDetail product={product} />}
    </div>
  );
}

export default ItemDetailContainer;