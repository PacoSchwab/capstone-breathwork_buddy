import { useEffect } from "react";

const useLoading = (switchIsLoading) => {
  useEffect(() => {
    const timer = setTimeout(() => switchIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
};
export default useLoading;
