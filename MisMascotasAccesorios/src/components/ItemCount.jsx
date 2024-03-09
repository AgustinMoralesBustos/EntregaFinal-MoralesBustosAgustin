import React, { useState } from 'react';

export default function ItemCount({ stock, onAdd }) {
    const [count, setCount] = useState(1);

    const increment = () => {
        if (count < stock) setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    };

    const handleClick = () => {
        onAdd(count);
    };

    return (
        <div>
            <div>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={handleClick}>Agregar al carrito</button>
        </div>
    );
}
