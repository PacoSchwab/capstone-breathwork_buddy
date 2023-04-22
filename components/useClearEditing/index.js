import { useEffect } from "react";

const useClearEditing = (resetIsEditingActive) => {
  useEffect(() => {
    function handlePopState() {
      resetIsEditingActive();
    }

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [resetIsEditingActive]);
};
export default useClearEditing;
