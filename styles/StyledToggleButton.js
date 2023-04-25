import styled from "styled-components";

export const StyledToggleButton = styled.button`
  color: #454545;
  padding: 0.2rem 1rem;
  backdrop-filter: blur(3px);
  border: ${({ disabled }) => (disabled ? "none" : "3px solid #454545 outset")};
  border-radius: 25%;
  background-image: linear-gradient(120deg, #ffa559 0%, #ffe6c7 100%);
  box-shadow: ${({ disabled }) =>
    disabled ? "none" : "0px 35px 68px 0px rgba(255, 165, 89, 0.5)"};
  background-color: ${({ disabled }) => (disabled ? "#ffe6c7" : "none")};
  background-image: ${({ disabled }) =>
    disabled ? "none" : "linear-gradient(120deg, #ffa559 0%, #ffe6c7 100%)"};
  margin: 0 0.5rem;
  width: 19rem;
`;
