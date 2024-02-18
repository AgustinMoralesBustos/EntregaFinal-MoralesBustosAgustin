// app.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetail';

function App() {
      return (
            <Router>
                  <Navbar />
                  <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route path="/producto/:id" element={<ItemDetail />} />
                  </Routes>
            </Router>
      );
}

export default App;