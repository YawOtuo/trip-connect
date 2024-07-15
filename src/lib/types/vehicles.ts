// ../types/vehicle.ts

export interface Vehicle {
  id: number;
  vehicle_number: string;
  capacity: number;
  model: string | null;
  driver: number; // Assuming driver is represented by their ID
  created_at: string; // Date string representation
  updated_at: string; // Date string representation
}

export interface TransportBus {
  id: number;
  vehicle: Vehicle;
  bus_type: "VIP" | "STC" | "2M EXPRESS";
  booked_seats_count: number;
}
