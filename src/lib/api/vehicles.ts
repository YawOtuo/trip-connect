import { url } from "../../../weburl";
import { TransportSchedule } from "../types/transportschedule";
import { Vehicle } from "../types/vehicles";

export const FetchVehicles = async (filter?: {
  [key: string]: any;
}): Promise<Vehicle[]> => {
  const queryString = filter
    ? `?${new URLSearchParams(filter).toString()}`
    : "";
  const response = await fetch(`${url}api/vehicles/${queryString}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const FetchOneVehicle = async (id: number): Promise<Vehicle> => {
  const response = await fetch(`${url}api/vehicles/${id}/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const CreateVehicle = async (
  body: Partial<Vehicle>
): Promise<Vehicle> => {
  const response = await fetch(`${url}api/vehicles/`, {
    method: "POST",
    body: JSON.stringify(body),
    mode: "cors",
    headers: new Headers({ "content-type": "application/json" }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const UpdateVehicle = async (
  body: Partial<Vehicle>,
  id: number
): Promise<Vehicle> => {
  const response = await fetch(`${url}api/vehicles/${id}/`, {
    method: "PUT",
    body: JSON.stringify(body),
    mode: "cors",
    headers: new Headers({ "content-type": "application/json" }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const SearchVehicles = async (filter?: {
  [key: string]: any;
}): Promise<TransportSchedule[]> => {
  const queryString = filter
    ? `?${new URLSearchParams(filter).toString()}`
    : "";
  const response = await fetch(
    `${url}api/vehicles/search-vehicle-with-schedule/${queryString}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
