import styled from "styled-components";

export const StyledMusicButton = styled.button`
  color: #454545;
  /*  box-shadow: 0px 35px 68px 0px rgba(255, 165, 89, 0.5),
    inset 0px -5px 16px 0px rgba(255, 165, 89, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255); */
  backdrop-filter: blur(3px);
  border: 3px solid #454545;
  border-radius: 25%;
  width: 4rem;
  height: 4rem;
  font-size: 1rem;
  background-color: ${({ decrease }) => (decrease ? "#FFA559" : "#FF6000")};

  &:visited {
    font-size: 5rem;
  }
  &:hover {
    cursor: url("/cursor-blur-s.png"), auto;
  }
  &:active {
    cursor: url("/cursor-trans-s.png"), auto;
  }
  &:disabled {
    color: #454545;
    background-image: linear-gradient(120deg, #ffe6c7 0%, #fda085 100%);
  }
`;
