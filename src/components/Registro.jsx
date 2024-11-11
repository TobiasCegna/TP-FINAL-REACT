// src/components/Registro.jsx
import React from 'react';

function Registro() {
  return (
    <div>
      <h2>Registro</h2>
      <form>
        <div>
          <label>Nombre de usuario:</label>
          <input type="text" name="username" required />
        </div>
        <div>
          <label>Correo electrónico:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
