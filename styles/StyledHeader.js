import styled from "styled-components";

export const StyledHeader = styled.h1`
  top: 0;
  width: 100%;
  margin: 0;
  padding: 0.75rem;
  font: var(--font-headline1);
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  border-radius: 0% 0% 20% 20%;
  color: #454545;
  box-shadow: 5px 10px 7.5px #ffa559;
  text-shadow: 2px 2px 3px #777;
  z-index: 1;
  ::before {
    content: url("/images/purplesmokelogo.png");
    margin: 0 auto;
  }
`;
