import styled, { keyframes } from "styled-components";

const rotateIn = keyframes`
  from {
    transform: rotate(-360deg) scale(0);
    opacity: 0;
  }
  to {
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }
`;

export const StyledFabUl = styled.ul`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  transition: right 3s ease-in-out;
  animation: ${rotateIn} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  margin-left: -5.7rem;
`;
