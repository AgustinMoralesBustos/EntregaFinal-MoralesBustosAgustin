// // import React, { useState } from 'react';

// // const ItemDetail = ({ producto, onAddToCart }) => {
// //     const [quantity, setQuantity] = useState(1);

// //     const handleIncreaseQuantity = () => {
// //         if (quantity < producto.stock) {
// //             setQuantity(quantity + 1);
// //         }
// //     };

// //     const handleDecreaseQuantity = () => {
// //         if (quantity > 1) {
// //             setQuantity(quantity - 1);
// //         }
// //     };

// //     const handleAddToCart = () => {
// //         onAddToCart({ ...producto, quantity });
// //     };

// //     return (
// //         <div>
// //             <h2>{producto.title}</h2>
// //             <img src={producto.img} alt={producto.alt} />
// //             <p>{producto.description}</p>
// //             <p>Precio: ${producto.price}</p>
// //             <p>Stock disponible: {producto.stock}</p>
// //             <div>
// //                 <button onClick={handleDecreaseQuantity}>-</button>
// //                 <span>{quantity}</span>
// //                 <button onClick={handleIncreaseQuantity}>+</button>
// //             </div>
// //             <button onClick={handleAddToCart}>Agregar al carrito</button>
// //         </div>
// //     );
// // };

// // export default ItemDetail;
// // ItemDetail.jsx
// import React, { useState } from 'react';

// const ItemDetail = ({ producto, onAddToCart }) => {
//     const [quantity, setQuantity] = useState(1);

//     const handleIncreaseQuantity = () => {
//         if (quantity < producto.stock) {
//             setQuantity(quantity + 1);
//         }
//     };

//     const handleDecreaseQuantity = () => {
//         if (quantity > 1) {
//             setQuantity(quantity - 1);
//         }
//     };

//     const handleAddToCart = () => {
//         const quantityAsNumber = parseInt(quantity, 10); // Convertir quantity a número entero
//         onAddToCart({ ...producto, quantity: quantityAsNumber });
//     };

//     return (
//         <div>
//             <h2>{producto.title}</h2>
//             <img src={producto.img} alt={producto.alt} />
//             <p>{producto.description}</p>
//             <p>Precio: ${producto.price}</p>
//             <p>Stock disponible: {producto.stock}</p>
//             <div>
//                 <button onClick={handleDecreaseQuantity}>-</button>
//                 <span>{quantity}</span>
//                 <button onClick={handleIncreaseQuantity}>+</button>
//             </div>
//             <button onClick={handleAddToCart}>Agregar al carrito</button>
//         </div>
//     );
// };

// export default ItemDetail;
import React, { useState } from 'react';

const ItemDetail = ({ producto, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncreaseQuantity = () => {
        if (quantity < producto.stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        const totalPrice = producto.price * quantity;
        onAddToCart({ ...producto, quantity, totalPrice });
    };

    return (
        <div>
            <h2>{producto.title}</h2>
            <img src={producto.img} alt={producto.alt} />
            <p>{producto.description}</p>
            <p>Precio: ${producto.price}</p>
            <p>Stock disponible: {producto.stock}</p>
            <div>
                <button onClick={handleDecreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncreaseQuantity}>+</button>
            </div>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    );
};

export default ItemDetail;
