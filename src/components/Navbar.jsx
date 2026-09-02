import CartWidget from './CartWidget';

function Navbar() {
  // Categorías basadas en los productos reales de Ecos Libros Store
  const categorias = [
    'Obras Clásicas',
    'Historia y Arqueología',
    'Filosofía Antigua',
    'Ediciones Ilustradas'
  ];

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#f8f9fa',
      borderBottom: '2px solid #e9ecef',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      {/* Branding / Logo */}
      <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#1d3557' }}>
        📚 Ecos Libros Store
      </div>

      {/* Categorías de productos */}
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '1.5rem',
        margin: 0,
        padding: 0
      }}>
        {categorias.map((cat, index) => (
          <li key={index}>
            <a 
              href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`} 
              style={{
                textDecoration: 'none',
                color: '#495057',
                fontWeight: '500',
                transition: 'color 0.2s'
              }}
            >
              {cat}
            </a>
          </li>
        ))}
      </ul>

      {/* Widget del Carrito */}
      <CartWidget />
    </nav>
  );
}

export default Navbar;