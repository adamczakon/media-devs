import styled from "styled-components";

export const CooperationWrapper = styled.div`
  width: 100%;
  margin-bottom: 5%;

  ${({ theme }) => theme.media.phone} {
    margin-bottom: 10%;
  }
`;
