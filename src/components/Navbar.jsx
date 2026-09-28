import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import { useAuth } from '../context/useAuth';

function Navbar() {
  const { currentUser, isAuthLoading, logout } = useAuth();
  const [authError, setAuthError] = useState('');

  const handleLogout = async () => {
    setAuthError('');
    try {
      await logout();
    } catch {
      setAuthError('No se pudo cerrar la sesión. Intentá nuevamente.');
    }
  };

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

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {!isAuthLoading && currentUser ? (
          <>
            <span>{currentUser.email}</span>
            <button type="button" onClick={handleLogout}>Cerrar sesión</button>
          </>
        ) : (
          <>
            <Link to="/login">Ingresar</Link>
            <Link to="/register">Crear cuenta</Link>
          </>
        )}
      </div>

      {/* Widget del Carrito */}
      <CartWidget />
      {authError && <span role="alert">{authError}</span>}
    </nav>
  );
}

export default Navbar;