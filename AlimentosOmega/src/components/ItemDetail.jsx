import { useContext } from "react";
import { Card, Container } from "react-bootstrap";
import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../contexts/CartContext";

const ItemDetail = ({ item }) => {
    const { onAdd, updateStock } = useContext(CartContext);

    const add = (quantity) => {
        onAdd(item, quantity);
        updateStock(item.id, item.stock - quantity);
    };

    return (
        <Container className="d-flex align-items-center justify-content-center vh-100">
            <Card style={{ width: "25rem" }} className="text-center p-4 mt-4">
                <Card.Img variant="top" src={item.pictureUrl} />
                <Card.Body>
                    <h2 className="mb-4">{item.title}</h2>
                    <Card.Text className="mb-3">{item.description}</Card.Text>
                    <Card.Text className="mb-3">Precio: ${item.price}</Card.Text>
                    <Card.Text className="mb-3">Stock: {item.stock}</Card.Text>
                    <ItemCounter
                        onAdd={add}
                        stock={item.stock}
                        initial={1}
                    />
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ItemDetail;
