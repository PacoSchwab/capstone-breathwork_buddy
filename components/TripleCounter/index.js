import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { StyledButton } from "../../styles/StyledButton";
import { StyledSpan } from "../../styles/StyledSpan";
import { StyledInstruction2 } from "../../styles/StyledInstruction2";
import { StyledRoundCounter } from "../../styles/StyledRoundCounter";
import { StyledMusicButton } from "../../styles/StyledMusicButton";
import { StyledCounterSection } from "../../styles/StyledCounterSection";
import { StyledVolumeControl } from "../../styles/StyledVolumeControl";
import useAudio from "../useAudio";

export default function TripleCounter({ breathIntervalDelay }) {
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

  const {
    playTripleCounter,
    stopTripleCounter,
    playTripleCounterMusic,
    stopTripleCounterMusic,
    audioVolume,
    setAudioVolume,
    musicVolume,
    setMusicVolume,
    playGong,
  } = useAudio({ breathIntervalDelay });

  useEffect(() => {
    function handlePopState() {
      stopTripleCounter();
      stopTripleCounterMusic();
    }

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [stopTripleCounter, stopTripleCounterMusic]);

  useEffect(() => {
    let tripleCounterOneInterval;
    if (isTripleCounterOneActive) {
      const tripleCounterOneInterval = setInterval(() => {
        setTripleCounterOne((prevCount) => {
          if (prevCount === 0) {
            clearInterval(tripleCounterOneInterval);
            setIsTripleCounterOneActive(false);
            setIsTripleCounterTwoActive(true);
            playTripleCounterMusic();

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
    playTripleCounter();
  };

  const handleIncreaseAudioVolume = () => {
    setAudioVolume(audioVolume + 0.1);
  };

  const handleDecreaseAudioVolume = () => {
    setAudioVolume(audioVolume - 0.1);
  };

  const handleIncreaseMusicVolume = () => {
    setMusicVolume(musicVolume + 0.1);
  };

  const handleDecreaseMusicVolume = () => {
    setMusicVolume(musicVolume - 0.1);
  };

  useEffect(() => {
    if (isTripleCounterOneActive) {
      setRoundCounter((prevCount) => prevCount + 1);
    }
  }, [isTripleCounterOneActive]);

  return (
    <>
      <StyledCounterSection>
        <StyledVolumeControl>
          <StyledMusicButton
            onClick={handleIncreaseAudioVolume}
            disabled={audioVolume >= 1}
          >
            Voice +
          </StyledMusicButton>
          <StyledMusicButton
            onClick={handleDecreaseAudioVolume}
            disabled={audioVolume <= 0}
            decrease
          >
            Voice -
          </StyledMusicButton>
        </StyledVolumeControl>
        <StyledButton
          onClick={() =>
            isTripleCounterOneActive ||
            isTripleCounterTwoActive ||
            isTripleCounterThreeActive
              ? (router.push("/success"),
                stopTripleCounter(),
                stopTripleCounterMusic(),
                playGong())
              : (setIsTripleCounterOneActive(true),
                playTripleCounterMusic(),
                playTripleCounter())
          }
        >
          {isTripleCounterThreeActive ? (
            <StyledSpan>
              <StyledInstruction2>Exhale</StyledInstruction2>
              {tripleCounterThree}
            </StyledSpan>
          ) : isTripleCounterTwoActive ? (
            <StyledSpan>
              <StyledInstruction2>Hold breath</StyledInstruction2>
              {tripleCounterTwo}
            </StyledSpan>
          ) : isTripleCounterOneActive ? (
            <StyledSpan>
              <StyledInstruction2>Inhale</StyledInstruction2>
              {tripleCounterOne}
            </StyledSpan>
          ) : (
            "Click and breathe"
          )}
        </StyledButton>
        <StyledVolumeControl>
          <StyledMusicButton
            onClick={handleIncreaseMusicVolume}
            disabled={musicVolume >= 1}
          >
            Music +
          </StyledMusicButton>
          <StyledMusicButton
            onClick={handleDecreaseMusicVolume}
            disabled={musicVolume <= 0}
            s
            decrease
          >
            Music -
          </StyledMusicButton>
        </StyledVolumeControl>
      </StyledCounterSection>
      <StyledRoundCounter>Round {roundCounter}</StyledRoundCounter>
    </>
  );
}
