import { useEffect } from "react";
import { useRouter } from "next/router";
import { StyledRoundCounter } from "../../styles/StyledRoundCounter";
import { StyledCounterSection } from "../../styles/StyledCounterSection";
import useAudio from "../useAudio";
import useVolumeControl from "../useVolumeControl";
import useClearAudio from "../useClearAudio";
import AudioControl from "../AudioControl";
import MusicControl from "../MusicControl";
import useStore from "../useStore";
import TripleCounterButton from "../TripleCounterButton";

export default function TripleCounter({ breathIntervalDelay }) {
  const router = useRouter();

  const {
    playTripleCounter,
    stopTripleCounter,
    playTripleCounterMusic,
    stopTripleCounterMusic,
    audio,
    music,
    playGong,
  } = useAudio({ breathIntervalDelay });

  const tripleCounterOne = useStore((state) => state.tripleCounterOne);
  const tripleCounterTwo = useStore((state) => state.tripleCounterTwo);
  const tripleCounterThree = useStore((state) => state.tripleCounterThree);
  const isTripleCounterOneActive = useStore(
    (state) => state.isTripleCounterOneActive
  );
  const isTripleCounterTwoActive = useStore(
    (state) => state.isTripleCounterTwoActive
  );
  const isTripleCounterThreeActive = useStore(
    (state) => state.isTripleCounterThreeActive
  );
  const tripleCounterOneIntervalId = useStore(
    (state) => state.tripleCounterOneIntervalId
  );
  const tripleCounterTwoIntervalId = useStore(
    (state) => state.tripleCounterTwoIntervalId
  );
  const tripleCounterThreeIntervalId = useStore(
    (state) => state.tripleCounterThreeIntervalId
  );
  const roundCounter = useStore((state) => state.roundCounter);
  const switchIsTripleCounterOneActive = useStore(
    (state) => state.switchIsTripleCounterOneActive
  );
  const switchIsTripleCounterTwoActive = useStore(
    (state) => state.switchIsTripleCounterTwoActive
  );
  const switchIsTripleCounterThreeActive = useStore(
    (state) => state.switchIsTripleCounterThreeActive
  );
  const decreaseTripleCounterOne = useStore(
    (state) => state.decreaseTripleCounterOne
  );
  const decreaseTripleCounterTwo = useStore(
    (state) => state.decreaseTripleCounterTwo
  );
  const decreaseTripleCounterThree = useStore(
    (state) => state.decreaseTripleCounterThree
  );
  const addTripleCounterOneIntervalId = useStore(
    (state) => state.addTripleCounterOneIntervalId
  );
  const addTripleCounterTwoIntervalId = useStore(
    (state) => state.addTripleCounterTwoIntervalId
  );
  const addTripleCounterThreeIntervalId = useStore(
    (state) => state.addTripleCounterThreeIntervalId
  );
  const increaseRoundCounter = useStore((state) => state.increaseRoundCounter);
  const resetTripleCounters = useStore((state) => state.resetTripleCounters);

  useClearAudio(stopTripleCounter, stopTripleCounterMusic);

  useEffect(() => {
    let tripleCounterOneInterval;
    let tripleCounterTwoInterval;
    let tripleCounterThreeInterval;
    if (isTripleCounterOneActive) {
      tripleCounterOneInterval = setInterval(() => {
        if (tripleCounterOne === 0) {
          switchIsTripleCounterOneActive(false);
          switchIsTripleCounterTwoActive(true);
          playTripleCounterMusic();
          return tripleCounterOne;
        }
        return decreaseTripleCounterOne();
      }, 1000);
      addTripleCounterOneIntervalId(tripleCounterOneInterval);
    }

    if (isTripleCounterTwoActive) {
      tripleCounterTwoInterval = setInterval(() => {
        if (tripleCounterTwo === 0) {
          switchIsTripleCounterTwoActive(false);
          switchIsTripleCounterThreeActive(true);
          return tripleCounterTwo;
        }
        return decreaseTripleCounterTwo();
      }, 1000);
      addTripleCounterTwoIntervalId(tripleCounterTwoInterval);
    }

    if (isTripleCounterThreeActive) {
      tripleCounterThreeInterval = setInterval(() => {
        if (tripleCounterThree === 0) {
          switchIsTripleCounterThreeActive(false);
          handleTripleCounterRepeat();
          return tripleCounterThree;
        }
        return decreaseTripleCounterThree();
      }, 1000);
      addTripleCounterThreeIntervalId(tripleCounterThreeInterval);
    }

    return () => {
      clearInterval(tripleCounterOneInterval);
      clearInterval(tripleCounterTwoInterval);
      clearInterval(tripleCounterThreeInterval);
    };
  }, [
    isTripleCounterOneActive,
    tripleCounterOne,
    isTripleCounterTwoActive,
    tripleCounterTwo,
    isTripleCounterThreeActive,
    tripleCounterThree,
  ]);

  const handleTripleCounterRepeat = () => {
    resetTripleCounters();
    switchIsTripleCounterOneActive(true);
    switchIsTripleCounterTwoActive(false);
    switchIsTripleCounterThreeActive(false);
    playTripleCounter();
    increaseRoundCounter();
  };

  const {
    handleIncreaseAudioVolume,
    handleDecreaseAudioVolume,
    handleIncreaseMusicVolume,
    handleDecreaseMusicVolume,
  } = useVolumeControl({ audio, music });

  return (
    <>
      <StyledCounterSection>
        <AudioControl
          audio={audio}
          handleIncreaseAudioVolume={handleIncreaseAudioVolume}
          handleDecreaseAudioVolume={handleDecreaseAudioVolume}
        />
        <TripleCounterButton
          stopTripleCounterMusic={stopTripleCounterMusic}
          playTripleCounterMusic={playTripleCounterMusic}
          stopTripleCounter={stopTripleCounter}
          playTripleCounter={playTripleCounter}
          playGong={playGong}
          isTripleCounterOneActive={isTripleCounterOneActive}
          isTripleCounterTwoActive={isTripleCounterTwoActive}
          isTripleCounterThreeActive={isTripleCounterThreeActive}
          tripleCounterOne={tripleCounterOne}
          tripleCounterTwo={tripleCounterTwo}
          tripleCounterThree={tripleCounterThree}
          switchIsTripleCounterOneActive={switchIsTripleCounterOneActive}
          router={router}
        />
        <MusicControl
          music={music}
          handleIncreaseMusicVolume={handleIncreaseMusicVolume}
          handleDecreaseMusicVolume={handleDecreaseMusicVolume}
        />
      </StyledCounterSection>
      <StyledRoundCounter>Round {roundCounter}</StyledRoundCounter>
    </>
  );
}
