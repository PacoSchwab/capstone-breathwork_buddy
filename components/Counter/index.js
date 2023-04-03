import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: #454545;
  border: none;
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
  const [intervalId, setIntervalId] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    const newIntervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 40) {
          clearInterval(newIntervalId);
          setIntervalId(null);
          setIsActive(false);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, timerDelay);
    setIntervalId(newIntervalId);
    setIsActive(true);
  };

  return (
    <>
      <StyledButton
        isActive={isActive}
        onClick={handleClick}
        disabled={intervalId !== null}
      >
        {isActive ? `${count}` : "Click and breathe"}
      </StyledButton>
    </>
  );
}
