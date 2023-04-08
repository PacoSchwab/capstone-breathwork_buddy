import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { StyledButton } from "../../styles/StyledButton";
import { StyledSpan } from "../../styles/StyledSpan";
import { StyledInstruction2 } from "../../styles/StyledInstruction2";
import { StyledRoundCounter } from "../../styles/StyledRoundCounter";

export default function TripleCounter() {
  const [tripleCounterOne, setTripleCounterOne] = useState(4);
  const [tripleCounterTwo, setTripleCounterTwo] = useState(7);
  const [tripleCounterThree, setTripleCounterThree] = useState(8);
  const [isTripleCounterOneActive, setIsTripleCounterOneActive] =
    useState(false);
  const [isTripleCounterTwoActive, setIsTripleCounterTwoActive] =
    useState(false);
  const [isTripleCounterThreeActive, setIsTripleCounterThreeActive] =
    useState(false);
  const [tripleCounterOneIntervalId, setTripleCounterOneIntervalId] =
    useState(null);
  const [tripleCounterTwoIntervalId, setTripleCounterTwoIntervalId] =
    useState(null);
  const [tripleCounterThreeIntervalId, setTripleCounterThreeIntervalId] =
    useState(null);
  const [roundCounter, setRoundCounter] = useState(0);

  const router = useRouter();

  useEffect(() => {
    let tripleCounterOneInterval;
    if (isTripleCounterOneActive) {
      const tripleCounterOneInterval = setInterval(() => {
        setTripleCounterOne((prevCount) => {
          if (prevCount === 0) {
            clearInterval(tripleCounterOneInterval);
            setIsTripleCounterOneActive(false);
            setIsTripleCounterTwoActive(true);

            return prevCount;
          }
          return prevCount - 1;
        });
      }, 1000);
      setTripleCounterOneIntervalId(tripleCounterOneInterval);
    }
    return () => clearInterval(tripleCounterOneInterval);
  }, [isTripleCounterOneActive]);

  useEffect(() => {
    let tripleCounterTwoInterval;
    if (isTripleCounterTwoActive) {
      const tripleCounterTwoInterval = setInterval(() => {
        setTripleCounterTwo((prevCount) => {
          if (prevCount === 0) {
            clearInterval(tripleCounterTwoInterval);
            setIsTripleCounterTwoActive(false);
            setIsTripleCounterThreeActive(true);
            return prevCount;
          }
          return prevCount - 1;
        });
      }, 1000);
      setTripleCounterTwoIntervalId(tripleCounterTwoInterval);
    }
    return () => clearInterval(tripleCounterTwoInterval);
  }, [isTripleCounterTwoActive]);

  useEffect(() => {
    let tripleCounterThreeInterval;
    if (isTripleCounterThreeActive) {
      const tripleCounterThreeInterval = setInterval(() => {
        setTripleCounterThree((prevCount) => {
          if (prevCount === 0) {
            clearInterval(tripleCounterThreeInterval);
            setIsTripleCounterThreeActive(false);
            handleTripleCounterRepeat();
            return prevCount;
          }
          return prevCount - 1;
        });
      }, 1000);
      setTripleCounterThreeIntervalId(tripleCounterThreeInterval);
    }
    return () => clearInterval(tripleCounterThreeInterval);
  }, [isTripleCounterThreeActive]);

  const handleTripleCounterRepeat = () => {
    setTripleCounterOne(4);
    setTripleCounterTwo(7);
    setTripleCounterThree(8);
    setIsTripleCounterOneActive(true);
    setIsTripleCounterTwoActive(false);
    setIsTripleCounterThreeActive(false);
  };

  useEffect(() => {
    if (isTripleCounterOneActive) {
      setRoundCounter((prevCount) => prevCount + 1);
    }
  }, [isTripleCounterOneActive]);

  return (
    <>
      <StyledButton
        onClick={() =>
          isTripleCounterOneActive ||
          isTripleCounterTwoActive ||
          isTripleCounterThreeActive
            ? router.push("/success")
            : setIsTripleCounterOneActive(true)
        }
      >
        {isTripleCounterThreeActive ? (
          <StyledSpan tripleCount>
            <StyledInstruction2>Exhale</StyledInstruction2>
            {tripleCounterThree}
          </StyledSpan>
        ) : isTripleCounterTwoActive ? (
          <StyledSpan tripleCount>
            <StyledInstruction2>Hold breath</StyledInstruction2>
            {tripleCounterTwo}
          </StyledSpan>
        ) : isTripleCounterOneActive ? (
          <StyledSpan tripleCount>
            <StyledInstruction2>Inhale</StyledInstruction2>
            {tripleCounterOne}
          </StyledSpan>
        ) : (
          "Click and breathe"
        )}
      </StyledButton>
      <StyledRoundCounter>Round {roundCounter}</StyledRoundCounter>
    </>
  );
}
