import create from "zustand";
import { TransportBus } from "@/lib/types/vehicles";

interface TellUsMoreState {
  selectedTo: string | null;
  selectedFrom: string | null;
  scheduleSelected: number | null;
  busFound: boolean | null;
  customSeat: boolean | null;
  selectedBus: TransportBus | null;
  isSubmitting: boolean;
  submissionResult: any | null;
  isModalOpen: boolean;
  selectedSeats: number[]; // New field for selected seats

  setSelectedTo: (value: string) => void;
  setScheduleSelected: (value: number) => void;
  setCustomSeat: (value: boolean) => void;
  setSelectedFrom: (value: string) => void;
  setBusFound: (value: boolean) => void;
  setSelectedBus: (value: TransportBus | null) => void;
  setIsSubmitting: (value: boolean) => void;
  setSubmissionResult: (value: any | null) => void;
  setIsModalOpen: (value: boolean) => void;
  addSelectedSeat: (seat: number) => void; // New function to add a selected seat
  removeSelectedSeat: (seat: number) => void; // New function to remove a selected seat
}

export const useTellUsMoreStore = create<TellUsMoreState>((set) => ({
  selectedTo: null,
  selectedFrom: null,
  busFound: null,
  scheduleSelected: null,
  customSeat: true,
  selectedBus: null,
  isSubmitting: false,
  submissionResult: null,
  isModalOpen: false,
  selectedSeats: [], // Initialize selectedSeats as an empty array

  setCustomSeat: (value) => set({ customSeat: value }),
  setSelectedTo: (value) => set({ selectedTo: value }),
  setBusFound: (value) => set({ busFound: value }),
  setSelectedFrom: (value) => set({ selectedFrom: value }),
  setScheduleSelected: (value) => set({ scheduleSelected: value }),
  setSelectedBus: (value) => set({ selectedBus: value }),
  setIsSubmitting: (value) => set({ isSubmitting: value }),
  setSubmissionResult: (value) => set({ submissionResult: value }),
  setIsModalOpen: (value) => set({ isModalOpen: value }),
  addSelectedSeat: (seat) => set((state) => ({ selectedSeats: [...state.selectedSeats, seat] })),
  removeSelectedSeat: (seat) => set((state) => ({ selectedSeats: state.selectedSeats.filter(s => s !== seat) }))
}));
