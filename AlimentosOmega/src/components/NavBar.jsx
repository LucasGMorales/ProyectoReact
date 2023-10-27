import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (

        <header>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Alimentos Omega</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Frutos Secos</Nav.Link>
                        <Nav.Link href="#features">Harinas</Nav.Link>
                        <Nav.Link href="#pricing">Leches</Nav.Link>
                    </Nav><CartWidget />
                </Container>
            </Navbar>
        </header>


    );

}