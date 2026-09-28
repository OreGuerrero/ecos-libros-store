import { useState, useEffect } from 'react';
import { getProducts } from '../services/catalog';

export function useProducts(category) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isActive = true;

    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const products = await getProducts(category);
        if (isActive) setItems(products);
      } catch (err) {
        if (isActive) {
          setError(err.message || 'Ocurrió un error al obtener el catálogo de clásicos');
        }
      } finally {
        if (isActive) setIsLoading(false);
      }
    };

    fetchProducts();
    return () => {
      isActive = false;
    };
  }, [category]);

  return { items, isLoading, error };
}

export default useProducts;