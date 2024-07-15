import { url } from "../../../weburl";
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

export const FetchVehicleModels = async (filter?: {
  [key: string]: any;
}): Promise<string[]> => {
  const queryString = filter
    ? `?${new URLSearchParams(filter).toString()}`
    : "";
  const response = await fetch(`${url}api/vehicles/models/${queryString}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const FetchVehicleTypes = async (filter?: {
  [key: string]: any;
}): Promise<string[]> => {
  const queryString = filter
    ? `?${new URLSearchParams(filter).toString()}`
    : "";
  const response = await fetch(`${url}api/vehicles/types/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
