// types/transportSchedules.ts

import { Vehicle } from "./vehicles";

export interface TransportBusesAndSchedule {
    vehicle: Vehicle
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
  

  