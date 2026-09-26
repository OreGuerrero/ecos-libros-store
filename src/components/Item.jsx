import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BsCartPlus } from 'react-icons/bs';
import { useCart } from '../context/useCart';
import '../styles/Item.css';

function Item({ product }) {
  const { 
    id,
    name = 'Libro sin título', 
    price = 0, 
    img = '', 
    category, 
    description, 
    stock,
    autor 
  } = product || {};

  const { addItem } = useCart();
  const [cantidad, setCantidad] = useState(1);
  const [esFavorito, setEsFavorito] = useState(false);
  const [addedQuantity, setAddedQuantity] = useState(0);

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(prev => prev - 1);
    }
  };

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(prev => prev + 1);
    }
  };

  const agregarAlCarrito = () => {
    if (!id || !Number.isInteger(cantidad) || cantidad <= 0 || cantidad > stock) return;
    addItem(product, cantidad);
    setAddedQuantity(cantidad);
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

      <Link to={`/item/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
      </Link>

      <div className="book-card-footer">
        <p className="book-price">
          $ {typeof price === 'number' ? price.toLocaleString('es-AR') : price} ARS
        </p>

        {stock && (
          <p className="book-stock">
            Stock disponible: {stock}
          </p>
        )}

        <div className="counter-controls">
          <button onClick={decrementar} className="btn-counter">
            -
          </button>
          <span className="counter-value">{cantidad}</span>
          <button onClick={incrementar} className="btn-counter">
            +
          </button>
        </div>

        <button className="btn-add" type="button" onClick={agregarAlCarrito} disabled={!stock || cantidad > stock}>
          <BsCartPlus size={18} />
          Agregar al carrito
        </button>
        {addedQuantity > 0 && (
          <p role="status" style={{ color: '#2a9d8f', margin: '0.5rem 0 0' }}>
            Se agregaron {addedQuantity} {addedQuantity === 1 ? 'unidad' : 'unidades'} al carrito.
          </p>
        )}
      </div>
    </article>
  );
}

export default Item;