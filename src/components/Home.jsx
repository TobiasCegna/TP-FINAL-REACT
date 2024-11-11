// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        return response.json();
      })
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Listado de Productos</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            <Link to={`/producto/${producto.id}`}>
              <h3>{producto.title}</h3>
              <p>Precio: ${producto.price}</p>
              <p>SKU:POO3{producto.sku}</p>
              <img src={producto.image} alt={producto.title} style={{ width: '100px' }} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
