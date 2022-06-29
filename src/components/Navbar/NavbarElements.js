import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
height: 100%;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1.5rem 0 1.5rem 0;
z-index: 12;
`;

export const LNYlogo = styled.nav`
padding: 0 0 0 5rem;
`

export const NavLink = styled(Link)`
color: #000000;
display: flex;
align-items: center;
text-decoration: none;
text-transform: uppercase;
letter-spacing: 0.25em;
font-weight: 500;
font-size: 11.5px;
padding: 0 2rem 0 0;
cursor: pointer;
&.active {
	opacity: .4;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
width: 60%;
height: 100%;
justify-content: flex-end;
flex-wrap: wrap;
align-items: center;
padding: 0 4rem 0 0;
a:hover {
    opacity: .7;
}
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;