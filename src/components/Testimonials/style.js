import styled from "styled-components";

export const ClientCard = styled.div`
  padding: 1rem;
  background: #fff;
  height: auto;
  width: 550px;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.media.phone} {
    width: 100%;
    margin-bottom: 2rem;
  }
  ${({ theme }) => theme.media.tablet} {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const ClientImage = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-radius: 50%;
  src: ${props => props.src};
`;
