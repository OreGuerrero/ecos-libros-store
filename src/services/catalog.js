import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { withProductImage } from './productImages';

export async function getProducts(category) {
  if (!db) {
    throw new Error('Firebase no está configurado. Revisa las variables de entorno.');
  }

  const itemsCollection = collection(db, 'items');
  const itemsQuery = category
    ? query(itemsCollection, where('category', '==', category))
    : itemsCollection;
  const snapshot = await getDocs(itemsQuery);

  return snapshot.docs.map((itemDocument) => withProductImage({
    ...itemDocument.data(),
    id: itemDocument.id
  }));
}