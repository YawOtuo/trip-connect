import { url } from "../../../weburl";
import { FlexibleBooking } from "../types/flexiblebooking";
export interface NewFlexibleBooking {
  user_id: number;
  bus_schedule_id: number | null;
  bus_id: number | null;
  seat_numbers?: Number[];
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

export const CreateFlexibleBooking = async (
  user_id: number,
  newFlexibleBooking: NewFlexibleBooking
): Promise<FlexibleBooking> => {
  const response = await fetch(
    `${url}api/flexible-bookings/users/${user_id}/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFlexibleBooking),
    }
  );
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