import create from "zustand";

interface TellUsMoreState {
  selectedTo: string | null;
  selectedFrom: string | null;
  scheduleSelected: number | null;
  setSelectedTo: (value: string) => void;
  setScheduleSelected: (value: number) => void;
  setSelectedFrom: (value: string) => void;
}

export const useTellUsMoreStore = create<TellUsMoreState>((set) => ({
  selectedTo: null,
  selectedFrom: null,
  scheduleSelected: null,
  setSelectedTo: (value) => set({ selectedTo: value }),
  setSelectedFrom: (value) => set({ selectedFrom: value }),
  setScheduleSelected: (value) => set({ scheduleSelected: value }),
}));
