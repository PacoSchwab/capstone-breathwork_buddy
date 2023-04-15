import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { StyledButton } from "../../styles/StyledButton";
import { StyledInstruction } from "../../styles/StyledInstruction";
import { StyledInstruction2 } from "../../styles/StyledInstruction2";
import { StyledRoundCounter } from "../../styles/StyledRoundCounter";
import { StyledSpan } from "../../styles/StyledSpan";
import { StyledCounterSection } from "../../styles/StyledCounterSection";
import { StyledVolumeControl } from "../../styles/StyledVolumeControl";
import { StyledMusicButton } from "../../styles/StyledMusicButton";
import useAudio from "../useAudio";
import useLocalStorageState from "use-local-storage-state";
import useStore from "../useStore";

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
  const [savedRetentionCount, setSavedRetentionCount] = useState(null);
  /*   const [storedTimes, setStoredTimes] = useLocalStorageState("storedTimes", {
    defaultValue: [],
  }); */

  const router = useRouter();

  const {
    playCounter,
    stopCounter,
    playCounterMusic,
    stopCounterMusic,
    playRetentionMusic,
    stopRetentionMusic,
    playCountdown,
    stopCountdown,
    playCountdownMusic,
    stopCountdownMusic,
    audioVolume,
    setAudioVolume,
    musicVolume,
    setMusicVolume,
    playGong,
  } = useAudio({ breathIntervalDelay });

  const storedTimes = useStore((state) => state.storedTimes);
  const addStoredTime = useStore((state) => state.addStoredTime);

  useEffect(() => {
    function handlePopState() {
      stopCounter();
      stopCounterMusic();
      stopRetentionMusic();
      stopCountdown();
      stopCountdownMusic();
    }

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [
    stopCounter,
    stopCounterMusic,
    stopRetentionMusic,
    stopCountdown,
    stopCountdownMusic,
  ]);

  useEffect(() => {
    let breathInterval;
    if (isBreathActive) {
      const breathInterval = setInterval(() => {
        setBreathCount((prevCount) => {
          if (prevCount === 40) {
            clearInterval(breathInterval);
            setIsBreathActive(false);
            setShowRetentionCounter(true);
            stopCounter();
            stopCounterMusic();
            return prevCount;
          }
          return prevCount + 1;
        });
      }, breathIntervalDelay);
      setBreathIntervalId(breathInterval);
      playCounter();
      playCounterMusic();
    }
    return () => clearInterval(breathInterval);
  }, [isBreathActive]);

  useEffect(() => {
    if (breathCount === 40) {
      const retentionInterval = setInterval(() => {
        setRetentionCount((prevCount) => prevCount + 1);
      }, 1000);
      setRetentionIntervalId(retentionInterval);
      playRetentionMusic();
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
      playCountdown();
      playCountdownMusic();
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
        playGong();
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
    stopRetentionMusic();
    saveRetentionTime();
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

  const formattedTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const minutes = Math.floor(retentionCount / 60);
  const seconds = retentionCount % 60;
  const displayTime = `${formattedTime(minutes)}:${formattedTime(seconds)}`;

  const saveRetentionTime = () => {
    setSavedRetentionCount(retentionCount);
  };

  const date = { time: new Date() };

  useEffect(() => {
    if (savedRetentionCount !== null) {
      addStoredTime(savedRetentionCount);
      setSavedRetentionCount(null);
    }
  }, [savedRetentionCount]);

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
        {showRetentionCounter ? (
          <StyledButton onClick={handleRetentionCounterClick} retention>
            <StyledInstruction>Hold breath</StyledInstruction> {displayTime}
          </StyledButton>
        ) : isRetentionFinished ? (
          <StyledButton isRetentionFinished>
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
              <StyledSpan firstCounter>
                <StyledInstruction>Breathe</StyledInstruction> {breathCount}
              </StyledSpan>
            ) : breathCount === 40 ? (
              ""
            ) : (
              "Click and breathe"
            )}
          </StyledButton>
        )}
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
            decrease
          >
            Music -
          </StyledMusicButton>
        </StyledVolumeControl>
      </StyledCounterSection>
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
