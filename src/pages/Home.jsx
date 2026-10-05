import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import ItemList from '../components/ItemList';
import { useProducts } from '../hooks/useProducts';

const categories = [
  { id: 'obras-clasicas', name: 'Obras Clásicas' },
  { id: 'historia-y-arqueologia', name: 'Historia y Arqueología' },
  { id: 'fantasia-y-aventuras', name: 'Fantasía y Aventuras' },
  { id: 'ciencia-ficcion', name: 'Ciencia Ficción' }
];

const featuredProductIds = [
  'crimen-y-castigo',
  'la-odisea',
  'alicia-en-el-pais-de-las-maravillas',
  'la-guerra-de-los-mundos'
];

function Home() {
  const { items, isLoading, error } = useProducts();
  const featuredProducts = featuredProductIds
    .map((id) => items.find((item) => item.id === id))
    .filter(Boolean);

  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-inner">
          <p className="home-eyebrow">Ecos Libros Store</p>
          <h1 id="home-title">Lecturas que hacen eco.</h1>
          <p className="home-intro">Un lugar para descubrir historias que siguen acompañándonos, generación tras generación.</p>
          <Link className="hero-link" to="/productos">
            Explora el catálogo completo <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="home-genres" aria-labelledby="genres-title">
        <header className="home-section-heading">
          <div>
            <p className="catalog-eyebrow">Encuentra tu próxima lectura</p>
            <h2 id="genres-title">Explora por género</h2>
          </div>
        </header>
        <div className="home-genre-grid">
          {categories.map((category) => (
            <Link className="home-genre-link" key={category.id} to={`/category/${category.id}`}>
              <span>{category.name}</span>
              <FaArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="home-featured" aria-labelledby="featured-title">
        <header className="home-section-heading">
          <div>
            <p className="catalog-eyebrow">Una selección de la librería</p>
            <h2 id="featured-title">Lecturas destacadas</h2>
          </div>
          <Link className="home-all-link" to="/productos">
            Ver todos <FaArrowRight aria-hidden="true" />
          </Link>
        </header>
        {isLoading && <p className="catalog-status" role="status">Cargando selección...</p>}
        {error && <p className="catalog-status catalog-error" role="alert">Error: {error}</p>}
        {!isLoading && !error && <ItemList products={featuredProducts} />}
      </section>
    </div>
  );
}

export default Home;