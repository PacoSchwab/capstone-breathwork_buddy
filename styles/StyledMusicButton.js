import styled from "styled-components";

export const StyledMusicButton = styled.button`
  color: #454545;

  backdrop-filter: blur(3px);
  border: 3px solid #454545 outset;
  border-radius: 25%;
  width: 4rem;
  height: 4rem;
  font: var(--font-body2);
  background-color: ${({ decrease }) => (decrease ? "#FFA559" : "#FF6000")};

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
