import { useEffect } from "react";

const useClearAudio = (
  stopCounter,
  stopCounterMusic,
  stopRetentionMusic,
  stopCountdown,
  stopCountdownMusic,
  stopTripleCounter,
  stopTripleCounterMusic
) => {
  useEffect(() => {
    function handlePopState() {
      stopCounter();
      stopCounterMusic();
      stopRetentionMusic();
      stopCountdown();
      stopCountdownMusic();
      stopTripleCounter();
      stopTripleCounterMusic();
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
    stopTripleCounter,
    stopTripleCounterMusic,
  ]);
};
export default useClearAudio;
