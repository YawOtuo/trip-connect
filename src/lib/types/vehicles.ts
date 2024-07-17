// ../types/vehicle.ts
interface VehicleImage {
  image: string
}

export interface Vehicle {
  id: number;
  name: string
  vehicle_number: string;
  capacity: number;
  model: {
    name: string
  }
  type:{
    name: string
  }
  images: VehicleImage[]
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
