import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { withProductImage } from './productImages';

export async function getProductById(productId) {
  if (!db) {
    throw new Error('Firebase no está configurado. Revisa las variables de entorno.');
  }

  const itemDocument = await getDoc(doc(db, 'items', productId));
  if (!itemDocument.exists()) {
    throw new Error(`No se encontró ningún producto con el ID: ${productId}`);
  }

  return withProductImage({ ...itemDocument.data(), id: itemDocument.id });
}