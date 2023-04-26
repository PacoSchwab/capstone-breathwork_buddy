import styled from "styled-components";
import { StyledSlideAnimation } from "../../styles/StyledSlideAnimation";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${StyledSlideAnimation} 1s ease 0s 1 normal forwards;
`;

export default function Layout({ children }) {
  return (
    <>
      <StyledMain>{children}</StyledMain>
    </>
  );
}
