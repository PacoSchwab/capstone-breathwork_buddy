import create from "zustand";
import { persist } from "zustand/middleware";

const useTimeStore = create((set) => {
  return {
    storedTimes: [],
    setStoredTimes: (date, savedRetentionCount) => {
      set((state) => {
        return {
          storedTimes: [...state.storedTimes, { date, savedRetentionCount }],
        };
      });
    },
  };
});

export default useTimeStore;

/* export const useTimeStore = create(
  persist(
    (set, get) => ({
      storedTimes: [],
      setStoredTimes: () =>
        set([{ bears: get().storedTimes, date, savedRetentionCount }]),
    }),
    {
      name: "storedTimes", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
 */
