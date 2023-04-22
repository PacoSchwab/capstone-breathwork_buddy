import { useState, useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

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
            id: uuidv4(),
            date: date,
            time: time,
            retentionCount,
            isEditingRetentionTime: false,
          },
        ],
      }));
    },
    updateStoredTimes: (id, newRetentionCount) =>
      set((state) => ({
        storedTimes: state.storedTimes.map((storedTime) =>
          storedTime.id === id
            ? {
                ...storedTime,
                retentionCount: newRetentionCount,
              }
            : storedTime
        ),
      })),
    storedIceBathTimes: [],
    addStoredIceBathTime: (iceBathCount) => {
      const now = new Date();
      const date = now.toISOString().slice(0, 10);
      const time = now.toTimeString().slice(0, 8);
      set((state) => ({
        storedIceBathTimes: [
          ...state.storedIceBathTimes,
          {
            id: uuidv4(),
            date: date,
            time: time,
            iceBathCount,
            isEditingIceBathTime: false,
          },
        ],
      }));
    },
    updateStoredIceBathTimes: (id, newIceBathCount) =>
      set((state) => ({
        storedIceBathTimes: state.storedIceBathTimes.map((storedIceBathTime) =>
          storedIceBathTime.id === id
            ? {
                ...storedIceBathTime,
                iceBathCount: newIceBathCount,
              }
            : storedIceBathTime
        ),
      })),
    toggleIsEditingRetentionTime: (id) =>
      set((state) => ({
        storedTimes: state.storedTimes.map((storedTime) =>
          storedTime.id === id
            ? {
                ...storedTime,
                isEditingRetentionTime: !storedTime.isEditingRetentionTime,
              }
            : storedTime
        ),
      })),
    resetIsEditingRetentionTime: () =>
      set((state) => ({
        storedTimes: state.storedTimes.map((storedTime) => {
          return {
            ...storedTime,
            isEditingRetentionTime: false,
          };
        }),
      })),
    toggleIsEditingIceBathTime: (id) =>
      set((state) => ({
        storedIceBathTimes: state.storedIceBathTimes.map((storedIceBathTime) =>
          storedIceBathTime.id === id
            ? {
                ...storedIceBathTime,
                isEditingIceBathTime: !storedIceBathTime.isEditingIceBathTime,
              }
            : storedIceBathTime
        ),
      })),
    resetIsEditingIceBathTime: () =>
      set((state) => ({
        storedIceBathTimes: state.storedIceBathTimes.map(
          (storedIceBathTime) => {
            return {
              ...storedIceBathTime,
              isEditingIceBathTime: false,
            };
          }
        ),
      })),
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
