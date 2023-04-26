import styled from "styled-components";

export const StyledExerciseButton = styled.button`
  position: relative;
  background: none;
  border: none;
  padding: 0;
  width: 100%;
  border-radius: 50%;
  box-shadow: 5px 10px 7.5px #ffa559;
  &:hover {
    cursor: url("/images/cursor-blur-s.png"), auto;
  }
  &:active {
    cursor: url("/images/cursor-trans-s.png"), auto;
  }
`;
