import { useState, useEffect } from 'react';
import ItemList from './ItemList';

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductosAPI = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
          throw new Error(`Error en el servidor: HTTP Status ${response.status}`);
        }

        const data = await response.json();

        const TIPO_CAMBIO_ARS = 1200;

        // 1. Títulos en español
        const titulosClasicos = [
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

        // 2. Descripciones completas en español
        const descripcionesClasicas = [
          'Sátira monumental sobre las novelas de caballería que narra las aventuras e ideales del hidalgo Don Quijote y su fiel escudero Sancho Panza.',
          'Poema épico alegórico que recorre el viaje de Dante a través del Infierno, el Purgatorio y el Paraíso en busca de su amada Beatriz.',
          'Novela psicológica que explora los dilemas morales, la culpa y la búsqueda de redención del joven estudiante Rodión Raskólnikov.',
          'Poema épico atribuido a Homero que relata la convulsa travesía de Odiseo en su regreso a la isla de Ítaca tras la Guerra de Troya.',
          'Obra maestra de las costumbres y los prejuicios sociales en la Inglaterra del siglo XIX a través de la relación entre Elizabeth Bennet y el Sr. Darcy.',
          'La saga familiar de los Buendía en el pueblo mítico de Macondo, obra cumbre del realismo mágico hispanoamericano.',
          'Tragedia shakesperiana centrada en las dudas, el dolor y la sed de venganza del príncipe de Dinamarca tras la muerte de su padre.',
          'Obra monumental sobre la memoria, el tiempo, el arte y la sociedad francesa de la Belle Époque.',
          'Famosa recopilación medieval de cuentos orientales narrados por la astuta Scheherezade para salvar su vida.',
          'Novela filosófica sobre un joven que conserva la juventud eterna mientras su retrato oculta las huellas de su decadencia moral.'
        ];

        // 3. Portadas temáticas de libros
        const portadasLibros = [
          'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=60',
          'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop&q=60',
          'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop&q=60',
          'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&auto=format&fit=crop&q=60',
          'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&auto=format&fit=crop&q=60',
          'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=60'
        ];

        // Adaptación completa en español
        const productosAdaptados = data.map((producto, index) => ({
          id: String(producto.id),
          name: titulosClasicos[index] || `Obra Clásica Vol. ${producto.id}`,
          price: Math.round(producto.price * TIPO_CAMBIO_ARS),
          img: portadasLibros[index % portadasLibros.length],
          category: 'Obras Clásicas',
          description: descripcionesClasicas[index % descripcionesClasicas.length], // Descripciones en español
          stock: 10
        }));

        setItems(productosAdaptados);
      } catch (err) {
        setError(err.message || 'No se pudo conectar con la API de productos');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductosAPI();
  }, []);

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h3 style={{ color: '#1d3557', fontSize: '1.4rem' }}>Cargando catálogo de libros...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        textAlign: 'center', 
        margin: '2rem auto', 
        padding: '1.5rem', 
        maxWidth: '500px',
        backgroundColor: '#ffe6e6', 
        border: '1px solid #ff4d4d', 
        borderRadius: '8px',
        color: '#d90429' 
      }}>
        <h2 style={{ margin: '0 0 0.5rem 0' }}>¡Atención!</h2>
        <p style={{ margin: 0 }}>{error}</p>
      </div>
    );
  }

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem', boxSizing: 'border-box' }}>
      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.2rem', color: '#1d3557', marginBottom: '0.5rem', fontWeight: '700' }}>
          {greeting}
        </h1>
        <h2 style={{ fontSize: '1.3rem', color: '#457b9d', marginTop: '0', fontWeight: '500' }}>
          Ecos Libros Store - Catálogo
        </h2>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Libros disponibles: <strong>{items.length}</strong>
        </p>
      </header>

      <ItemList products={items} />
    </main>
  );
}

export default ItemListContainer;