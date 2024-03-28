import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Checkout = ({ cart }) => {
    const [buyer, setBuyer] = useState({ name: '', phone: '', email: '' });
    const [savedOrder, setSavedOrder] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBuyer({ ...buyer, [name]: value });
    };

    const saveOrder = async () => {
        const order = {
            buyer: buyer,
            items: cart,
            total: cart.reduce((total, item) => total + item.price * item.quantity, 0)
        };

        const db = getFirestore();
        const ordersRef = collection(db, 'ordenes');

        try {
            const docRef = await addDoc(ordersRef, order);
            console.log('Orden guardada:', docRef.id);
            setSavedOrder(order);
        } catch (error) {
            console.error('Error al guardar la orden:', error);
            setError('Error al guardar la orden');
        }
    };

    return (
        <div>
            {error && <div>Error: {error}</div>}
            {savedOrder ? (
                <div>
                    <h2>Orden Guardada</h2>
                    <p>Nombre: {savedOrder.buyer.name}</p>
                    <p>Teléfono: {savedOrder.buyer.phone}</p>
                    <p>Email: {savedOrder.buyer.email}</p>
                    <h3>Productos:</h3>
                    {savedOrder.items.map((item, index) => (
                        <div key={index}>
                            <p>{item.title} - Cantidad: {item.quantity}</p>
                            <p>Precio unitario: ${item.price}</p>
                        </div>
                    ))}
                    <p>Total: ${savedOrder.total}</p>
                </div>
            ) : (
                <div>
                    <h2>Checkout</h2>
                    <input type="text" name="name" placeholder="Nombre" value={buyer.name} onChange={handleInputChange} />
                    <input type="text" name="phone" placeholder="Teléfono" value={buyer.phone} onChange={handleInputChange} />
                    <input type="email" name="email" placeholder="Email" value={buyer.email} onChange={handleInputChange} />
                    <button onClick={saveOrder}>Guardar Orden</button>
                </div>
            )}
        </div>
    );
}

export default Checkout;
