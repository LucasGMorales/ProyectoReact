
import React, { useContext, useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap/';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';
const initialValues = {
    name: "",
    phone: "",
    email: "",
}

export const Carrito = () => {
    const [buyer, setBuyer] = useState(initialValues);

    const { clear, items, updateQuantity, removeItem } = useContext(CartContext);

    const navigate = useNavigate();

    const total = items.reduce(
        (acumulador, valorActual) =>
            acumulador + (Number(valorActual.quantity) * Number(valorActual.item.price)) || 0, 0
    );

    const handleChange = (event) => {
        setBuyer((prevBuyer) => ({
            ...prevBuyer,
            [event.target.name]: event.target.value,
        }));
    }

    const sendOrder = () => {
        const order = {
            buyer,
            items,
            total,
        };


        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                Swal.fire({
                    title: '¡Gracias por tu compra!<br>Su orden: ' + id + '<br> ha sido completada!',
                    text: `Recibirás tu pedido en 48 horas. Debes abonarle al repartidor $${total}`,
                    imageUrl: 'https://media.tenor.com/aoU9vq-JavUAAAAM/driver-homer.gif',
                    imageWidth: 400,
                    imageHeight: 330,
                    imageAlt: 'Custom image',
                });
                setBuyer(initialValues);
                clear();
            }
        });
    }

    const submitOrder = (e) => {
        e.preventDefault();
        sendOrder();
    }

    if (!items.length) {
        return (
            <Container>
                <h2>No hay productos en el carrito</h2>
                <button onClick={() => navigate("/")}>Inicio</button>
            </Container>
        )
    }

    return (
        <Container className='mt-3'>
            <h1>Carrito de compras</h1>

            <ul>
                {items.map((item) => (
                    <li key={item.item.id} className="d-flex align-items-center">
                        <img src={item.item.pictureUrl} style={{ width: '3rem' }} alt={item.item.title} />
                        <div className="ms-2">
                            <h5>{item.item.title}</h5>
                            <h6>Precio: ${item.item.price}</h6>
                            <p>Cantidad:
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.item.id, parseInt(e.target.value))}
                                    className="form-control"
                                    style={{ width: '4rem', display: 'inline-block', marginLeft: '1rem' }}
                                    min="1"
                                    max={item.item.stock + 1}
                                />
                                <button onClick={() => removeItem(item.item.id)} className="btn btn-danger ms-2">
                                    Eliminar
                                </button>
                            </p>
                        </div>
                    </li>

                ))}
                <h2>{total}</h2>
            </ul>
            <button onClick={clear} className="btn btn-secondary">Vaciar carrito</button>

            <Form onSubmit={submitOrder}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={buyer.email} name='email' onChange={handleChange} placeholder="juanperez@hotmail.com" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control type="name" value={buyer.name} name='name' onChange={handleChange} placeholder="Juan Perez" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Numero Telefonico</Form.Label>
                    <Form.Control type="number" value={buyer.number} name='phone' onChange={handleChange} placeholder="11-XXXX-XXXX" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Comprar
                </Button>
            </Form>
        </Container>
        
    );
    
};
