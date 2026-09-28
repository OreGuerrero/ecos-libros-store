import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

export async function createOrder({ user, buyer, cart }) {
  if (!db) {
    throw new Error('Firebase no está configurado. Revisá las variables de entorno.');
  }
  if (!user?.uid) {
    throw new Error('Necesitás iniciar sesión para confirmar la compra.');
  }
  if (!cart.length) {
    throw new Error('El carrito está vacío. Agregá productos antes de continuar.');
  }

  const items = cart.map((item) => ({
    productId: item.id,
    name: item.name,
    unitPrice: item.price,
    quantity: item.quantity
  }));
  const total = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
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