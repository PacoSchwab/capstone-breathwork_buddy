import styled from "styled-components";

export const StyledQuote = styled.p`
  color: #601493;
  font: var(--font-body2);
  margin: 0 3rem 0 1rem;

  animation: roll 2s ease 0s 1 normal forwards;

  @keyframes roll {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
`;
