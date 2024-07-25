// types/transportSchedules.ts

import { TransportBus } from "./vehicles";

export interface TransportSchedule {
  id: number;
  travelling_from: string;
  travelling_to: string;
  departure_time: string;
  estimated_arrival_time: string;
  price: number
  created_at: string;
  updated_at: string;
}

export interface TransportScheduleWithBuses {
  id: number;
  travelling_from: string;
  travelling_to: string;
  departure_time: string;
  estimated_arrival_time: string;
  transportbusesandschedules_set: {
    transportbus: TransportBus;
    created_at: string;
    updated_at: string;
  }[];
  created_at: string;
  updated_at: string;
  price: number
}
