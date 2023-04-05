import { useState, useEffect } from "react";
import styled from "styled-components";

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

export default function Counter({ breathIntervalDelay }) {
  const [breathCount, setBreathCount] = useState(0);
  const [isBreathActive, setIsBreathActive] = useState(false);
  const [breathIntervalId, setBreathIntervalId] = useState(null);
  const [showRetentionCounter, setShowRetentionCounter] = useState(false);
  const [retentionCount, setRetentionCount] = useState(0);
  const [retentionIntervalId, setRetentionIntervalId] = useState(null);

  useEffect(() => {
    let breathInterval;
    if (isBreathActive) {
      const breathInterval = setInterval(() => {
        setBreathCount((prevCount) => {
          if (prevCount === 40) {
            clearInterval(breathInterval);
            setIsBreathActive(false);
            setShowRetentionCounter(true);
            return prevCount;
          }
          return prevCount + 1;
        });
      }, breathIntervalDelay);
      setBreathIntervalId(breathInterval);
    }
    return () => clearInterval(breathInterval);
  }, [isBreathActive]);

  useEffect(() => {
    if (breathCount === 40) {
      const retentionInterval = setInterval(() => {
        setRetentionCount((prevCount) => prevCount + 1);
      }, 1000);
      setRetentionIntervalId(retentionInterval);
    }
    return () => clearInterval(retentionIntervalId);
  }, [breathCount]);

  const handleBreathClick = () => {
    if (isBreathActive) {
      clearInterval(breathIntervalId);
      setIsBreathActive(false);
      setBreathCount(0);
    } else {
      setIsBreathActive(true);
    }
  };

  const handleRetentionCounterClick = () => {
    clearInterval(retentionIntervalId);
    setRetentionCount(0);
  };

  const formattedTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const minutes = Math.floor(retentionCount / 60);
  const seconds = retentionCount % 60;
  const displayTime = `${formattedTime(minutes)}:${formattedTime(seconds)}`;

  return (
    <>
      {showRetentionCounter ? (
        <StyledButton onClick={handleRetentionCounterClick}>
          {displayTime}
        </StyledButton>
      ) : (
        <StyledButton
          isActive={isBreathActive}
          onClick={handleBreathClick}
          disabled={isBreathActive}
        >
          {isBreathActive
            ? `${breathCount}`
            : breathCount === 40
            ? ""
            : "Click and breathe"}
        </StyledButton>
      )}
    </>
  );
}
