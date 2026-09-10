import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BsCartPlus } from 'react-icons/bs';
import '../styles/Item.css';

function Item({ product }) {
  // Desestructuración unificada directa
  const { 
    name = 'Libro sin título', 
    price = 0, 
    img = '', 
    category, 
    description, 
    stock,
    autor 
  } = product || {};

  const [cantidad, setCantidad] = useState(1);
  const [esFavorito, setEsFavorito] = useState(false);

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(prev => prev - 1);
    }
  };

  const incrementar = () => {
    if (!stock || cantidad < stock) {
      setCantidad(prev => prev + 1);
    }
  };

  const toggleFavorito = () => {
    setEsFavorito(prev => !prev);
  };

  return (
    <article className="book-card">
      {/* Botón de Favorito */}
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

      <div>
        <div className="book-image-container">
          <img 
            src={img} 
            alt={`Portada de ${name}`} 
            className="book-cover"
          />
        </div>
        
        {category && (
          <span className="book-category">
            {category}
          </span>
        )}

        <h2 className="book-title">
          {name}
        </h2>
        
        {autor && <p className="book-author">{autor}</p>}
        {description && <p className="book-description">{description}</p>}
      </div>

      <div className="book-card-footer">
        <p className="book-price">
          $ {typeof price === 'number' ? price.toLocaleString('es-AR') : price} ARS
        </p>

        {stock && (
          <p className="book-stock">
            Stock disponible: {stock}
          </p>
        )}

        {/* Controles de Cantidad */}
        <div className="counter-controls">
          <button onClick={decrementar} className="btn-counter">
            -
          </button>
          <span className="counter-value">{cantidad}</span>
          <button onClick={incrementar} className="btn-counter">
            +
          </button>
        </div>

        {/* Botón Agregar al Carrito */}
        <button className="btn-add">
          <BsCartPlus size={18} />
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}

export default Item;