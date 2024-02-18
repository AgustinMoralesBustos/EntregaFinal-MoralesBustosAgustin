import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import productosJson from '../productos.json';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const asyncMock = (categoryId) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (categoryId === undefined) {
            resolve(productosJson);
          } else {
            const productosFiltrados = productosJson.filter(
              (item) => item.categoria === categoryId
            );

            if (productosFiltrados.length === 0) {
              reject('No se encontraron resultados');
            }

            resolve(productosFiltrados);
          }
        }, 2000);
      });
    };

    asyncMock(categoryId)
      .then((res) => setProductos(res))
      .catch((mensaje) => {
        console.log(mensaje);
      });
  }, [categoryId]);

  return (
    <main>
      <section className="item-list-container">
        <ItemList productos={productos} />
      </section>
    </main>
  );
}

export default ItemListContainer;
