import { useEffect } from "react";
import { useRouter } from "next/router";
import { StyledCounterSection } from "../../styles/StyledCounterSection";
import useAudio from "../useAudio";
import useLocalStore from "../useLocalStore";
import useStore from "../useStore";
import useBreathAudio from "../useBreathAudio";
import useVolumeControl from "../useVolumeControl";
import useClearAudio from "../useClearAudio";
import useTimeFormatter from "../useTimeFormatter";
import AudioControl from "../AudioControl";
import MusicControl from "../MusicControl";
import FlowCounter from "../FlowCounter";
import CounterButton from "../CounterButton";

export default function Counter({ breathIntervalDelay }) {
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
    audio,
    music,
    playGong,
  } = useAudio({ breathIntervalDelay });

  const addStoredTime = useLocalStore((state) => state.addStoredTime);
  const breathCount = useStore((state) => state.breathCount);
  const isBreathActive = useStore((state) => state.isBreathActive);
  const breathIntervalId = useStore((state) => state.breathIntervalId);
  const showRetentionCounter = useStore((state) => state.showRetentionCounter);
  const retentionCount = useStore((state) => state.retentionCount);
  const retentionIntervalId = useStore((state) => state.retentionIntervalId);
  const isRetentionFinished = useStore((state) => state.isRetentionFinished);
  const breathHoldCountdown = useStore((state) => state.breathHoldCountdown);
  const breathHoldIntervalId = useStore((state) => state.breathHoldIntervalId);
  const flowCounter = useStore((state) => state.flowCounter);
  const savedRetentionCount = useStore((state) => state.savedRetentionCount);
  const increaseBreathCount = useStore((state) => state.increaseBreathCount);
  const increaseRetentionCount = useStore(
    (state) => state.increaseRetentionCount
  );
  const decreaseBreathHoldCountdown = useStore(
    (state) => state.decreaseBreathHoldCountdown
  );
  const addBreathIntervalId = useStore((state) => state.addBreathIntervalId);
  const addRetentionIntervalId = useStore(
    (state) => state.addRetentionIntervalId
  );
  const addBreathHoldIntervalId = useStore(
    (state) => state.addBreathHoldIntervalId
  );
  const switchIsBreathActive = useStore((state) => state.switchIsBreathActive);
  const switchIsRetentionFinished = useStore(
    (state) => state.switchIsRetentionFinished
  );
  const switchShowRetentionCounter = useStore(
    (state) => state.switchShowRetentionCounter
  );
  const resetBreathHoldCountdown = useStore(
    (state) => state.resetBreathHoldCountdown
  );
  const resetBreathCount = useStore((state) => state.resetBreathCount);
  const resetRetentionCount = useStore((state) => state.resetRetentionCount);
  const increaseFlowCounter = useStore((state) => state.increaseFlowCounter);

  useClearAudio(
    stopCounter,
    stopCounterMusic,
    stopRetentionMusic,
    stopCountdown,
    stopCountdownMusic
  );

  useEffect(() => {
    let breathInterval;
    let retentionInterval;
    let breathHoldInterval;
    if (isBreathActive) {
      breathInterval = setInterval(() => {
        if (breathCount === 40) {
          switchIsBreathActive(false);
          switchShowRetentionCounter(true);

          const retentionInterval = setInterval(() => {
            increaseRetentionCount();
          }, 1000);

          addRetentionIntervalId(retentionInterval);
        } else {
          return increaseBreathCount();
        }
      }, breathIntervalDelay);
      addBreathIntervalId(breathInterval);
    }
    if (isRetentionFinished) {
      switchShowRetentionCounter(false);
      breathHoldInterval = setInterval(() => {
        decreaseBreathHoldCountdown();
      }, 100);
      addBreathHoldIntervalId(breathHoldInterval);
    }

    if (breathHoldCountdown === 0) {
      switchIsRetentionFinished(false);
      increaseFlowCounter();
      if (flowCounter < 2) {
        handleCounterRepeat();
      } else {
        router.push("/success");
        playGong();
      }
    }

    return () => {
      clearInterval(breathInterval);
      clearInterval(retentionInterval);
      clearInterval(breathHoldInterval);
    };
  }, [
    breathCount,
    isBreathActive,
    isRetentionFinished,
    breathHoldCountdown,
    savedRetentionCount,
  ]);

  useBreathAudio(
    isBreathActive,
    showRetentionCounter,
    isRetentionFinished,
    playCounter,
    playCounterMusic,
    stopCounter,
    stopCounterMusic,
    playRetentionMusic,
    stopRetentionMusic,
    playCountdown,
    stopCountdown,
    playCountdownMusic,
    stopCountdownMusic
  );

  const handleCounterRepeat = () => {
    resetBreathCount();
    switchIsBreathActive(true);
    resetRetentionCount(0);
    switchIsRetentionFinished(false);
    resetBreathHoldCountdown();
  };

  const handleBreathClick = () => {
    if (isBreathActive) {
      clearInterval(breathIntervalId);
      switchIsBreathActive(false);
      resetBreathCount();
    } else {
      switchIsBreathActive(true);
    }
  };

  const handleRetentionCounterClick = () => {
    clearInterval(retentionIntervalId);
    resetRetentionCount();
    switchIsRetentionFinished(true);
    addStoredTime(retentionCount);
  };

  const {
    handleIncreaseAudioVolume,
    handleDecreaseAudioVolume,
    handleIncreaseMusicVolume,
    handleDecreaseMusicVolume,
  } = useVolumeControl({ audio, music });

  const { displayTime } = useTimeFormatter(retentionCount);

  return (
    <>
      <StyledCounterSection>
        <AudioControl
          audio={audio}
          handleIncreaseAudioVolume={handleIncreaseAudioVolume}
          handleDecreaseAudioVolume={handleDecreaseAudioVolume}
        />
        <CounterButton
          handleBreathClick={handleBreathClick}
          handleRetentionCounterClick={handleRetentionCounterClick}
          isBreathActive={isBreathActive}
          showRetentionCounter={showRetentionCounter}
          isRetentionFinished={isRetentionFinished}
          breathHoldCountdown={breathHoldCountdown}
          breathCount={breathCount}
          displayTime={displayTime}
        />
        <MusicControl
          music={music}
          handleIncreaseMusicVolume={handleIncreaseMusicVolume}
          handleDecreaseMusicVolume={handleDecreaseMusicVolume}
        />
      </StyledCounterSection>
      <FlowCounter />
    </>
  );
}
