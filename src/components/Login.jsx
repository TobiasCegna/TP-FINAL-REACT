// src/components/Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Nombre de usuario:</label>
          <input type="text" name="username" required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      <p>¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link></p>
    </div>
  );
}

export default Login;

