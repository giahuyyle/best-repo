import { ref, get, getDatabase } from 'firebase/database';
import { app } from '../config/firebase';

const db = getDatabase(app);

export const getMessages = async () => {
  try {
    const productsRef = ref(db, 'messages');
    const snapshot = await get(productsRef);
    
    if (snapshot.exists()) {
      // Convert Firebase object to array format
      const products = Object.entries(snapshot.val()).map(([key, value]) => ({
        id: key,
        ...value
      }));
      return products;
    }
    
    console.log("fail")
    return [];
  } catch (error) {
    console.error('Error fetching messages:', error);
    return [];
  }
};