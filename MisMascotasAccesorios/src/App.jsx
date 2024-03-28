import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/checkout';
import { getFirestore, collection, addDoc } from "firebase/firestore";

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    const checkout = async () => {
        try {
            const db = getFirestore();
            const ordersCollectionRef = collection(db, "orders");
            const newOrderRef = await addDoc(ordersCollectionRef, {
                items: cartItems,
                createdAt: new Date()
            });
            console.log("Pedido enviado con ID: ", newOrderRef.id);
        } catch (error) {
            console.error("Error al enviar el pedido: ", error);
        }
    };

    return (
        <Router>
            <Navbar cartItemCount={cartItems.length} />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="category/:category" element={<ItemListContainer />}/>
                <Route path="/producto/:id" element={<ItemDetailContainer addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} checkout={checkout} />} /> {/* Pasa la función checkout como una prop al componente Cart */}
                <Route path="/checkout" element={<Checkout cart={cartItems} />} />
            </Routes>
        </Router>
    );
}

export default App;
