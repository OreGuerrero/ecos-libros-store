import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export async function getProductById(productId) {
  if (!db) {
    throw new Error('Firebase no está configurado. Revisá las variables de entorno.');
  }

  const itemDocument = await getDoc(doc(db, 'items', productId));
  if (!itemDocument.exists()) {
    throw new Error(`No se encontró ningún producto con el ID: ${productId}`);
  }

  return { ...itemDocument.data(), id: itemDocument.id };
}