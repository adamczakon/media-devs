import styled from "styled-components";

export const NavContainer = styled.div`
  color: #fff;
  position: fixed;
  width: 100%;
  height: ${props => props.height};
  background: ${props => props.navBackground};
  transition: all 0.4s;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.borderColor};
`;

export const NavHeader = styled.h2`
  color: ${props => props.textColor};
  margin-left: 20%;
`;
