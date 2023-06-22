import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <Navbar className="border bg-opacity-75" bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to={'/ '}>Recetas</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink end className='nav-item nav-link' to='/'>Inicio</NavLink>
                        <NavLink end className='nav-item nav-link' to='/administrador'>Administrador</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;