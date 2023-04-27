import { useEffect } from "react";

const useClearTimer = (
  resetIceBathCount,
  switchIceBathCountIsActive,
  resetIceBathCountdown,
  switchIceBathCountdownIsActive,
  iceBathIntervalId,
  iceBathCountdownIntervalId,
  tripleCounterOneIntervalId,
  tripleCounterTwoIntervalId,
  tripleCounterThreeIntervalId,
  resetTripleCounters,
  switchIsTripleCounterOneActive,
  switchIsTripleCounterTwoActive,
  switchIsTripleCounterThreeActive
) => {
  useEffect(() => {
    function handlePopState() {
      resetIceBathCount();
      switchIceBathCountIsActive(false);
      resetIceBathCountdown();
      switchIceBathCountdownIsActive(false);
      clearInterval(iceBathIntervalId);
      clearInterval(iceBathCountdownIntervalId);
      resetTripleCounters();
      switchIsTripleCounterOneActive(false);
      switchIsTripleCounterTwoActive(false);
      switchIsTripleCounterThreeActive(false);
      clearInterval(tripleCounterOneIntervalId);
      clearInterval(tripleCounterTwoIntervalId);
      clearInterval(tripleCounterThreeIntervalId);
    }

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [
    resetIceBathCount,
    resetIceBathCountdown,
    switchIceBathCountIsActive,
    switchIceBathCountdownIsActive,
    iceBathIntervalId,
    iceBathCountdownIntervalId,
  ]);
};
export default useClearTimer;
