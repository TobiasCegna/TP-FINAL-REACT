// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registro from './components/Registro';
import Login from './components/Login';
import Home from './components/Home';
import PaginaDeProducto from './components/PaginaDeProducto';



function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/registro">Registro</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<PaginaDeProducto />} />
      </Routes>
    </Router>
  );
}

export default App;
