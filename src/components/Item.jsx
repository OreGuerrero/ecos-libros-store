import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BsCartPlus } from 'react-icons/bs';

function Item({ titulo, autor, precio, imagen }) {
  const [cantidad, setCantidad] = useState(1);
  const [esFavorito, setEsFavorito] = useState(false);

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(prev => prev - 1);
    }
  };

  const incrementar = () => {
    setCantidad(prev => prev + 1);
  };

  const toggleFavorito = () => {
    setEsFavorito(prev => !prev);
  };

  return (
    <article className="book-card">
      <button 
        onClick={toggleFavorito} 
        className="btn-favorite"
        aria-label="Agregar a favoritos"
      >
        {esFavorito ? (
          <FaHeart color="#e63946" size={20} />
        ) : (
          <FaRegHeart color="#666" size={20} />
        )}
      </button>

      <img src={imagen} alt={`Portada de ${titulo}`} className="book-cover" />
      
      <h2>{titulo}</h2>
      <p className="author">{autor}</p>
      <p className="price">${precio}</p>

      <div className="counter-controls">
        <button onClick={decrementar}>-</button>
        <span>{cantidad}</span>
        <button onClick={incrementar}>+</button>
      </div>

      <button className="btn-add">
        <BsCartPlus size={18} style={{ marginRight: '8px' }} />
        Agregar al carrito
      </button>
    </article>
  );
}

export default Item;

