import { useState } from 'react';

function ItemCount({ stock = 0, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', maxWidth: '250px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Corregido de 'justify' a 'justifyContent'
        border: '1px solid #ccc',
        borderRadius: '6px',
        padding: '0.3rem 0.8rem'
      }}>
        <button 
          onClick={decrement}
          disabled={count <= 0}
          style={{ padding: '0.2rem 0.6rem', cursor: count > 0 ? 'pointer' : 'not-allowed', fontWeight: 'bold' }}
        >
          -
        </button>
        <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{count}</span>
        <button 
          onClick={increment}
          disabled={count >= stock}
          style={{ padding: '0.2rem 0.6rem', cursor: count < stock ? 'pointer' : 'not-allowed', fontWeight: 'bold' }}
        >
          +
        </button>
      </div>

      <button
        onClick={() => onAdd && onAdd(count)}
        disabled={stock === 0 || count === 0}
        style={{
          padding: '0.7rem 1rem',
          backgroundColor: stock > 0 && count > 0 ? '#1d3557' : '#a8a8a8',
          color: '#ffffff',
          border: 'none',
          borderRadius: '6px',
          fontWeight: '600',
          cursor: stock > 0 && count > 0 ? 'pointer' : 'not-allowed'
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;