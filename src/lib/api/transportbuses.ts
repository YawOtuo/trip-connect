import { url } from "../../../weburl";
import { TransportSchedule, TransportScheduleWithBuses } from "../types/transportschedule";
import { TransportBus } from "../types/vehicles";

export const FetchTransportBuses = async (filter?: {
  [key: string]: any;
}): Promise<TransportBus[]> => {
  const queryString = filter
    ? `?${new URLSearchParams(filter).toString()}`
    : "";
  const response = await fetch(`${url}api/transport-buses/${queryString}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const FetchTransportBusesWithSchedules = async (filter?: {
  [key: string]: any;
}): Promise<TransportScheduleWithBuses[]> => {
  const queryString = filter
    ? `?${new URLSearchParams(filter).toString()}`
    : "";
  const response = await fetch(
    `${url}api/transport-buses/transport-buses-with-schedules/${queryString}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const FetchOneTransportBus = async (
  id: number
): Promise<TransportBus> => {
  const response = await fetch(`${url}api/transport-buses/${id}/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// export const SearchTransportBus = async (filter?: {
//   [key: string]: any;
// }): Promise<TransportSchedule[]> => {
//   const queryString = filter
//     ? `?${new URLSearchParams(filter).toString()}`
//     : "";
//   const response = await fetch(
//     `${url}api/transport-buses/search-transport-buses-with-schedule/${queryString}`
//   );
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return response.json();
// };
