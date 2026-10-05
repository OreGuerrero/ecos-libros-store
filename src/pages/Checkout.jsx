import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import { useCart } from '../context/useCart';
import { createOrder } from '../services/orders';
import { formatPrice } from '../formatPrice';
import './Checkout.css';

function Checkout() {
  const { currentUser, isAuthLoading } = useAuth();
  const { cart, clear } = useCart();
  const [buyer, setBuyer] = useState({ name: '', phone: '', address: '', city: '', notes: '' });
  const [orderId, setOrderId] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (isAuthLoading) {
    return <p className="checkout-page" role="status">Verificando sesión...</p>;
  }

  if (!currentUser) {
    return (
      <section className="checkout-page checkout-auth">
        <p className="checkout-eyebrow">Finalizar compra</p>
        <h1>Inicia sesión para continuar</h1>
        <p>Tu carrito se conservará mientras completas el acceso.</p>
        <div className="checkout-auth-actions">
          <Link className="checkout-submit" to="/login" state={{ from: { pathname: '/checkout' } }}>
            Iniciar sesión
          </Link>
          <Link className="checkout-submit checkout-auth-register" to="/register" state={{ from: { pathname: '/checkout' } }}>
            Crear cuenta
          </Link>
        </div>
      </section>
    );
  }

  if (orderId) {
    return (
      <section className="checkout-page checkout-success" role="status">
        <p className="checkout-eyebrow">Compra registrada</p>
        <h1>¡Gracias por tu compra!</h1>
        <p>Tu número de orden es:</p>
        <strong className="checkout-order-id">{orderId}</strong>
        <Link className="checkout-submit" to="/productos">Volver al catálogo</Link>
      </section>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/productos" replace />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBuyer((previousBuyer) => ({ ...previousBuyer, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const createdOrderId = await createOrder({ user: currentUser, buyer, cart });
      clear();
      setOrderId(createdOrderId);
    } catch {
      setError('No pudimos registrar la compra. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="checkout-page">
      <header className="checkout-header">
        <div>
          <p className="checkout-eyebrow">Finalizar compra</p>
          <h1>Datos de entrega</h1>
          <p className="checkout-email">Compra asociada a {currentUser.email}</p>
        </div>
        <Link to="/cart">Volver al carrito</Link>
      </header>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <label htmlFor="buyer-name">Nombre y apellido</label>
          <input id="buyer-name" name="name" autoComplete="name" value={buyer.name} onChange={handleChange} required minLength={3} />
          <label htmlFor="buyer-phone">Teléfono</label>
          <input id="buyer-phone" name="phone" type="tel" autoComplete="tel" value={buyer.phone} onChange={handleChange} required minLength={6} />
          <label htmlFor="buyer-address">Dirección</label>
          <input id="buyer-address" name="address" autoComplete="street-address" value={buyer.address} onChange={handleChange} required minLength={4} />
          <label htmlFor="buyer-city">Ciudad</label>
          <input id="buyer-city" name="city" autoComplete="address-level2" value={buyer.city} onChange={handleChange} required minLength={2} />
          <label htmlFor="buyer-notes">Información adicional (opcional)</label>
          <textarea id="buyer-notes" name="notes" value={buyer.notes} onChange={handleChange} rows="3" />
          {error && <p className="checkout-error" role="alert">{error}</p>}
          <button className="checkout-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Registrando compra...' : 'Confirmar compra'}
          </button>
        </form>

        <aside className="checkout-summary">
          <h2>Tu pedido</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <span>{item.name} × {item.quantity}</span>
                <strong>{formatPrice(item.price * item.quantity)}</strong>
              </li>
            ))}
          </ul>
          <div className="checkout-total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Checkout;