import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

const CartWidget = ({ itemCount }) => {
    return (
        <div className="cart-widget">
            <NavLink to="/cart" className="cart-link">
                <FaShoppingCart />
                {itemCount > 0 && <span className="item-count">{itemCount}</span>}
            </NavLink>
        </div>
    );
}

export default CartWidget;
