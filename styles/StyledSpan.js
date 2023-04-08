import styled from "styled-components";

export const StyledSpan = styled.span`
  margin-top: 0;
  margin-bottom: 0;
  font-size: ${({ tripleCount }) => (tripleCount ? "6rem" : "1rem")};
`;
