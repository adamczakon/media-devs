import styled from "styled-components";

export const NavContainer = styled.div`
  color: #fff;
  position: fixed;
  width: 100%;
  padding: 0 20%;
  height: ${props => props.height};
  background: ${props => props.navBackground};
  transition: all 0.4s;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.borderColor};

  ${({ theme }) => theme.media.phone} {
    padding: 0 5%;
  }
`;

export const NavHeader = styled.h2`
  color: ${props => props.textColor};
`;

export const NavList = styled.ul`
  margin-left: auto;
  list-style: none;
  color: ${props => props.textColor};

  ${({ theme }) => theme.media.phone} {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: inline;
  padding: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export const MenuToggle = styled.button`
  ${({ theme }) => theme.media.phone} {
    display: block;
    margin-left: auto;
    background: transparent;
    border: none;
    outline: none;
  }

  display: none;
`;

export const ToggleLine = styled.div`
  margin-left: auto;
  background: ${props => props.color};
  height: 2px;
  width: 22px;
  margin-bottom: 0.25rem;
`;

export const SideMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 230px;
  z-index: 1010;
  transform: ${props => props.transform};
  transition: transform 0.3s ease-out;
  visibility: visible;
  background-color: ${({ theme }) => theme.color.light};
  border-top: none;
  text-align: left;
  border-left: 1px solid #e3e3e3;
  padding: 15px 15px 0 15px;
`;

export const MenuBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  z-index: 1000;
  background: linear-gradient(
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4)
  );
  transform: ${props => props.transform};
`;

export const SideList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => props.textColor};
`;

export const SideItem = styled.li`
  border-bottom: 1px solid #e3e3e3;
  padding: 1rem;
`;
