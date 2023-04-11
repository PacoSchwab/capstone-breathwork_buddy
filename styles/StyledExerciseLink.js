import styled, { css } from "styled-components";

export const StyledExerciseLink = styled.a`
  align-self: ${({ second }) => (second ? "flex-start" : "none")};
  width: 100%;
`;
