import styled from "styled-components";

export const StyledFabButton = styled.button`
  position: fixed;
  bottom: 1.1rem;
  right: 1.1rem;
  width: 4rem;
  @media (min-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
  @media (min-width: 1024px) {
    width: 7rem;
    height: 7rem;
  }
  height: 4rem;
  border-radius: 50%;
  background-color: #ffe6c7;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 10px 7.5px #ffa559;
  &:hover {
    cursor: url("/images/cursor-blur-s.png"), auto;
  }
  &:active {
    cursor: url("/images/cursor-trans-s.png"), auto;
  }
`;
