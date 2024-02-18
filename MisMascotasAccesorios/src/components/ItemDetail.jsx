import React from 'react';
import { useParams } from 'react-router-dom';
import productosJson from '../productos.json';

const ItemDetail = () => {
    const { id } = useParams();
    const producto = productosJson.find(producto => producto.id === parseInt(id));

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div>
            <h2>{producto.title}</h2>
            <img src={producto.img} alt={producto.alt} />
            <p>{producto.description}</p>
            <p>Precio: ${producto.price}</p>
            <button>Agregar al carrito</button>
        </div>
    );
}

export default ItemDetail;
