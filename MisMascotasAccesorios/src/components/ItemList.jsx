import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ productos }) => {
    return (
        <div>
            {productos.map(producto => (
                <div key={producto.id}>
                    <Link to={`/producto/${producto.id}`}>
                        <img src={producto.img} alt={producto.alt} />
                        <h2>{producto.title}</h2>
                    </Link>
                    <p>{producto.description}</p>
                    <h3>$ {producto.price}</h3>
                </div>
            ))}
        </div>
    );
}

export default ItemList;

