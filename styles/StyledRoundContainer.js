import styled, { css } from "styled-components";

export const StyledRoundContainer = styled.div`
  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
    width: 70%;
  }
  @media (min-width: 1440px) {
    width: 60%;
  }
  @media (min-width: 1920px) {
    width: 50%;
  }
  @media (min-width: 2560px) {
    width: 40%;
  }
  display: flex;
  ${(iceBathing) =>
    iceBathing &&
    css`
      justify-content: flex-start;
    `};
  justify-content: space-between;
  column-gap: 3.5rem;
  width: 100%;
`;
