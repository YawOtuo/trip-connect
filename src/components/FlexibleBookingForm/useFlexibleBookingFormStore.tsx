import { TransportBus, Vehicle } from "@/lib/types/vehicles"; // Adjust path as per your project structure
import create from "zustand";

interface FlFlexiblexibleBookingStore {
  selectedVehicle: Vehicle | null; // New field for selected vehicle

  selectedVehicleModel: string | null; // New field for selected vehicle model
  selectedVehicleType: string | null; // New field for selected vehicle type

  setSelectedVehicle: (value: Vehicle | null) => void; // Setter for selected vehicle model

  setSelectedVehicleModel: (value: string | null) => void; // Setter for selected vehicle model
  setSelectedVehicleType: (value: string | null) => void; // Setter for selected vehicle type
}

export const useFlexibleBookingFormStore = create<FlFlexiblexibleBookingStore>(
  (set) => ({
    selectedVehicleModel: null,
    selectedVehicleType: null,
    selectedVehicle: null, // New field for selected vehicle

    setSelectedVehicle: (value) => set({ selectedVehicle: value }), // Setter function for selectedVehicle

    setSelectedVehicleModel: (value) => set({ selectedVehicleModel: value }),
    setSelectedVehicleType: (value) => set({ selectedVehicleType: value }),
  })
);
