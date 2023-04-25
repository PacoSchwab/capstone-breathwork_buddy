import styled from "styled-components";

export const StyledFabLi = styled.li`
  width: 3rem;
  height: 3rem;
  border-radius: 40%;
  margin: 0 10px;
  transition: transform 0.3s ease-in-out;
  color: #454545;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 26px;
  box-shadow: 35px 35px 68px 0px rgba(255, 255, 255, 0.5),
    inset -8px -8px 16px 0px rgba(255, 255, 255, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
  transition: all 0.2s ease-in-out;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  width: 3.8rem;
  margin: 0.1rem 0.1rem;
  box-shadow: 0px 35px 68px 0px rgba(255, 165, 89, 0.5);

  &:hover {
    transform: scale(1.2);
    cursor: url("/images/cursor-blur-s.png"), auto;
  }
  &:active {
    cursor: url("/images/cursor-trans-s.png"), auto;
    transform: scale(1.2);
    opacity: 0.5;
  }
`;
