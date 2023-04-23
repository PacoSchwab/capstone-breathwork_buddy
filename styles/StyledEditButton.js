import styled from "styled-components";

export const StyledEditButton = styled.button`
  color: #454545;
  box-shadow: 0px 35px 68px 0px rgba(255, 165, 89, 0.5),
    inset 0px -5px 16px 0px rgba(255, 165, 89, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
  backdrop-filter: blur(3px);
  border: 3px solid #454545 outset;
  border-radius: 25%;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  transition: all 0.2s ease-in-out;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  width: 3.8rem;
  margin: 0.1rem 0.1rem;
  box-shadow: 0px 35px 68px 0px rgba(255, 165, 89, 0.5);
  &:hover {
    transform: scale(1.05);
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 26px;
    box-shadow: 35px 35px 68px 0px rgba(145, 192, 255, 0.5),
      inset -8px -8px 16px 0px rgba(145, 192, 255, 0.6),
      inset 0px 11px 28px 0px rgb(255, 255, 255);
  }
  &:active {
    opacity: 0.5;
  }
`;
