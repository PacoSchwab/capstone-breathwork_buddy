import { useEffect } from "react";

const useLoading = (switchIsLoading, loadingDelay) => {
  useEffect(() => {
    const timer = setTimeout(() => switchIsLoading(false), loadingDelay);
    return () => clearTimeout(timer);
  }, []);
};
export default useLoading;
