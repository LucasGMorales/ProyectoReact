import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({ item }) => {
    return (
        <Card style={{ width: '15rem' }} className="mx-4">
            <Card.Img
                variant="top"
                src={item.pictureUrl}
                style={{ width: '100%', height: '150px' }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <div className="mt-auto text-center">
                    <Link to={`/items/${item.id}`}>
                        <Button variant="primary">Ver Producto</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};
