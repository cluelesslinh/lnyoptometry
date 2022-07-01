import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
width: 50%;
flex-wrap: wrap;
color: #000000;
text-decoration: none;
letter-spacing: 0.25em;
font-weight: 500;
font-size: 11.5px;
padding: 1rem 2rem 0 0;
cursor: pointer;
&.active {
	opacity: .4;
}
`;