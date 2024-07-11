import { create } from "zustand";

type FixedBookingFormStore = {
  progressValue: number;
  setProgressValue: (val: number | ((prev: number) => number)) => void;
  activePage: number;
  setActivePage: (val: number | ((prev: number) => number)) => void;
};

export const useFixedBookingFormStore = create<FixedBookingFormStore>((set) => ({
  progressValue: 5,
  activePage: 0,
  setProgressValue: (val) =>
    set((state) => ({
      progressValue: typeof val === "function" ? val(state.progressValue) : val,
    })),
  setActivePage: (val) =>
    set((state) => ({
      activePage: typeof val === "function" ? val(state.activePage) : val,
    })),
}));
