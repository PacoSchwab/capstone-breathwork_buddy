import styled from "styled-components";

export const StyledButton = styled.button`
  animation: ${({ isActive, isPowerBreathing }) =>
    isActive && isPowerBreathing
      ? "pulse 2000ms ease 0s 41 normal forwards"
      : isActive
      ? "pulse 3500ms ease 0s 41 normal forwards"
      : "glowing 1300ms infinite"};
  @keyframes pulse {
    0% {
      animation-timing-function: ease-out;
      transform: scale(1);
      transform-origin: center center;
    }

    10% {
      animation-timing-function: ease-in;
      transform: scale(0.91);
    }

    17% {
      animation-timing-function: ease-out;
      transform: scale(0.98);
    }

    33% {
      animation-timing-function: ease-in;
      transform: scale(0.87);
    }

    45% {
      animation-timing-function: ease-out;
      transform: scale(1);
    }
  }

  @keyframes glowing {
    0% {
      background-color: #f6d365;
      box-shadow: 0 0 5px #f6d365;
    }
    50% {
      background-color: #fda085;
      box-shadow: 0 0 20px #fda085;
    }
    100% {
      background-color: #f6d365;
      box-shadow: 0 0 5px #f6d365;
    }
  }
  color: #454545;
  box-shadow: 0px 35px 68px 0px rgba(255, 165, 89, 0.5),
    inset 0px -5px 16px 0px rgba(255, 165, 89, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
  backdrop-filter: blur(3px);
  border: 3px solid #454545 outset;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  font: var(--font-body1);
  font-size: ${({ isActive, isRetentionFinished, retention, iceBath }) =>
    isActive
      ? "1.5rem"
      : retention || iceBath
      ? "3rem"
      : isRetentionFinished
      ? "5rem"
      : "2rem"};
  padding: 0;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  margin: 0 2rem;

  &:visited {
    font-size: 5rem;
  }
  &:hover {
    cursor: url("/images/cursor-blur-s.png"), auto;
  }
  &:active {
    cursor: url("/images/cursor-trans-s.png"), auto;
  }
  &:disabled {
    color: #454545;
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  }
`;
