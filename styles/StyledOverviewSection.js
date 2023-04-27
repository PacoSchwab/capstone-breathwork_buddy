import styled from "styled-components";

export const StyledOverviewSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 35vh;
  @media (min-width: 375px) {
    height: 42vh;
    width: 30%;
  }
  @media (min-width: 414px) {
    height: 42vh;
    width: 25%;
  }
  @media (min-width: 425px) {
    height: 42vh;
    width: 20%;
  }
  @media (min-width: 768px) {
    height: 50vh;
    width: 20%;
  }
  margin-top: 5rem;
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
`;
