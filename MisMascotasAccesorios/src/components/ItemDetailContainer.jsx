import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productosJson from '../productos.json';

export default function ItemDetailContainer() {
    const { itemId } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const obtenerProducto = async () => {
            setTimeout(() => {
                const productoEncontrado = productosJson.find(item => item.id === parseInt(itemId));
    
                if (productoEncontrado) {
                    setProducto(productoEncontrado);
                } else {
                    console.log('Producto no encontrado');
                }
            }, 2000);
        };
        
        obtenerProducto();
    }, [id]);

    if (!producto) return <div>Cargando...</div>;

    return (
        <main className="item-detail">
            <h1 style={{ textTransform: 'capitalize' }}>{producto.title}</h1>
            <section style={{ display: 'flex' }}>
                <section className="productos-info">
                    <img src={producto.img} alt={producto.alt} />
                    <p>Description: {producto.description}</p>
                    <p>Price: {producto.price}</p>
                    <p>Category: {producto.categoria}</p>
                </section>
            </section>
        </main>
    );
}
