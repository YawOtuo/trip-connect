import { TransportBus, Vehicle } from "@/lib/types/vehicles"; // Adjust path as per your project structure
import create from "zustand";
import { User } from "@/lib/types/user"; // Adjust path as per your project structure

interface FlexibleBookingStore {
  selectedVehicle: Vehicle | null; // Field for selected vehicle
  selectedVehicleModel: string | null; // Field for selected vehicle model
  selectedVehicleType: string | null; // Field for selected vehicle type
  startDate: string | null; // Field for start date
  endDate: string | null; // Field for end date
  purposeOfOrder: string | null; // Field for purpose of order
  user: User | null; // Field for user

  setSelectedVehicle: (value: Vehicle | null) => void; // Setter for selected vehicle
  setSelectedVehicleModel: (value: string | null) => void; // Setter for selected vehicle model
  setSelectedVehicleType: (value: string | null) => void; // Setter for selected vehicle type
  setStartDate: (value: string | null) => void; // Setter for start date
  setEndDate: (value: string | null) => void; // Setter for end date
  setPurposeOfOrder: (value: string | null) => void; // Setter for purpose of order
  setUser: (value: Partial<User> | ((prevState: User | null) => Partial<User>)) => void; // Setter for user details
}

export const useFlexibleBookingFormStore = create<FlexibleBookingStore>(
  (set) => ({
    selectedVehicle: null, // Initialize selected vehicle as null
    selectedVehicleModel: null, // Initialize selected vehicle model as null
    selectedVehicleType: null, // Initialize selected vehicle type as null
    startDate: null, // Initialize start date as null
    endDate: null, // Initialize end date as null
    purposeOfOrder: null, // Initialize purpose of order as null
    user: null, // Initialize user as null

    setSelectedVehicle: (value) => set({ selectedVehicle: value }), // Setter function for selected vehicle
    setSelectedVehicleModel: (value) => set({ selectedVehicleModel: value }), // Setter function for selected vehicle model
    setSelectedVehicleType: (value) => set({ selectedVehicleType: value }), // Setter function for selected vehicle type
    setStartDate: (value) => set({ startDate: value }), // Setter function for start date
    setEndDate: (value) => set({ endDate: value }), // Setter function for end date
    setPurposeOfOrder: (value) => set({ purposeOfOrder: value }), // Setter function for purpose of order// Setter function for user
    setUser: (value) => set((state) => ({
      user: typeof value === 'function' ? { ...state.user, ...value(state.user) } : { ...state.user, ...value },
    })),
  })
);
