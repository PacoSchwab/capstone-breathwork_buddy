import styled from "styled-components";

export const StyledMusicButton = styled.button`
  animation: roll 1s ease 0s 1 normal forwards;
  @keyframes roll {
    0% {
      opacity: 0;
      transform: translateX(-250px) rotate(-200deg);
    }

    100% {
      opacity: 1;
      transform: translateX(0) rotate(0deg);
    }
  }
  color: #454545;
  backdrop-filter: blur(3px);
  border: 3px solid #454545 outset;
  border-radius: 25%;
  width: 4rem;
  height: 4rem;
  font: var(--font-body2);
  font-size: 1.5rem;
  padding: 0;
  background-color: ${({ decrease }) => (decrease ? "#FFA559" : "#FF6000")};
  box-shadow: 5px 10px 7.5px #ffa559;

  &:visited {
    font-size: 5rem;
  }
  &:hover {
    cursor: url("/images/cursor-blur-s.png"), auto;
  }
  &:active {
    cursor: url("/images/cursor-trans-s.png"), auto;
    box-shadow: 0px 35px 68px 0px rgba(255, 165, 89, 0.5);
    opacity: 0.8;
    border: dotted;
  }
  &:disabled {
    color: #454545;
    background-image: linear-gradient(120deg, #ffe6c7 0%, #fda085 100%);
  }
`;
