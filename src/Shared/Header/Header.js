import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../Images/Logo/logo1.png";
import "./Header.css";
function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky='top' >
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={50} width={50} src={logo}alt='logo'></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href='home#service'>Service</Nav.Link>
                            <Nav.Link href='home#expart'>Expart</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link}to='about'>About</Nav.Link>
                            <Nav.Link eventKey={2} as={Link}to='login'>
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </>
    );
}

export default Header;