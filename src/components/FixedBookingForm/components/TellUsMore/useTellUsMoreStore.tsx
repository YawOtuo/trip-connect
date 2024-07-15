import { TransportBus } from "@/lib/types/vehicles";
import create from "zustand";

interface TellUsMoreState {
  selectedTo: string | null;
  selectedFrom: string | null;
  scheduleSelected: number | null;
  selectedBus: TransportBus | null; // New field for selected bus
  setSelectedTo: (value: string) => void;
  setScheduleSelected: (value: number) => void;
  setSelectedFrom: (value: string) => void;
  setSelectedBus: (value: TransportBus | null) => void; // Setter for selected bus
}

export const useTellUsMoreStore = create<TellUsMoreState>((set) => ({
  selectedTo: null,
  selectedFrom: null,
  scheduleSelected: null,
  selectedBus: null, // Initialize selectedBus as null
  setSelectedTo: (value) => set({ selectedTo: value }),
  setSelectedFrom: (value) => set({ selectedFrom: value }),
  setScheduleSelected: (value) => set({ scheduleSelected: value }),
  setSelectedBus: (value) => set({ selectedBus: value }), // Setter function for selectedBus
}));
