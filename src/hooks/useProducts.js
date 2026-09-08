import { useState, useEffect } from 'react';

/**
 * Custom Hook para gestionar la carga asíncrona de productos desde una API.
 * @param {string} url - La URL del endpoint de la API.
 * @returns {{ products: Array, loading: boolean, error: string|null }}
 */
export function useProducts(url) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchProductos = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // Obras cumbres de la literatura universal
        const clasicosUniversales = [
          'Don Quijote de la Mancha - Miguel de Cervantes',
          'La Divina Comedia - Dante Alighieri',
          'Crimen y Castigo - Fiódor Dostoyevski',
          'La Odisea - Homero',
          'Orgullo y Prejuicio - Jane Austen',
          'Cien Años de Soledad - Gabriel García Márquez',
          'Hamlet - William Shakespeare',
          'En Busca del Tiempo Perdido - Marcel Proust',
          'Las Mil y Una Noches - Anónimo',
          'El Retrato de Dorian Gray - Oscar Wilde',
          'Los Miserables - Victor Hugo',
          'Madame Bovary - Gustave Flaubert',
          'El Gran Gatsby - F. Scott Fitzgerald',
          'La Metamorfosis - Franz Kafka',
          '1984 - George Orwell',
          'El Principito - Antoine de Saint-Exupéry',
          'Moby Dick - Herman Melville',
          'La Ilíada - Homero',
          'Guerra y Paz - León Tolstói',
          'Fausto - Johann Wolfgang von Goethe'
        ];

        // Portadas temáticas de libros clásicos
        const portadasClasicas = [
          'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=60',
          'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop&q=60',
          'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop&q=60',
          'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&auto=format&fit=crop&q=60',
          'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&auto=format&fit=crop&q=60',
          'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=60'
        ];

        const TIPO_CAMBIO_ARS = 1200;

        const librosAdaptados = data.map((item, index) => {
          const precioARS = Math.round(item.price * TIPO_CAMBIO_ARS);

          return {
            id: String(item.id),
            name: clasicosUniversales[index] || `Clásico Universal Vol. ${item.id}`,
            price: precioARS,
            category: 'Obras Clásicas',
            img: portadasClasicas[index % portadasClasicas.length],
            description: item.description,
            stock: 10
          };
        });

        setProducts(librosAdaptados);
      } catch (err) {
        setError(err.message || 'Ocurrió un error al obtener el catálogo de clásicos');
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [url]);

  return { products, loading, error };
}

export default useProducts;