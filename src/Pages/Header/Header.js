import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineComment } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { adminLogout } from '../../Redux/User/userAction';

export const Header = () => {
    const { adminUser } = useSelector((state) => state.admin);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handelOnLogout = (e) => {
        e.preventDefault();
        if (window.confirm('Are you sure you want to logout?')) {
            dispatch(adminLogout());
        }
        navigate('/login')
    };

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{
            backgroundColor: '#20262e'
        }}>
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
                        {adminUser?._id ?
                            (
                                <>
                                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                    <Nav.Link as={Link} to="/login" onClick={handelOnLogout}>Logout</Nav.Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                </>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}
