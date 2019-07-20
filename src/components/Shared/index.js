import styled from "styled-components";

export const Paragraph = styled.p`
  text-align: center;
  color: ${props => props.color};
  margin: ${props => props.margin};
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
`;

export const H1 = styled(Paragraph)`
  font-size: 2rem;
  font-weight: bold;
`;

export const H2 = styled(Paragraph)`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const H3 = styled(Paragraph)`
  font-size: 1.17rem;
  font-weight: bold;
`;

export const H4 = styled(Paragraph)`
  font-weight: bold;
`;

export const Section = styled.div`
  height: 60%;
  width: 60%;
  margin: 5% 20%;

  ${({ theme }) => theme.media.phone} {
    width: 100%;
    margin: 20% 0;
  }
`;

export const SectionBackground = styled.div`
  height: 60%;
  width: 100%;
  padding: 5%;
  background: linear-gradient(
      145deg,
      rgba(23, 197, 210, 0.8) 0%,
      rgba(124, 43, 231, 0.8) 100%
    ),
    url(${props => props.background});
  background-size: cover;
  background-position: center;

  ${({ theme }) => theme.media.phone} {
    width: 98%;
    padding: 1%;
  }
`;

export const SectionGrid = styled.div`
  width: 80%;
  margin: 4rem 10% 0 10%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 5%;

  ${({ theme }) => theme.media.phone} {
    width: 90%;
    margin: 4rem 5% 0 5%;
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  padding: 2.5rem 1rem;
`;

export const Separator = styled.div`
  background: ${props => props.color};
  height: 2px;
  width: 10%;
  margin: 0 auto 2rem auto;
`;
