import { Link } from 'react-router-dom';

function Home() {
  return (
    <main style={{ textAlign: 'center', padding: '3rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#1d3557', fontSize: '2.5rem', marginBottom: '1rem' }}>
        Bienvenido a Ecos Libros Store
      </h1>
      <p style={{ color: '#457b9d', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
        Explorá nuestra colección seleccionada de obras cumbres de la literatura universal, poesía épica y filosofía clásica.
      </p>
      <Link 
        to="/productos" 
        style={{
          display: 'inline-block',
          padding: '0.8rem 1.8rem',
          backgroundColor: '#e63946',
          color: '#ffffff',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Ver Catálogo Completo
      </Link>
    </main>
  );
}

export default Home;