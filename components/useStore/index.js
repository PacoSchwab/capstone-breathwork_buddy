import { create } from "zustand";

const useStore = create((set) => ({
  breathCount: 0,
  isBreathActive: false,
  breathIntervalId: null,
  showRetentionCounter: false,
  retentionCount: 0,
  retentionIntervalId: null,
  isRetentionFinished: false,
  breathHoldCountdown: 15,
  breathHoldIntervalId: null,
  flowCounter: 0,
  savedRetentionCount: null,
  tripleCounterOne: 4,
  tripleCounterTwo: 7,
  tripleCounterThree: 8,
  isTripleCounterOneActive: false,
  isTripleCounterTwoActive: false,
  isTripleCounterThreeActive: false,
  tripleCounterOneIntervalId: null,
  tripleCounterTwoIntervalId: null,
  tripleCounterThreeIntervalId: null,
  roundCounter: 1,
  isLoading: true,
  iceBathCount: 0,
  iceBathCountIsActive: false,
  iceBathCountdownIsActive: false,
  iceBathCountdown: 10,
  iceBathCountdownIntervalId: null,
  isPowerBreathing: false,
  isMenuOpen: false,
  increaseBreathCount: () =>
    set((state) => ({
      breathCount: state.breathCount + 1,
    })),
  increaseRetentionCount: () =>
    set((state) => ({
      retentionCount: state.retentionCount + 1,
    })),
  decreaseBreathHoldCountdown: () =>
    set((state) => ({
      breathHoldCountdown: state.breathHoldCountdown - 1,
    })),
  addBreathIntervalId: (id) =>
    set(() => ({
      breathIntervalId: id,
    })),
  addRetentionIntervalId: (id) =>
    set(() => ({
      retentionIntervalId: id,
    })),
  addBreathHoldIntervalId: (id) =>
    set(() => ({
      breathHoldIntervalId: id,
    })),
  switchIsBreathActive: (bool) =>
    set(() => ({
      isBreathActive: bool,
    })),
  switchIsRetentionFinished: (bool) =>
    set(() => ({
      isRetentionFinished: bool,
    })),
  switchShowRetentionCounter: (bool) =>
    set(() => ({
      showRetentionCounter: bool,
    })),
  resetBreathCount: () =>
    set(() => ({
      breathCount: 0,
    })),
  resetRetentionCount: () =>
    set(() => ({
      retentionCount: 0,
    })),
  resetBreathHoldCountdown: () =>
    set(() => ({
      breathHoldCountdown: 15,
    })),
  increaseFlowCounter: () =>
    set((state) => ({
      flowCounter: state.flowCounter + 1,
    })),
  addSavedRetentionCount: (count) =>
    set(() => ({
      savedRetentionCount: count,
    })),
  switchIsTripleCounterOneActive: (bool) =>
    set(() => ({
      isTripleCounterOneActive: bool,
    })),
  switchIsTripleCounterTwoActive: (bool) =>
    set(() => ({
      isTripleCounterTwoActive: bool,
    })),
  switchIsTripleCounterThreeActive: (bool) =>
    set(() => ({
      isTripleCounterThreeActive: bool,
    })),
  decreaseTripleCounterOne: () =>
    set((state) => ({
      tripleCounterOne: state.tripleCounterOne - 1,
    })),
  decreaseTripleCounterTwo: () =>
    set((state) => ({
      tripleCounterTwo: state.tripleCounterTwo - 1,
    })),
  decreaseTripleCounterThree: () =>
    set((state) => ({
      tripleCounterThree: state.tripleCounterThree - 1,
    })),
  addTripleCounterOneIntervalId: (id) =>
    set(() => ({
      tripleCounterOneIntervalId: id,
    })),
  addTripleCounterTwoIntervalId: (id) =>
    set(() => ({
      tripleCounterTwoIntervalId: id,
    })),
  addTripleCounterThreeIntervalId: (id) =>
    set(() => ({
      tripleCounterThreeIntervalId: id,
    })),
  increaseRoundCounter: () =>
    set((state) => ({
      roundCounter: state.roundCounter + 1,
    })),
  resetTripleCounters: () =>
    set(() => ({
      tripleCounterOne: 4,
      tripleCounterTwo: 7,
      tripleCounterThree: 8,
    })),
  switchIsLoading: (bool) =>
    set(() => ({
      isLoading: bool,
    })),
  increaseIceBathCount: () =>
    set((state) => ({
      iceBathCount: state.iceBathCount + 1,
    })),
  resetIceBathCount: () =>
    set(() => ({
      iceBathCount: 0,
    })),
  switchIceBathCountIsActive: (bool) =>
    set(() => ({
      iceBathCountIsActive: bool,
    })),
  addIceBathIntervalId: (id) =>
    set(() => ({
      iceBathIntervalId: id,
    })),
  switchIceBathCountdownIsActive: (bool) =>
    set(() => ({
      iceBathCountdownIsActive: bool,
    })),
  decreaseIceBathCountdown: () =>
    set((state) => ({
      iceBathCountdown: state.iceBathCountdown - 1,
    })),
  addIceBathCountdownIntervalId: (id) =>
    set(() => ({
      iceBathCountdownIntervalId: id,
    })),
  resetIceBathCountdown: () =>
    set(() => ({
      iceBathCountdown: 10,
    })),
  switchIsPowerBreathing: () =>
    set((state) => ({
      isPowerBreathing: !state.isPowerBreathing,
    })),
  switchIsMenuOpen: () =>
    set((state) => ({
      isMenuOpen: !state.isMenuOpen,
    })),
}));

export default useStore;
