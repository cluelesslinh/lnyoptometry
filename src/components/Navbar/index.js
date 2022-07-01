import React from "react";
import { NavLink } from "./navbarElements";
import "./navbar.css";

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="/"><img src={process.env.PUBLIC_URL + "/images/LNYoptometry.jpg"} alt="lny - logo - img" width="100"
                /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/" activeStyle>
                                HOME
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/services" activeStyle>
                                SERVICES
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/payment-options" activeStyle>
                                PAYMENT OPTIONS
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/contact" activeStyle>
                                CONTACT
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/our-doctors" activeStyle>
                                OUR DOCTORS
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/gallery" activeStyle>
                                GALLERY
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/reviews" activeStyle>
                                REVIEWS
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    );
};

export default Navbar;
