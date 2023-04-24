import styled, { css } from "styled-components";

export const StyledRoundContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  ${(iceBathing) =>
    iceBathing &&
    css`
      justify-content: flex-start;
      margin-left: 0.5rem;
    `};
  column-gap: 3.5rem;
  width: 100%;
`;
