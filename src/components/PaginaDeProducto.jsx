// src/components/PaginaDeProducto.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PaginaDeProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        return response.json();
      })
      .then(data => {
        setProducto(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando detalles del producto...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!producto) return <p>No se encontró el producto.</p>;

  return (
    <div>
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} style={{ width: '200px' }} />
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <button onClick={() => alert('Producto comprado')}>Comprar</button>
    </div>
  );
}

export default PaginaDeProducto;
