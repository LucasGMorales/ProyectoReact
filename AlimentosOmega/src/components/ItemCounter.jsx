import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';
import { Item } from "./Item";

export const ItemCounter = ({ onAdd, stock, initial }) => {
    const [quantity, setQuantity] = useState(initial);

    const increase = () => {
        if (stock > quantity) {
            setQuantity((prev) => prev + 1);
        }
    };

    const decrease = () => {
        if (quantity > 1) {
            setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
        }
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value, 10) || 1;
        setQuantity(value);
    };

    const handleAdd = () => {
        onAdd(quantity);
        setQuantity(initial);
        Swal.fire(
            `Agregaste el producto al carrito!`,
            '',
            'success'
        );
    };

    return (
        <InputGroup className="mb-3">
            <Button variant="outline-secondary" onClick={decrease}>
                -
            </Button>
            <FormControl
                value={quantity}
                onChange={handleChange}
                type="number"
                min="1"
                max={stock}
                className="text-center"
                style={{ width: "2rem" }}
            />
            <Button variant="outline-secondary" onClick={increase}>
                +
            </Button>
            <Button variant="primary" onClick={handleAdd}>
                Agregar al carrito
            </Button>
        </InputGroup>
    );
};
