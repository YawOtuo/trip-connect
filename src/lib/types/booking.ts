import { User } from "./user";

export interface FixedBooking {
    id: number;
    user: User;
    bus_and_schedule: number;
    booking_date: string; // Date string representation
    status: string;
    created_at: string; // Date string representation
    updated_at: string; // Date string representation
  }