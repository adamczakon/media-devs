import styled from "styled-components";

export const Card = styled.div`
  padding: 1rem;
  background: #fff;
  height: 370px;
  width: 300px;
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

export const CardImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const CardDescription = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  src: ${props => props.src};
`;
