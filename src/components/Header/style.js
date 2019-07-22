import styled from "styled-components";
import img from "../../img/showcase1.jpg";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      145deg,
      rgba(23, 197, 210, 0.6) 0%,
      rgba(124, 43, 231, 0.6) 100%
    ),
    url(${img});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  ${({ theme }) => theme.media.phone} {
    margin-bottom: 1rem;
  }
`;

export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.color.light};
  font-size: 2.5rem;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2), 2px 4px 2px rgba(0, 0, 0, 0.1);
`;

export const HeaderInfo = styled.p`
  text-align: center;
  margin: 2rem 0;
  color: ${({ theme }) => theme.color.light};
  font-size: 1.5rem;
`;
