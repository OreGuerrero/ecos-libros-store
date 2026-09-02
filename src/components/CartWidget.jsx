import { FaShoppingCart } from 'react-icons/fa'; // O puedes usar el emoji 🛒 si no usas react-icons

function CartWidget() {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '0.4rem', 
      backgroundColor: '#1d3557', 
      color: '#ffffff',
      padding: '0.4rem 0.8rem', 
      borderRadius: '20px',
      cursor: 'pointer',
      fontSize: '0.9rem'
    }}>
      <FaShoppingCart size={18} />
      <span style={{ 
        fontWeight: 'bold', 
        backgroundColor: '#e63946', 
        borderRadius: '50%', 
        padding: '0.1rem 0.4rem',
        fontSize: '0.8rem'
      }}>
        3
      </span>
    </div>
  );
}

export default CartWidget;