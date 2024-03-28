import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ producto }) => {
    return (
        <div className="contenedor">
            <div className='tarjeta'>
                <h2 className='titulo'>{producto.title}</h2>
                <div className='cuerpo'>
                    <img src={producto.img} alt={producto.alt} />
                    <p>{producto.description}</p>
                    <h3>$ {producto.price}</h3>
                </div>
                <div className='pie'>
                    <Link to={`/producto/${producto.id}`}>Información</Link>
                </div>
            </div>
        </div>
    );
};

export default Item;
