import { useState, useEffect } from 'react';

/**
 * Custom Hook para gestionar la carga asíncrona de productos desde Fake Store API.
 * Encapsula la llamada a la API, el manejo de errores (incluyendo response.ok) y los estados de carga.
 * 
 * @param {string} url - La URL del endpoint de la API.
 * @returns {{ items: Array, isLoading: boolean, error: string|null }}
 */
export function useProducts(url) {
  // Manejo de estados principales exigidos por la consigna
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchProductos = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Petición a la API externa
        const response = await fetch(url);

        // Verificación explícita de response.ok para capturar errores HTTP (404/500)
        if (!response.ok) {
          throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
        }

        // Conversión asíncrona de la respuesta a JSON
        const data = await response.json();

        // Obras cumbres de la literatura universal (Titulos adaptados)
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

        // Descripciones resumidas y concisas en español
        const descripcionesBreves = [
          'Aventuras del hidalgo Don Quijote y su fiel escudero Sancho Panza.',
          'Viaje alegórico a través del Infierno, el Purgatorio y el Paraíso.',
          'Dilemas morales y búsqueda de redención de Rodión Raskólnikov.',
          'La convulsa travesía de Odiseo en su regreso a la isla de Ítaca.',
          'Relaciones, costumbres y prejuicios en la Inglaterra del siglo XIX.',
          'La historia de la familia Buendía a lo largo de siete generaciones.',
          'Tragedia sobre la traición, la locura y la venganza en Dinamarca.',
          'Reflexión sobre la memoria, el tiempo y los recuerdos del pasado.',
          'Relatos árabes tradicionales narrados por la astuta Scheherezade.',
          'Un hombre mantiene la juventud mientras su retrato envejece.',
          'La lucha por la justicia y la redención en la Francia del siglo XIX.',
          'La insatisfacción de Emma Bovary frente a la vida burguesa.',
          'La decadencia del sueño americano en los prósperos años veinte.',
          'Gregorio Samsa despierta una mañana transformado en un insecto.',
          'Futuro distópico bajo la constante vigilancia del Gran Hermano.',
          'Fábula filosófica sobre la amistad, el amor y la naturaleza humana.',
          'La obsesiva búsqueda del capitán Ahab tras la gran ballena blanca.',
          'Poema épico sobre la furia de Aquiles y la mítica Guerra de Troya.',
          'Relato de la sociedad rusa durante las guerras napoleónicas.',
          'Tragedia sobre el pacto de un sabio con el diablo por conocimiento.'
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

        // Mapeo dinámico combinando los datos de la API con los textos adaptados
        const librosAdaptados = data.map((item, index) => {
          const precioARS = Math.round(item.price * TIPO_CAMBIO_ARS);

          return {
            id: String(item.id),
            name: clasicosUniversales[index] || `Clásico Universal Vol. ${item.id}`,
            price: precioARS,
            category: 'Obras Clásicas',
            img: portadasClasicas[index % portadasClasicas.length],
            description: descripcionesBreves[index] || 'Edición especial de literatura universal.',
            stock: 10
          };
        });

        setItems(librosAdaptados);
      } catch (err) {
        // Captura de errores de red o devueltos por throw new Error
        setError(err.message || 'Ocurrió un error al obtener el catálogo de clásicos');
      } finally {
        // Garantiza que la pantalla de carga se remueva tanto si sale bien como si falla
        setIsLoading(false);
      }
    };

    fetchProductos();
  }, [url]);

  // Retorno explícito de los tres estados solicitados por el ejercicio
  return { items, isLoading, error };
}

export default useProducts;