import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/useCart';

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link className="cart-widget" to="/cart" aria-label={`Carrito, ${totalItems} ${totalItems === 1 ? 'producto' : 'productos'}`}>
      <FaShoppingCart aria-hidden="true" />
      <span className="cart-widget-label">Carrito</span>
      <span className="cart-widget-count">{totalItems}</span>
    </Link>
  );
}

export default CartWidget;