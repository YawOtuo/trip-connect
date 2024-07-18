import { FixedBooking } from "@/lib/types/booking";
import { TransportBus } from "@/lib/types/vehicles";
import create from "zustand";

interface TellUsMoreState {
  selectedTo: string | null;
  selectedFrom: string | null;
  scheduleSelected: number | null;
  busFound: boolean | null;
  customSeat: boolean | null;
  selectedBus: TransportBus | null; // New field for selected bus
  isSubmitting: boolean; // New field for submission state
  submissionResult: any | null; // New field for submission result
  isModalOpen: boolean; // New field for modal visibility
  setSelectedTo: (value: string) => void;
  setScheduleSelected: (value: number) => void;
  setCustomSeat: (value: boolean) => void;
  setSelectedFrom: (value: string) => void;
  setBusFound: (value: boolean) => void;
  setSelectedBus: (value: TransportBus | null) => void; // Setter for selected bus
  setIsSubmitting: (value: boolean) => void; // Setter for submission state
  setSubmissionResult: (value: any | null) => void; // Setter for submission result

  setIsModalOpen: (value?: boolean) => void; // Updated to accept an optional boolean
}

export const useTellUsMoreStore = create<TellUsMoreState>((set) => ({
  selectedTo: null,
  selectedFrom: null,
  busFound: null,
  scheduleSelected: null,
  customSeat: true,
  selectedBus: null, // Initialize selectedBus as null
  isSubmitting: false, // Initialize isSubmitting as false
  submissionResult: null, // Initialize submissionResult as null
  isModalOpen: false, // Initialize modal visibility as false
  setCustomSeat: (value) => set({ customSeat: value }),
  setSelectedTo: (value) => set({ selectedTo: value }),
  setBusFound: (value) => set({ busFound: value }),
  setSelectedFrom: (value) => set({ selectedFrom: value }),
  setScheduleSelected: (value) => set({ scheduleSelected: value }),
  setSelectedBus: (value) => set({ selectedBus: value }), // Setter function for selectedBus
  setIsSubmitting: (value) => set({ isSubmitting: value }), // Setter function for isSubmitting
  setSubmissionResult: (value) => set({ submissionResult: value }), // Setter function for submissionResult

  setIsModalOpen : (value) => set({isModalOpen: value})
}));
