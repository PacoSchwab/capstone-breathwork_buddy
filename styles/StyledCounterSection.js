import styled from "styled-components";
import { StyledSlideAnimation } from "./StyledSlideAnimation";

export const StyledCounterSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 7rem;
  @media (min-height: 850px) {
    margin-top: 13rem;
  }
  margin-bottom: 1.2rem;
  animation: ${StyledSlideAnimation} 1s ease 0s 1 normal forwards;
`;
