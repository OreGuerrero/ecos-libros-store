import { useState, useEffect } from 'react';

function ItemListContainer() {
  // 1. Definición de estados iniciales
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Implementación de useEffect
  useEffect(() => {
    // Verificación en consola (no debe repetirse)
    console.log("Efecto ejecutado: Cargando datos...");

    // Array ficticio de productos
    const productosFicticios = [
      { id: 1, name: 'El Popol Vuh' },
      { id: 2, name: 'Poema de Gilgamesh' },
      { id: 3, name: 'Código de Hammurabi' }
    ];

    // Simulación de demora de red de 2 segundos (2000 ms)
    const timer = setTimeout(() => {
      setItems(productosFicticios);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Limpieza de seguridad
  }, []); // Array de dependencias vacío

  // 3. Renderizado Condicional
  if (loading) {
    return <h2>Cargando productos...</h2>;
  }

  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h2>Catálogo de Libros</h2>
      <p>Cantidad de productos: {items.length}</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(producto => (
          <li key={producto.id} style={{ margin: '0.5rem 0' }}>
            {producto.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;