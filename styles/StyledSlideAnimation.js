import { keyframes } from "styled-components";

export const StyledSlideAnimation = keyframes`
0% {
      opacity: 0;
      transform: rotateX(70deg);
      transform-origin: top;
    }

    100% {
      opacity: 1;
      transform: rotateX(0deg);
      transform-origin: top;
    }
`;
