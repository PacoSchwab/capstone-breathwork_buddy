import styled, { css } from "styled-components";

export const StyledRoundContainer = styled.div`
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
