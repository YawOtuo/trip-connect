// flexibleBooking.ts

import { Vehicle } from "./vehicles";

export interface FlexibleBooking {
  id: number;
  user: {
    id: number;
    username: string;
    // Add other user fields as needed
  };
  is_paid: boolean;
  vehicle: Vehicle;
  cost: number;

  start_date: string; // Assuming date format, adjust as per your needs
  end_date: string; // Assuming date format, adjust as per your needs
  purpose?: string | null;
  created_at: string; // Assuming date format, adjust as per your needs
  updated_at: string; // Assuming date format, adjust as per your needs
}
