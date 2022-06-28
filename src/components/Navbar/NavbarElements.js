import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
height: 100%;
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 1.75em;
margin-left: 5em;
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #000000;
display: flex;
align-items: center;
text-decoration: none;
text-transform: uppercase;
letter-spacing: 0.29em;
font-weight: 500;
font-size: 12.5px;
padding-bottom: .75rem;
padding-right: 2rem;
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
margin-top: 2.5rem;
margin-right: 9em;
align-items: center;
a:hover {
    opacity: .7;
}
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;