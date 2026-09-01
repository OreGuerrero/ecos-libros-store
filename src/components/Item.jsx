import { useState } from 'react';

function Item({ titulo, autor, precio, imagen }) {
  // 1. Identificar el estado inicial
  const [cantidad, setCantidad] = useState(1);
  const [esFavorito, setEsFavorito] = useState(false);

  // 2. Implementar las funciones del contador usando la forma funcional
  const handleSumar = () => {
    setCantidad(prevCantidad => prevCantidad + 1);
  };

  const handleRestar = () => {
    setCantidad(prevCantidad => (prevCantidad > 1 ? prevCantidad - 1 : 1));
  };

  // 3. Implementar la lógica del botón de favorito
  const toggleFavorite = () => {
    setEsFavorito(prevEsFavorito => !prevEsFavorito);
  };

  return (
    <article className="book-card">
      {/* Botón de favorito condicional */}
      <button 
        onClick={toggleFavorite} 
        className={`btn-favorite ${esFavorito ? 'favorite-active' : ''}`}
        aria-label="Agregar a favoritos"
      >
        {esFavorito ? '❤️' : '🤍'}
      </button>

      <img src={imagen} alt={`Portada de ${titulo}`} className="book-cover" />
      
      <h2>{titulo}</h2>
      <p className="book-author">{autor}</p>
      <strong className="book-price">${precio}</strong>

      {/* Contador de cantidad */}
      <div className="counter-container">
        <button onClick={handleRestar}>-</button>
        <span>{cantidad}</span>
        <button onClick={handleSumar}>+</button>
      </div>

      <button className="btn-add">Agregar al carrito</button>
    </article>
  );
}

export default Item;