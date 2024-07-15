import { url } from "../../../weburl";
import { FixedBooking } from "../types/booking";

export interface NewFixedBooking {
  user_id: number;
  bus_schedule_id: number | null;
  bus_id: number | null;
  seat_numbers?: Number[];
}

export const FetchAllFixedBookings = async (
  user_id: number,
  filter?: {
    [key: string]: any;
  }
): Promise<FixedBooking[]> => {
  const queryString = filter
    ? `?${new URLSearchParams(filter).toString()}`
    : "";
  const response = await fetch(
    `${url}api/fixed-bookings/users/${user_id}/${queryString}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const FetchOneFixedBooking = async (
  id: number
): Promise<FixedBooking> => {
  const response = await fetch(`${url}api/fixed-bookings/${id}/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const CreateFixedBooking = async (
  user_id: number,
  newFixedBooking: NewFixedBooking
): Promise<FixedBooking> => {
  const response = await fetch(`${url}api/fixed-bookings/users/${user_id}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newFixedBooking),
  });
  if (!response.ok) {
    throw new Error("Failed to create FixedBooking");
  }
  return response.json();
};

// export const UpdateFixedBooking = async (
//   id: number,
//   updatedFixedBooking: UpdatedFixedBooking
// ): Promise<FixedBooking> => {
//   const response = await fetch(`${url}api/FixedBookings/${id}/`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(updatedFixedBooking),
//   });
//   if (!response.ok) {
//     throw new Error("Failed to update FixedBooking");
//   }
//   return response.json();
// };

export const DeleteFixedBooking = async (id: number): Promise<void> => {
  const response = await fetch(`${url}api/fixed-bookings/${id}/`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete FixedBooking");
  }
};
