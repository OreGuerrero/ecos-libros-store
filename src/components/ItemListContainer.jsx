import ItemList from './ItemList';
import { useProducts } from '../hooks/useProducts'; // <-- Se agregan llaves { }

function ItemListContainer({ greeting }) {
  // Consumo directo del hook
  const res = useProducts('https://fakestoreapi.com/products');

  const products = res?.products || res?.data || res?.items || [];
  const loading = res?.loading ?? res?.isLoading ?? false;
  const error = res?.error || null;

  // Constantes de mapeo
  const TIPO_CAMBIO_ARS = 1200;

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
    'El Retrato de Dorian Gray - Oscar Wilde'
  ];

  const descripcionesClasicas = [
    'Sátira monumental sobre las novelas de caballería que narra las aventuras e ideales del hidalgo Don Quijote y su fiel escudero Sancho Panza.',
    'Poema épico alegórico que recorre el viaje de Dante a través del Infierno, el Purgatorio y el Paraíso en busca de su amada Beatriz.',
    'Novela psicológica que explora los dilemas morales, la culpa y la búsqueda de redención del joven estudiante Rodión Raskólnikov.',
    'Poema épico atribuido a Homero que relata la convulsa travesía de Odiseo en su regreso a la isla de Ítaca tras la Guerra de Troya.',
    'Obra maestra de las costumbres y los prejuicios sociales en la Inglaterra del siglo XIX a través de la relación entre Elizabeth Bennet y el Sr. Darcy.'
  ];

  const portadasLibros = [
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&auto=format&fit=crop&q=60'
  ];

  const productosAdaptados = Array.isArray(products)
    ? products.map((producto, index) => ({
        id: String(producto.id),
        name: titulosClasicos[index] || `Obra Clásica Vol. ${producto.id}`,
        price: Math.round((producto.price || 10) * TIPO_CAMBIO_ARS),
        img: portadasLibros[index % portadasLibros.length],
        category: 'Obras Clásicas',
        description: descripcionesClasicas[index % descripcionesClasicas.length],
        stock: 10
      }))
    : [];

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h3 style={{ color: '#1d3557', fontSize: '1.4rem' }}>Cargando catálogo con Custom Hook...</h3>
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
        <p style={{ margin: 0 }}>{String(error)}</p>
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
          Libros disponibles: <strong>{productosAdaptados.length}</strong>
        </p>
      </header>

      <ItemList products={productosAdaptados} />
    </main>
  );
}

export default ItemListContainer;