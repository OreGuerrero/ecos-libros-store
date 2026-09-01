import { useState, useEffect } from 'react';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
          throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        const titulosLibros = [
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

        const portadasLibros = [
          'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=60',
          'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop&q=60',
          'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop&q=60',
          'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&auto=format&fit=crop&q=60'
        ];

        const TIPO_CAMBIO_ARS = 1200;

        const librosAdaptados = data.map((item, index) => {
          const precioARS = Math.round(item.price * TIPO_CAMBIO_ARS);

          return {
            id: item.id,
            title: titulosLibros[index] || `Edición Especial Vol. ${item.id}`,
            priceARS: precioARS.toLocaleString('es-AR'),
            image: portadasLibros[index % portadasLibros.length],
            description: item.description
          };
        });

        setItems(librosAdaptados);
      } catch (err) {
        setError(err.message || 'Ocurrió un error al cargar el catálogo de libros');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h2>Cargando catálogo de libros...</h2>
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
        <h2>¡Atención!</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <main style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '2rem 1rem', 
      boxSizing: 'border-box' 
    }}>
      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '2rem', color: '#1a1a1a', marginBottom: '0.5rem' }}>
          Ecos Libros Store - Catálogo
        </h2>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Libros disponibles: <strong>{items.length}</strong>
        </p>
      </header>

      {/* Grid de productos adaptativo */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
        gap: '2rem',
        alignItems: 'stretch'
      }}>
        {items.map(libro => (
          <article 
            key={libro.id} 
            style={{ 
              border: '1px solid #e0e0e0', 
              borderRadius: '10px', 
              padding: '1.2rem', 
              display: 'flex', 
              flexDirection: 'column', 
              justify: 'space-between',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
          >
            <div>
              <div style={{ 
                width: '100%', 
                height: '240px', 
                borderRadius: '6px', 
                overflow: 'hidden', 
                backgroundColor: '#f8f9fa',
                marginBottom: '1rem'
              }}>
                <img 
                  src={libro.image} 
                  alt={libro.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
              </div>
              <h3 style={{ 
                fontSize: '1.05rem', 
                lineHeight: '1.4', 
                margin: '0 0 0.8rem 0', 
                color: '#222',
                fontWeight: '600'
              }}>
                {libro.title}
              </h3>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '0.8rem', borderTop: '1px solid #f0f0f0' }}>
              <p style={{ 
                fontWeight: '700', 
                color: '#1d3557', 
                fontSize: '1.2rem',
                margin: '0 0 1rem 0'
              }}>
                $ {libro.priceARS} ARS
              </p>
              <button style={{
                width: '100%',
                padding: '0.6rem 1rem',
                backgroundColor: '#1d3557',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Ver detalle
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default ItemListContainer;