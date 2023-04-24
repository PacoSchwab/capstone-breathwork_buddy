import styled, { css } from "styled-components";

export const StyledRoundContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${(iceBathing) =>
    iceBathing &&
    css`
      justify-content: flex-start;
      margin-left: 0.5rem;
    `};
  justify-content: space-between;
  column-gap: 3.5rem;
  width: 100%;
`;
