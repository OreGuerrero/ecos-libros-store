import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar() {
  // Categorías basadas en los productos reales de Ecos Libros Store
  const categorias = [
    { name: 'Obras Clásicas', id: 'obras-clasicas' },
    { name: 'Historia y Arqueología', id: 'historia-y-arqueologia' }
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
      {/* Branding / Logo redirecciona al Inicio */}
      <Link 
        to="/" 
        style={{ 
          fontSize: '1.4rem', 
          fontWeight: 'bold', 
          color: '#1d3557',
          textDecoration: 'none' 
        }}
      >
        📚 Ecos Libros Store
      </Link>

      {/* Categorías de productos navegables sin recarga */}
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '1.5rem',
        margin: 0,
        padding: 0
      }}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? '#e63946' : '#495057',
              fontWeight: isActive ? 'bold' : '500',
              borderBottom: isActive ? '2px solid #e63946' : 'none',
              paddingBottom: '0.2rem',
              transition: 'color 0.2s'
            })}
          >
            Inicio
          </NavLink>
        </li>

        {categorias.map((cat) => (
          <li key={cat.id}>
            <NavLink 
              to={`/category/${cat.id}`} 
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? '#e63946' : '#495057',
                fontWeight: isActive ? 'bold' : '500',
                borderBottom: isActive ? '2px solid #e63946' : 'none',
                paddingBottom: '0.2rem',
                transition: 'color 0.2s'
              })}
            >
              {cat.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Widget del Carrito */}
      <CartWidget />
    </nav>
  );
}

export default Navbar;