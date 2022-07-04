import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from './NavbarElements';
import './navbar.css';

const LNYnavbar = () => {
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand="md" className="navbar mb-3md">
                    <Container fluid>
                        <Navbar.Brand className="navbar-brand" href="/"><img src={process.env.PUBLIC_URL + "/images/LNYoptometry.jpg"} alt="lny - logo - img" width="100"
                        /></Navbar.Brand>
                        <Navbar.Toggle className="custom-toggler fa fa-bars fa-lg text-dark" aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3 nav-item">
                                    <NavLink reloadDocument to="/">HOME</NavLink><hr></hr>
                                    <NavLink reloadDocument to="/services">SERVICES</NavLink><hr></hr>
                                    <NavLink reloadDocument to="/payment-options">PAYMENT OPTIONS</NavLink><hr></hr>
                                    <NavLink reloadDocument to="/contact">CONTACT</NavLink><hr></hr>
                                    <NavLink reloadDocument to="/our-doctors">OUR DOCTORS</NavLink><hr></hr>
                                    <NavLink reloadDocument to="/gallery">GALLERY</NavLink><hr></hr>
                                    <NavLink reloadDocument to="/reviews">REVIEWS</NavLink><hr></hr>
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