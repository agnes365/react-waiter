import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const NavBar = props => {
    return (

        <Navbar bg="primary" variant="dark" className="rounded">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Waiter.app</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;