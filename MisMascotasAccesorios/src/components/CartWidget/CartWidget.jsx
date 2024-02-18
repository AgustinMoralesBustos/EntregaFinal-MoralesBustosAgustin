import React from 'react'
import { BsCart } from "react-icons/bs";

const CartWidget = () => {
    return (
        <div className='container'>
            <button>
                <BsCart />
            </button>
        </div>
    )
}

export default CartWidget;