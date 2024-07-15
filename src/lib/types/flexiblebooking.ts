// flexibleBooking.ts

export interface FlexibleBooking {
    id: number;
    user: {
        id: number;
        username: string;
        // Add other user fields as needed
    };
    vehicle: {
        id: number;
        name: string;
        // Add other vehicle fields as needed
    };
    start_date: string; // Assuming date format, adjust as per your needs
    end_date: string; // Assuming date format, adjust as per your needs
    purpose?: string | null;
    created_at: string; // Assuming date format, adjust as per your needs
    updated_at: string; // Assuming date format, adjust as per your needs
}
