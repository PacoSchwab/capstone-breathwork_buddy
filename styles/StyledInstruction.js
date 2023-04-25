import styled from "styled-components";

export const StyledInstruction = styled.p`
  color: #454545;
  margin-top: ${({ success }) => (success ? "3rem" : "0")};
  margin-bottom: 0;
  font: ${({ big }) => (big ? "var(--font-body1)" : "var(--font-body2)")};
`;
