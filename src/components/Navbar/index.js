import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavBrand, NavLink } from './NavbarElements';
import './navbar.css';

const LNYnavbar = () => {
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand="md" className="mb-3md">
                    <Container fluid>
                        <NavBrand><Navbar.Brand href="/"><img src={process.env.PUBLIC_URL + "/images/LNYoptometry.jpg"} alt="lny - logo - img" width="100"
                        /></Navbar.Brand></NavBrand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3 nav-item">
                                    <NavLink reloadDocument to="/">HOME</NavLink>
                                    <NavLink reloadDocument to="/services">SERVICES</NavLink>
                                    <NavLink reloadDocument to="/payment-options">PAYMENT OPTIONS</NavLink>
                                    <NavLink reloadDocument to="/contact">CONTACT</NavLink>
                                    <NavLink reloadDocument to="/our-doctors">OUR DOCTORS</NavLink>
                                    <NavLink reloadDocument to="/gallery">GALLERY</NavLink>
                                    <NavLink reloadDocument to="/reviews">REVIEWS</NavLink>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))
            }
        </>
    );
};

export default LNYnavbar;