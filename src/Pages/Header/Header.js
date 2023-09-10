import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineComment } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Header = () => {
    const { adminUser } = useSelector((state) => state.admin);

    const handelOnLogout = () => {
        alert('You clicked logout button')
    };
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand className='d-flex justify-content-between align-items-center text-center gap-2'>
                    <Nav.Link as={Link} to="/"><AiOutlineComment size={28} /> ECOM</Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>

                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        {adminUser?._id && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        <Nav.Link as={Link} to="/register" onClick={handelOnLogout}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}
