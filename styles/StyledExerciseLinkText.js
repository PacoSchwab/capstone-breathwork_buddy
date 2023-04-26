import styled from "styled-components";

export const StyledExerciseLinkText = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-45%, -60%);
  color: #ffe6c7;
  text-shadow: 0 0 0.5rem #000;
  font: var(--font-headline3);

  @media (min-width: 175px) {
    font-size: 1rem;
  }

  @media (min-width: 320px) {
    font-size: 1rem;
  }

  @media (min-width: 375px) {
    font-size: 1.2rem;
  }

  @media (min-width: 425px) {
    font-size: 1.3rem;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;
