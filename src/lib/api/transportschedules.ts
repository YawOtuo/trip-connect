import { url } from "../../../weburl";
import { FromAndTos } from "../types/from_and_tos";
import { TransportSchedule } from "../types/transportschedule";

export const FetchSchedules = async (filter?: {
  [key: string]: any;
}): Promise<TransportSchedule[]> => {
  //   const queryString = filter
  //     ? `?${new URLSearchParams(filter).toString()}`
  //     : "";
  //   const response = await fetch(`${url}api/transport-schedules/${queryString}`);
  const response = await fetch(`${url}api/transport-schedules/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const FetchOneSchedule = async (
  id: number
): Promise<FromAndTos[]> => {
  const response = await fetch(`${url}api/transport-schedules/${id}/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const FetchSchedulesFromAndTos = async (filter?: {
  [key: string]: any;
}): Promise<TransportSchedule[]> => {
  const queryString = filter
    ? `?${new URLSearchParams(filter).toString()}`
    : "";
  const response = await fetch(`${url}api/transport-schedules/from-to/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
