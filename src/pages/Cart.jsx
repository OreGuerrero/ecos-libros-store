import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useCart } from '../context/useCart';
import { formatPrice } from '../formatPrice';
import '../styles/Cart.css';

function Cart() {
  const { cart, removeItem, clear, totalItems } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleClear = () => {
    if (window.confirm('¿Seguro que quieres vaciar el carrito?')) {
      clear();
    }
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page cart-empty">
        <h1>Tu carrito está esperando una historia</h1>
        <p>Explora el catálogo y encuentra tu próxima lectura favorita.</p>
        <Link className="cart-primary-link" to="/productos">Explora el catálogo</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <header className="cart-header">
        <div>
          <h1>Tu carrito</h1>
          <p>{totalItems} {totalItems === 1 ? 'producto' : 'productos'}</p>
        </div>
        <Link className="cart-continue-link" to="/productos">Sigue explorando</Link>
      </header>

      <div className="cart-layout">
        <ul className="cart-items">
          {cart.map((item) => (
            <li className="cart-item" key={item.id}>
              <img className="cart-item-image" src={item.img} alt={`Portada de ${item.name}`} />
              <div className="cart-item-info">
                <span className="cart-item-category">{item.category}</span>
                <h2>{item.name}</h2>
                <p>{formatPrice(item.price)} · Cantidad: {item.quantity}</p>
              </div>
              <div className="cart-item-subtotal">
                <strong>{formatPrice(item.price * item.quantity)}</strong>
                <button
                  className="cart-remove-button"
                  type="button"
                  aria-label={`Eliminar ${item.name} del carrito`}
                  onClick={() => removeItem(item.id)}
                >
                  <FaRegTrashAlt aria-hidden="true" />
                  <span>Eliminar</span>
                </button>
              </div>
            </li>
          ))}
        </ul>

        <aside className="cart-summary">
          <h2>Resumen</h2>
          <div className="cart-total-row">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>
          <Link className="cart-checkout-button" to="/checkout">
            Finalizar compra
          </Link>
          <button
            className="cart-clear-button"
            type="button"
            onClick={handleClear}
          >
            Vaciar carrito
          </button>
        </aside>
      </div>
    </div>
  );
}

export default Cart;