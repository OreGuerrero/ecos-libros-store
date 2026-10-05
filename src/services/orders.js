import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { getCartTotal } from '../utils/cart';

export async function createOrder({ user, buyer, cart }) {
  if (!db) {
    throw new Error('Firebase no está configurado. Revisa las variables de entorno.');
  }
  if (!user?.uid) {
    throw new Error('Necesitas iniciar sesión para confirmar la compra.');
  }
  if (!cart.length) {
    throw new Error('El carrito está vacío. Agrega productos antes de continuar.');
  }

  const items = cart.map((item) => ({
    productId: item.id,
    name: item.name,
    unitPrice: item.price,
    quantity: item.quantity
  }));
  const total = getCartTotal(cart);
  const order = {
    userId: user.uid,
    userEmail: user.email,
    buyer,
    items,
    total,
    createdAt: serverTimestamp()
  };

  const orderDocument = await addDoc(collection(db, 'orders'), order);
  return orderDocument.id;
}