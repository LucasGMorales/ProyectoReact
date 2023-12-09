import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import cart from '../img/cart.png';

export const CartWidget = () => {
    const { items } = useContext(CartContext);

    const total = items.reduce((acumulador, item) => acumulador + item.quantity, 0);

    return (
        <NavLink to="/carrito" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div>
                <img src={cart} alt="Carrito" width={40} />
                <span>{total}</span>
            </div>
        </NavLink>
    );
};
