import { useState, useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLocalStore = createLocalStorageStore(
  (set) => ({
    storedTimes: [],
    addStoredTime: (retentionCount) => {
      const now = new Date();
      const date = now.toISOString().slice(0, 10);
      const time = now.toTimeString().slice(0, 8);
      set((state) => ({
        storedTimes: [
          ...state.storedTimes,
          {
            date: date,
            time: time,
            retentionCount,
          },
        ],
      }));
    },
  }),
  "storedTimes"
);

export default useLocalStore;

function createLocalStorageStore(initialStore, name) {
  const useServerStore = create(initialStore);

  const useClientStore = create(persist(initialStore, { name }));

  function useStore(selector, compare) {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
      setHydrated(true);
    }, []);

    const clientStore = useClientStore(selector, compare);
    const serverStore = useServerStore(selector, compare);

    return hydrated ? clientStore : serverStore;
  }

  return useStore;
}
