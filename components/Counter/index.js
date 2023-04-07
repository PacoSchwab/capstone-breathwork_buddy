import { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { StyledButton } from "../../styles/StyledButton";
import { StyledInstruction } from "../../styles/StyledInstruction";
import { StyledInstruction2 } from "../../styles/StyledInstruction2";
import { StyledRoundCounter } from "../../styles/StyledRoundCounter";
import { StyledSpan } from "../../styles/StyledSpan";

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
          <StyledInstruction>Hold breath</StyledInstruction> {displayTime}
        </StyledButton>
      ) : isRetentionFinished ? (
        <StyledButton isRetentionFinished={isRetentionFinished}>
          <StyledInstruction2>Hold breath</StyledInstruction2>{" "}
          {breathHoldCountdown}
        </StyledButton>
      ) : (
        <StyledButton
          isActive={isBreathActive}
          onClick={handleBreathClick}
          disabled={isBreathActive}
        >
          {isBreathActive ? (
            <StyledSpan>
              <StyledInstruction>Breathe</StyledInstruction> {breathCount}
            </StyledSpan>
          ) : breathCount === 40 ? (
            ""
          ) : (
            "Click and breathe"
          )}
        </StyledButton>
      )}
      {flowCounter < 1 ? (
        <StyledRoundCounter>Round 1/3</StyledRoundCounter>
      ) : flowCounter < 2 ? (
        <StyledRoundCounter>Round 2/3</StyledRoundCounter>
      ) : (
        <StyledRoundCounter>Round 3/3</StyledRoundCounter>
      )}
    </>
  );
}
