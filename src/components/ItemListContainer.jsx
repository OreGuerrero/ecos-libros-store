import { useState, useEffect } from 'react';

function ItemListContainer() {
  // Estado para guardar la lista de libros/productos
  const [items, setItems] = useState([]);
  // Estado de carga inicializado en true
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log para verificar en consola que solo se ejecuta una vez al montar
    console.log("Efecto ejecutado: Simulando petición a API...");

    // Mock de productos ficticios (libros de Ecos Libros)
    const mockProductos = [
      { id: 1, name: 'El Popol Vuh', price: 18500 },
      { id: 2, name: 'Poema de Gilgamesh', price: 15200 },
      { id: 3, name: 'Código de Hammurabi', price: 12900 }
    ];

    // Simulación de demora de red de 2 segundos (2000 ms)
    const timer = setTimeout(() => {
      setItems(mockProductos);
      setLoading(false);
    }, 2000);

    // Limpieza del temporizador por si el componente se desmonta antes de los 2s
    return () => clearTimeout(timer);
  }, []); // Array de dependencias vacío para ejecución única al montar

  // Renderizado condicional
  if (loading) {
    return (
      <div style={{ textAlign: 'center', margin: '3rem' }}>
        <h2>Cargando productos...</h2>
      </div>
    );
  }

  return (
    <section style={{ padding: '2rem' }}>
      <h2>Catálogo de Libros</h2>
      <p>Cantidad de productos disponibles: {items.length}</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(producto => (
          <li key={producto.id} style={{ margin: '0.5rem 0', fontSize: '1.1rem' }}>
            <strong>{producto.name}</strong> - ${producto.price}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ItemListContainer;