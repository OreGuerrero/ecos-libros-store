import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useCart } from '../context/useCart';
import { formatPrice } from '../formatPrice';
import { getCartItemTotal } from '../utils/cart';
import '../styles/Cart.css';

function Cart() {
  const { cart, updateQuantity, removeItem, clear, totalItems, cartTotal } = useCart();

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
                <p>{formatPrice(item.price)} por unidad</p>
                <div className="cart-quantity-controls" aria-label={`Cantidad de ${item.name}`}>
                  <button
                    type="button"
                    aria-label={`Reducir cantidad de ${item.name}`}
                    disabled={item.quantity <= 1}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    aria-label={`Aumentar cantidad de ${item.name}`}
                    disabled={Number.isInteger(item.stock) && item.quantity >= item.stock}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="cart-item-subtotal">
                <strong>{formatPrice(getCartItemTotal(item))}</strong>
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
            <strong>{formatPrice(cartTotal)}</strong>
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