import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1 style={{ fontSize: '4rem', color: '#e63946', marginBottom: '0.5rem' }}>404</h1>
      <h2 style={{ color: '#1d3557', marginBottom: '1rem' }}>Página no encontrada</h2>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        La sección a la que intentás acceder no existe en nuestro catálogo.
      </p>
      <Link 
        to="/" 
        style={{
          padding: '0.6rem 1.2rem',
          backgroundColor: '#1d3557',
          color: '#fff',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Volver al Inicio
      </Link>
    </main>
  );
}

export default NotFound;