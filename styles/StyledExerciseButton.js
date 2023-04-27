import styled from "styled-components";

export const StyledExerciseButton = styled.button`
  position: relative;
  background: none;
  border: none;
  padding: 0;
  width: 6rem;
  height: 6rem;
  @media (min-width: 375px) {
    width: 7rem;
    height: 7rem;
  }
  @media (min-width: 425px) {
    width: 8rem;
    height: 8rem;
  }
  @media (min-width: 768px) {
    width: 10rem;
    height: 10rem;
  }
  max-height: 100vw;

  border-radius: 50%;
  box-shadow: 5px 10px 7.5px #ffa559;
  &:hover {
    cursor: url("/images/cursor-blur-s.png"), auto;
  }
  &:active {
    cursor: url("/images/cursor-trans-s.png"), auto;
  }
`;
