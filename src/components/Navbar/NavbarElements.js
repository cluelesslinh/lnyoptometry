import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
color: black;
list-style: none;
text-decoration: none;
letter-spacing: 0.25em;
font-weight: 500;
font-size: 11.5px;
padding: 0 0 0 1.5rem;
cursor: pointer;
&.hover {
	opacity: .7;
};
&.active {
	opacity: .4;
};
@media screen and (max-width: 768px) {
	padding: .7em 0 .7em 0;
}
`;