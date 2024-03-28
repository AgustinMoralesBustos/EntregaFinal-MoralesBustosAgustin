// ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const { category } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            const productosCollection = collection(db, 'productos');
            let filteredQuery = query(productosCollection);

            if (category) {
                filteredQuery = query(productosCollection, where("category", "==", category));
            }

            try {
                const querySnapshot = await getDocs(filteredQuery);
                const productosData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProductos(productosData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [category]);

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    if (error) {
        return <div>Error al cargar productos: {error.message}</div>;
    }

    return <ItemList productos={productos} />;
};

export default ItemListContainer;
