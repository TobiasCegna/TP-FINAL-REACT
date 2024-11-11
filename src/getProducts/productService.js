// productService.js
import { db } from './firebase';

export const getProducts = async () => {
  try {
    const products = [];
    const querySnapshot = await db.collection("products").get();
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    console.log("Productos obtenidos:", products);
    return products;
  } catch (error) {
    console.error("Error al obtener productos:", error.message);
  }
};
