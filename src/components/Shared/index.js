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

  ${({ theme }) => theme.media.phone} {
    font-size: 1.17rem;
  }
`;

export const H2 = styled(Paragraph)`
  font-size: 1.5rem;
  ${({ theme }) => theme.media.phone} {
    font-size: 1.17rem;
  }
`;

export const H3 = styled(Paragraph)`
  font-size: 1.17rem;
`;

export const H4 = styled(Paragraph)`
  font-weight: bold;
`;

export const Button = styled.button`
  display: block;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.dark};
  margin: ${props => props.marginY} ${props => props.marginX};
  padding: 1rem 4rem;
  border: 0;
  border-radius: 20px;
  margin-bottom: 0.3rem;
  background: ${({ theme }) => theme.color.light};
  transition: all 0.3s ease-out;

  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }

  &:focus {
    outline: 0;
  }
`;

export const ButtonPrimary = styled(Button)`
  color: ${({ theme }) => theme.color.light};
  background: ${({ theme }) => theme.color.primary};
`;

export const Section = styled.div`
  height: 60%;
  width: 60%;
  margin: 5% 20%;
  ${({ theme }) => theme.media.phone} {
    width: 100%;
    margin: 20% 0 10% 0;
  }
`;

export const SectionBackground = styled.div`
  height: 60%;
  width: 100%;
  padding: 10% 20% 5% 20%;
  background: linear-gradient(
      145deg,
      rgba(23, 197, 210, 0.8) 0%,
      rgba(124, 43, 231, 0.8) 100%
    ),
    url(${props => props.background});
  background-size: cover;
  background-position: center;

  ${({ theme }) => theme.media.phone} {
    padding: 20% 0.5rem 5% 0.5rem;
  }
`;

export const SectionGrid = styled.div`
  width: 100%;
  margin: 3rem auto 0 auto;
  display: grid;
  grid-template-columns: ${props => props.columns};
  grid-column-gap: 1rem;
  justify-content: center;
  ${({ theme }) => theme.media.phone} {
    width: 100%;
    margin: 3rem 0 1rem 0;
    padding: 0;
    grid-template-columns: 1fr;
  }
  ${({ theme }) => theme.media.tablet} {
    width: 100%;
    margin: 3rem 0 1rem 0;
    padding: 0;
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  padding: 2.5rem 1rem;

  ${({ theme }) => theme.media.phone} {
    padding: 1rem 0;
  }
`;

export const Separator = styled.div`
  background: ${props => props.color};
  height: 1px;
  width: 7%;
  margin: 1.5rem auto;

  ${({ theme }) => theme.media.phone} {
    width: 20%;
  }
`;

export const SeparatorWide = styled(Separator)`
  background: ${props => props.color};
  height: 1px;
  width: 100%;
  margin: 4rem auto 1rem auto;

  ${({ theme }) => theme.media.phone} {
    margin-top: 1rem;
    width: 40%;
  }
`;
