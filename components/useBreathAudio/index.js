import { useEffect } from "react";

const useBreathAudio = (
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
) => {
  useEffect(() => {
    if (isBreathActive) {
      stopCountdown();
      stopCountdownMusic();
      playCounter();
      playCounterMusic();
    }
    if (showRetentionCounter) {
      stopCounter();
      stopCounterMusic();
      playRetentionMusic();
    }
    if (isRetentionFinished) {
      stopRetentionMusic();
      playCountdown();
      playCountdownMusic();
    }
  }, [isBreathActive, showRetentionCounter, isRetentionFinished]);
};
export default useBreathAudio;
