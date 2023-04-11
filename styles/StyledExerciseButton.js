import styled from "styled-components";

export const StyledExerciseButton = styled.button`
  position: relative;
  background: none;
  border: none;
  padding: 0;
  width: 100%;
  &:hover {
    cursor: url("/images/cursor-blur-s.png"), auto;
  }
  &:active {
    cursor: url("/images/cursor-trans-s.png"), auto;
  }
`;
