import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (

        <header>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand><NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>Alimentos omega</NavLink></Navbar.Brand>
                    <Nav className="ms-auto"> 
                        <NavLink to="Category/harinas" style={{ color: 'white', textDecoration: 'none' }} className="me-3">Harinas</NavLink>
                        <NavLink to="Category/semillas" style={{ color: 'white', textDecoration: 'none' }} className="me-3">Semillas</NavLink>
                        <NavLink to="Category/snacks" style={{ color: 'white', textDecoration: 'none' }} className="me-3">Snacks</NavLink>
                        <NavLink to="Category/fideos" style={{ color: 'white', textDecoration: 'none' }} className="me-5">Fideos</NavLink>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </header>

    );

}
