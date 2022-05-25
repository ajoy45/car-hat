import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../Images/Logo/logo1.png";
import "./Header.css";
function Header() {
    return (
        <>
            <Navbar bg="success" variant="dark" style={{height:"45px"}} >
                <Container>
                    <Link to="/" >
                        <img style={{width:"100px"}} src={logo} alt="" />
                    </Link>
                    <Nav className="ms-5">
                        <Link className='text-white' to="/">Home</Link>
                        <Link className='text-white' to="/about">About</Link>
                    </Nav>
                </Container>
            </Navbar>

        

        </>
    );
}

export default Header;