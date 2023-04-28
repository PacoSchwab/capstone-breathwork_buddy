import styled from "styled-components";

export const StyledOverviewSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 35vh;
  margin-top: 5rem;
  @media (min-width: 375px) {
    height: 42vh;
    width: 28%;
  }
  @media (min-width: 768px) {
    height: 50vh;
    width: 25%;
  }
  @media (min-width: 1024px) {
    height: 60vh;
    width: 20%;
    margin-top: 8rem;
  }
  @media (min-height: 850px) {
    max-height: 350px;
    margin-top: 8rem;
  }

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
