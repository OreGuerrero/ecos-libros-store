import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BsCartPlus } from 'react-icons/bs';

function Item({ product }) {
  // Desestructuramos el objeto product o usamos valores por defecto
  const { 
    name, 
    price, 
    img, 
    category, 
    description, 
    stock,
    // Compatibilidad en caso de que le pases las props sueltas anteriores:
    titulo,
    autor,
    precio,
    imagen
  } = product || {};

  // Mapeo de variables para admitir ambas estructuras
  const itemTitulo = name || titulo || 'Libro sin título';
  const itemPrecio = price || precio || 0;
  const itemImagen = img || imagen || '';

  const [cantidad, setCantidad] = useState(1);
  const [esFavorito, setEsFavorito] = useState(false);

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(prev => prev - 1);
    }
  };

  const incrementar = () => {
    // Si hay stock disponible, evitamos superar ese límite
    if (!stock || cantidad < stock) {
      setCantidad(prev => prev + 1);
    }
  };

  const toggleFavorito = () => {
    setEsFavorito(prev => !prev);
  };

  return (
    <article className="book-card" style={{
      border: '1px solid #e0e0e0',
      borderRadius: '10px',
      padding: '1.2rem',
      display: 'flex',
      flexDirection: 'column',
      justify: 'space-between',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
      position: 'relative'
    }}>
      {/* Botón de Favorito */}
      <button 
        onClick={toggleFavorito} 
        className="btn-favorite"
        aria-label="Agregar a favoritos"
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          background: 'rgba(255, 255, 255, 0.8)',
          border: 'none',
          borderRadius: '50%',
          padding: '6px',
          cursor: 'pointer',
          zIndex: 2
        }}
      >
        {esFavorito ? (
          <FaHeart color="#e63946" size={20} />
        ) : (
          <FaRegHeart color="#666" size={20} />
        )}
      </button>

      <div>
        <div style={{
          width: '100%',
          height: '220px',
          borderRadius: '6px',
          overflow: 'hidden',
          backgroundColor: '#f8f9fa',
          marginBottom: '1rem'
        }}>
          <img 
            src={itemImagen} 
            alt={`Portada de ${itemTitulo}`} 
            className="book-cover"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
        
        {category && (
          <span style={{ 
            fontSize: '0.75rem', 
            backgroundColor: '#e9ecef', 
            color: '#495057', 
            padding: '0.2rem 0.5rem', 
            borderRadius: '4px',
            fontWeight: 'bold'
          }}>
            {category}
          </span>
        )}

        <h2 style={{ fontSize: '1.05rem', lineHeight: '1.4', margin: '0.6rem 0 0.3rem 0', color: '#222' }}>
          {itemTitulo}
        </h2>
        
        {autor && <p className="author" style={{ fontSize: '0.85rem', color: '#666', margin: '0 0 0.5rem 0' }}>{autor}</p>}
        {description && <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4', margin: '0 0 1rem 0' }}>{description}</p>}
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '0.8rem', borderTop: '1px solid #f0f0f0' }}>
        <p className="price" style={{ fontWeight: '700', color: '#1d3557', fontSize: '1.2rem', margin: '0 0 0.3rem 0' }}>
          $ {itemPrecio.toLocaleString('es-AR')} ARS
        </p>

        {stock && (
          <p style={{ fontSize: '0.8rem', color: '#2a9d8f', marginBottom: '0.8rem' }}>
            Stock disponible: {stock}
          </p>
        )}

        {/* Controles de Cantidad */}
        <div className="counter-controls" style={{
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          gap: '0.8rem',
          marginBottom: '0.8rem'
        }}>
          <button 
            onClick={decrementar}
            style={{ padding: '0.2rem 0.6rem', fontWeight: 'bold', cursor: 'pointer' }}
          >
            -
          </button>
          <span style={{ fontWeight: 'bold' }}>{cantidad}</span>
          <button 
            onClick={incrementar}
            style={{ padding: '0.2rem 0.6rem', fontWeight: 'bold', cursor: 'pointer' }}
          >
            +
          </button>
        </div>

        {/* Botón Agregar al Carrito */}
        <button className="btn-add" style={{
          width: '100%',
          padding: '0.6rem 1rem',
          backgroundColor: '#1d3557',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <BsCartPlus size={18} style={{ marginRight: '8px' }} />
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}

export default Item;