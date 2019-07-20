import styled from "styled-components";

export const NavList = styled.ul`
  margin-left: auto;
  padding-right: 20%;
  list-style: none;
  color: ${props => props.textColor};
`;

export const NavItem = styled.li`
  display: inline;
  padding: 1rem;
`;
