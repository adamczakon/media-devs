import styled from "styled-components";

export const Footer = styled.div`
  height: 50%vh;
  width: 100%;
  padding: 5% 20% 2% 20%;
  background: ${({ theme }) => theme.color.dark};
`;

export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.media.phone} {
    margin-bottom: 2rem;
  }
`;

export const ListHeader = styled.h3`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.color.light};
`;

export const List = styled.ul`
  list-style: none;
  color: ${({ theme }) => theme.color.secondary};
  ${({ theme }) => theme.media.phone} {
    text-align: center;
  }
`;

export const ListItem = styled.li`
  text-transform: capitalize;
  padding: 0.1rem 0;
  transition: all 0.3s ease-out;

  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`;
