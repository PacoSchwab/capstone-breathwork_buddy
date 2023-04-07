import { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

export const StyledButton = styled.button`
  color: #454545;
  box-shadow: 0px 35px 68px 0px rgba(255, 165, 89, 0.5),
    inset 0px -5px 16px 0px rgba(255, 165, 89, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
  backdrop-filter: blur(3px);
  border: 3px solid #454545;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  font-size: ${({ isActive, isRetentionFinished, retention }) =>
    isActive || isRetentionFinished ? "6rem" : retention ? "3rem" : "2rem"};
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);

  &:visited {
    font-size: 5rem;
  }
  &:hover {
    cursor: url("/cursor-blur-s.png"), auto;
  }
  &:active {
    cursor: url("/cursor-trans-s.png"), auto;
  }
  &:disabled {
    color: #454545;
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  }
`;

const StyledInstruction = styled.p`
  color: #454545;
  font-size: 1rem;
  margin-bottom: 0;
`;

const StyledInstruction2 = styled.p`
  color: #454545;
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0;
`;

export default function Counter({ breathIntervalDelay }) {
  const [breathCount, setBreathCount] = useState(0);
  const [isBreathActive, setIsBreathActive] = useState(false);
  const [breathIntervalId, setBreathIntervalId] = useState(null);
  const [showRetentionCounter, setShowRetentionCounter] = useState(false);
  const [retentionCount, setRetentionCount] = useState(0);
  const [retentionIntervalId, setRetentionIntervalId] = useState(null);
  const [isRetentionFinished, setIsRetentionFinished] = useState(false);
  const [breathHoldCountdown, setBreathHoldCountdown] = useState(15);
  const [breathHoldIntervalId, setBreathHoldIntervalId] = useState(null);
  const [flowCounter, setFlowCounter] = useState(0);

  const router = useRouter();

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

  useEffect(() => {
    if (isRetentionFinished) {
      setShowRetentionCounter(false);
      const breathHoldInterval = setInterval(() => {
        setBreathHoldCountdown((prevCount) => prevCount - 1);
      }, 1000);
      setBreathHoldIntervalId(breathHoldInterval);
    }
    return () => clearInterval(breathHoldIntervalId);
  }, [isRetentionFinished]);

  const handleCounterRepeat = () => {
    setBreathCount(0);
    setIsBreathActive(true);
    setRetentionCount(0);
    setIsRetentionFinished(false);
    setBreathHoldCountdown(15);
  };

  useEffect(() => {
    if (breathHoldCountdown === 0) {
      setIsRetentionFinished(false);
      clearInterval(breathHoldIntervalId);
      setFlowCounter((prevCount) => prevCount + 1);
      if (flowCounter < 2) {
        handleCounterRepeat();
      } else {
        router.push("/success");
      }
    }
  }, [breathHoldCountdown]);

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
    setIsRetentionFinished(true);
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
        <StyledButton onClick={handleRetentionCounterClick} retention>
          <StyledInstruction2>Hold breath</StyledInstruction2> {displayTime}
        </StyledButton>
      ) : isRetentionFinished ? (
        <StyledButton isRetentionFinished={isRetentionFinished}>
          <StyledInstruction>Hold breath</StyledInstruction>{" "}
          {breathHoldCountdown}
        </StyledButton>
      ) : (
        <StyledButton
          isActive={isBreathActive}
          onClick={handleBreathClick}
          disabled={isBreathActive}
        >
          {isBreathActive ? (
            <span>
              <StyledInstruction>Breathe</StyledInstruction> {breathCount}
            </span>
          ) : breathCount === 40 ? (
            ""
          ) : (
            "Click and breathe"
          )}
        </StyledButton>
      )}
    </>
  );
}
