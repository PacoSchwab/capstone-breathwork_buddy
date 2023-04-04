import { useState, useEffect } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const StyledButton = styled.button`
  color: #454545;
  box-shadow: 0px 35px 68px 0px rgba(255, 165, 89, 0.5),
    inset 0px -5px 16px 0px rgba(255, 165, 89, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
  backdrop-filter: blur(3px);
  border: 3px solid #454545;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  font-size: ${({ isActive }) => (isActive ? "6rem" : "2rem")};
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  &:visited {
    font-size: 5rem;
  }
  &:disabled {
    color: #454545;
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  }
`;

export default function Counter({ timerDelay }) {
  const [count, setCount] = useState(0);

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    const breathInterval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 40) {
          clearInterval(breathInterval);

          setIsActive(false);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, timerDelay);

    setIsActive(true);
  };

  return (
    <>
      <StyledButton
        isActive={isActive}
        onClick={handleClick}
        disabled={isActive ? true : false}
      >
        {isActive ? `${count}` : "Click and breathe"}
      </StyledButton>
    </>
  );
}
