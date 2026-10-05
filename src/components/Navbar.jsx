import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBookOpen } from 'react-icons/fa';
import CartWidget from './CartWidget';
import { useAuth } from '../context/useAuth';
import '../styles/NavBar.css';

function Navbar() {
  const { currentUser, isAuthLoading, logout } = useAuth();
  const [authError, setAuthError] = useState('');

  const handleLogout = async () => {
    setAuthError('');
    try {
      await logout();
    } catch {
      setAuthError('No se pudo cerrar la sesión. Intenta de nuevo.');
    }
  };

  const categorias = [
    { name: 'Obras Clásicas', id: 'obras-clasicas' },
    { name: 'Historia y Arqueología', id: 'historia-y-arqueologia' },
    { name: 'Fantasía y Aventuras', id: 'fantasia-y-aventuras' },
    { name: 'Ciencia Ficción', id: 'ciencia-ficcion' }
  ];

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navegación principal">
        <Link className="brand" to="/" aria-label="Ecos Libros Store, inicio">
          <span className="brand-mark" aria-hidden="true"><FaBookOpen /></span>
          <span className="brand-copy"><strong>Ecos</strong><small>LIBROS STORE</small></span>
        </Link>

        <ul className="nav-links">
          <li><NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Inicio</NavLink></li>
        {categorias.map((cat) => (
          <li key={cat.id}>
            <NavLink to={`/category/${cat.id}`} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              {cat.name}
            </NavLink>
          </li>
        ))}
        </ul>

        <div className="nav-actions">
          <div className="account-links">
            {isAuthLoading ? (
              <span className="nav-loading" role="status">Cargando sesión...</span>
            ) : currentUser ? (
              <>
                <span className="nav-user" title={currentUser.email}>{currentUser.email}</span>
                <button className="nav-logout" type="button" onClick={handleLogout}>Salir</button>
              </>
            ) : (
              <>
                <Link className="nav-login" to="/login">Ingresar</Link>
                <Link className="nav-register" to="/register">Crear cuenta</Link>
              </>
            )}
          </div>
          <CartWidget />
        </div>
        {authError && <p className="nav-error" role="alert">{authError}</p>}
      </nav>
    </header>
  );
}

export default Navbar;