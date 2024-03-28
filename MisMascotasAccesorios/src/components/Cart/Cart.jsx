import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, checkout }) => {
    const total = cartItems.reduce((acc, currentItem) => acc + currentItem.totalPrice, 0);

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <div>No hay productos en el carrito</div>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <div key={index}>
                            <p>{item.title} - Cantidad: {item.quantity} - Precio Total: ${item.totalPrice}</p>
                            <button onClick={() => removeFromCart(index)}>Eliminar</button>
                        </div>
                    ))}
                </ul>
            )}
            <h3>Total de la Compra: ${total}</h3>
            <Link to="/checkout">
                <button>Finalizar Compra</button>
            </Link>
        </div>
    );
};

export default Cart;
