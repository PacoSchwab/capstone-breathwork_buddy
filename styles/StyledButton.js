import styled from "styled-components";

export const StyledButton = styled.button`
  color: #454545;
  box-shadow: 0px 35px 68px 0px rgba(255, 165, 89, 0.5),
    inset 0px -5px 16px 0px rgba(255, 165, 89, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
  backdrop-filter: blur(3px);
  border: 3px solid #454545;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  font-size: ${({ isActive, isRetentionFinished, retention, iceBath }) =>
    isActive || isRetentionFinished
      ? "6rem"
      : retention || iceBath
      ? "3rem"
      : "2rem"};
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
