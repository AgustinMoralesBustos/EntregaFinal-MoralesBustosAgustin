import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart/Cart';

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

      return (
            <Router>
                  <Navbar cartItemCount={cartItems.length} />
                  <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="category/:category" element={<ItemListContainer />}/>
                        <Route path="/producto/:id" element={<ItemDetailContainer addToCart={addToCart} />} />
                        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
                  </Routes>
            </Router>
      );
}

export default App;
