import { useEffect } from "react";

const useClearTimer = (
  resetIceBathCount,
  switchIceBathCountIsActive,
  resetIceBathCountdown,
  switchIceBathCountdownIsActive,
  iceBathIntervalId,
  iceBathCountdownIntervalId
) => {
  useEffect(() => {
    function handlePopState() {
      resetIceBathCount();
      switchIceBathCountIsActive(false);
      resetIceBathCountdown();
      switchIceBathCountdownIsActive(false);
      clearInterval(iceBathIntervalId);
      clearInterval(iceBathCountdownIntervalId);
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
