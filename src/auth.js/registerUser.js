import { auth, db } from './firebase';

// Función para registrar usuarios
export const registerUser = async (email, password) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    console.log("Usuario registrado:", userCredential.user);

    // Guarda información adicional del usuario en Firestore
    await db.collection("users").doc(userCredential.user.uid).set({
      email: email,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  } catch (error) {
    console.error("Error en el registro:", error.message);
  }
};