import React from 'react';

const ItemDetail = ({ producto }) => {
    if (!producto) {
        return <div>No hay detalles disponibles</div>;
    }
    return (
        <div>
            <h2>{producto.title}</h2>
            <img src={producto.img} alt={producto.alt} />
            <p>{producto.description}</p>
            <p>Precio: ${producto.price}</p>
        </div>
    );
}

export default ItemDetail;