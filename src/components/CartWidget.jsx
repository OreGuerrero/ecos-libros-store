import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/useCart';

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" aria-label={`Carrito, ${totalItems} ${totalItems === 1 ? 'producto' : 'productos'}`} style={{
      display: 'flex', 
      alignItems: 'center', 
      gap: '0.4rem', 
      backgroundColor: '#1d3557', 
      color: '#ffffff',
      padding: '0.4rem 0.8rem', 
      borderRadius: '20px',
      fontSize: '0.9rem',
      textDecoration: 'none'
    }}>
      <FaShoppingCart size={18} />
      <span style={{ 
        fontWeight: 'bold', 
        backgroundColor: '#e63946', 
        borderRadius: '50%', 
        minWidth: '1.25rem',
        height: '1.25rem',
        display: 'grid',
        placeItems: 'center',
        fontSize: '0.8rem'
      }}>
        {totalItems}
      </span>
    </Link>
  );
}

export default CartWidget;