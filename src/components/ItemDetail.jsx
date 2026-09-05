import { useState } from 'react';
import ItemCount from './ItemCount';

function ItemDetail({ product }) {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    console.log(`Se agregaron ${quantity} unidades del libro: ${product.name}`);
  };

  return (
    <article style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2.5rem',
      backgroundColor: '#ffffff',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      maxWidth: '900px',
      margin: '2rem auto',
      textAlign: 'left'
    }}>
      {/* Columna 1: Imagen principal */}
      <div style={{
        width: '100%',
        height: '380px',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#f8f9fa'
      }}>
        <img 
          src={product.img} 
          alt={product.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Columna 2: Información detallada */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <span style={{ 
            fontSize: '0.8rem', 
            backgroundColor: '#e9ecef', 
            color: '#495057', 
            padding: '0.3rem 0.6rem', 
            borderRadius: '4px',
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}>
            {product.category}
          </span>

          <h2 style={{ fontSize: '1.8rem', color: '#1d3557', margin: '0.8rem 0 0.5rem 0' }}>
            {product.name}
          </h2>

          <p style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#e63946', margin: '0.5rem 0 1rem 0' }}>
            $ {product.price?.toLocaleString('es-AR')} ARS
          </p>

          <p style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            {product.description}
          </p>

          <p style={{ fontSize: '0.9rem', color: product.stock > 0 ? '#2a9d8f' : '#e63946', fontWeight: 'bold', marginBottom: '1rem' }}>
            {product.stock > 0 ? `Stock disponible: ${product.stock} unidades` : 'Sin stock disponible'}
          </p>
        </div>

        {/* Reutilización del contador con el stock dinámico */}
        <div>
          {quantityAdded > 0 ? (
            <p style={{ color: '#2a9d8f', fontWeight: 'bold' }}>
              ✓ ¡Agregaste {quantityAdded} ejemplares al carrito!
            </p>
          ) : (
            <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd} />
          )}
        </div>
      </div>
    </article>
  );
}

export default ItemDetail;