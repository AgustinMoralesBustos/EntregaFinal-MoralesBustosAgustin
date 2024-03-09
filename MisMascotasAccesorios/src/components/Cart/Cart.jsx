import React, { useState } from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
    const [compraFinalizada, setCompraFinalizada] = useState(false);

    const handleFinalizarCompra = () => {
        setCompraFinalizada(true);
        setTimeout(() => {
            setCompraFinalizada(false);
        }, 3000);
    };

    return (
        <div>
            <h2>Carrito de compras</h2>
            {cartItems.length === 0 ? (
                <div>No hay productos en el carrito</div>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <img src={item.img} alt={item.alt} />
                            {item.title} - ${item.price}  
                            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={handleFinalizarCompra}>Finalizar compra</button>
            {compraFinalizada && (
                alert ("Compra finalizada")
            )}
        </div>
    );
}

export default Cart;
