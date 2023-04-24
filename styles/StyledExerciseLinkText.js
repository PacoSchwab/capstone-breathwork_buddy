import styled from "styled-components";

export const StyledExerciseLinkText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-45%, -60%);
  color: #ffe6c7;
  text-shadow: 0 0 0.5rem #000;
  font-size: 1rem;

  @media (min-width: 375px) {
    font-size: 1rem;
  }

  @media (min-width: 425px) {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;
