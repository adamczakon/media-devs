import styled from "styled-components";
import img from "./showcase.jpg";

export default styled.div`
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
`;
