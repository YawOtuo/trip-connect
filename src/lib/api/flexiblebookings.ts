import { url } from "../../../weburl";
import { FlexibleBooking } from "../types/flexiblebooking";
export interface createFlexibleBookingData {
  purpose: string | null;
  start_date: string | null;
  end_date?: string | null;
  vehicle?: number | null;
  user: number | null;
}

export interface UpTlexibleBooking {
  id: number;
  is_paid: boolean;
}

export const FetchAllFlexibleBookings = async (
  user_id: number,
  filter?: {
    [key: string]: any;
  }
): Promise<FlexibleBooking[]> => {
  const queryString = filter
    ? `?${new URLSearchParams(filter).toString()}`
    : "";
  const response = await fetch(
    `${url}api/flexible-bookings/users/${user_id}/${queryString}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const FetchOneFlexibleBooking = async (
  id: number
): Promise<FlexibleBooking> => {
  const response = await fetch(`${url}api/flexible-bookings/${id}/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
export const SetFlexibleBookingAsPaid = async (
  booking_id: number
): Promise<FlexibleBooking> => {
  const response = await fetch(
    `${url}api/flexible-bookings/${booking_id}/set-paid/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to create FlexibleBooking");
  }
  return response.json();
};

export const CreateFlexibleBooking = async (
  user_id: number,
  createFlexibleBookingData: createFlexibleBookingData
): Promise<FlexibleBooking> => {
  const response = await fetch(`${url}api/flexible-bookings/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createFlexibleBookingData),
  });
  if (!response.ok) {
    throw new Error("Failed to create FlexibleBooking");
  }
  return response.json();
};

export const UpdateFlexibleBooking = async (
  booking_id: number,
  createFlexibleBookingData: UpTlexibleBooking
): Promise<FlexibleBooking> => {
  const response = await fetch(`${url}api/flexible-bookings/${booking_id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createFlexibleBookingData),
  });
  if (!response.ok) {
    throw new Error("Failed to create FlexibleBooking");
  }
  return response.json();
};

export const DeleteFlexibleBooking = async (id: number): Promise<void> => {
  const response = await fetch(`${url}api/flexible-bookings/${id}/`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete FlexibleBooking");
  }
};
