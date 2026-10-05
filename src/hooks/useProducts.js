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
          const message = err.message?.startsWith('Firebase no está configurado.')
            ? 'Firebase no está configurado. Revisa las variables de entorno.'
            : 'No pudimos cargar los libros. Intenta de nuevo.';
          setError(message);
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