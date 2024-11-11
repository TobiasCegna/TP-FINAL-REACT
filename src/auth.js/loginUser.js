// Función para iniciar sesión
export const loginUser = async (email, password) => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      console.log("Usuario autenticado:", userCredential.user);
    } catch (error) {
      console.error("Error en el inicio de sesión:", error.message);
    }
  };