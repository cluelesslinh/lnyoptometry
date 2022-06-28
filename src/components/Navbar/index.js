import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/payment-options" activeStyle>
                        Payment Options
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                    <NavLink to="/our-doctors" activeStyle>
                        Our Doctors
                    </NavLink>
                    <NavLink to="/gallery" activeStyle>
                        Gallery
                    </NavLink>
                    <NavLink to="/reviews" activeStyle>
                        Reviews
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
