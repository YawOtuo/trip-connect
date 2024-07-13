// types/transportSchedules.ts

export interface TransportBusesAndSchedule {
    vehicle: {
      // Define the fields based on your VehicleSerializer in Django
      id: number;
      vehicle_number: string;
      // Add other fields as needed
    };
    created_at: string; // Assuming created_at and updated_at are strings
    updated_at: string;
  }
  
  export interface TransportSchedule {
    id: number;
    travelling_from: string;
    travelling_to: string;
    departure_time: string; // Assuming departure_time and estimated_arrival_time are strings
    estimated_arrival_time: string;
    transportbusesandschedules_set: TransportBusesAndSchedule[];
    created_at: string;
    updated_at: string;
  }
  

  