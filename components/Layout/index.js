import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin: 0 auto;
`;

export default function Layout({ children }) {
  return (
    <>
      <StyledMain>{children}</StyledMain>
    </>
  );
}
