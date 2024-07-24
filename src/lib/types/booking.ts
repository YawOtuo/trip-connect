import { TransportSchedule } from "./transportschedule";
import { User } from "./user";
import { TransportBus } from "./vehicles";

export interface TransportBusAndSchedules {
  transportbus: TransportBus;
  schedule: TransportSchedule;
}

export interface FixedBooking {
  id: number;
  user: User;
  bus_and_schedule: TransportBusAndSchedules;
  booking_date: string; // Date string representation
  status: string;
  created_at: string; // Date string representation
  updated_at: string; // Date string representation
  is_paid: boolean
  cost: number
}
