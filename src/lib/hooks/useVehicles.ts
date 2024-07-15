// hooks/useVehicles.ts

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { url } from "../../../weburl"; // Adjust according to your project structure
import { useToast } from "@/components/ui/use-toast";

import {
  FetchVehicleModels,
  FetchVehicleTypes,
  FetchVehicles,
} from "../api/vehicles";
import { Vehicle } from "../types/vehicles";



const useVehicles = (filter?: { type: string | null, model:  string | null }) =>{
  const queryClient = useQueryClient();
  const { toast } = useToast(); // Assuming you use Chakra UI for notifications

  const {
    data: vehicleModels,
    isLoading: isvehicleModelsLoading,
    error: isVehiclesModelsError,
  } = useQuery<string[]>({
    queryKey: ["vehicles-models", filter?.type],
    queryFn: () => FetchVehicleModels(filter),
    enabled: !!filter?.type,
  });
  const {
    data: vehicles,
    isLoading: isvehiclesLoading,
    error: isvehiclesError,
  } = useQuery<Vehicle[]>({
    queryKey: ["vehicles", filter?.type, filter?.model],
    queryFn: () => FetchVehicles(filter),
    enabled: !!filter?.model && !!filter?.model,
  });

  const {
    data: vehicleTypes,
    isLoading: isvehicleTypesLoading,
    error: isVehiclesypesError,
  } = useQuery<string[]>({
    queryKey: ["vehicles-types"],
    queryFn: FetchVehicleTypes,
  });

  return {
    vehicleModels,
    vehicleTypes,
    isVehiclesModelsError,
    isVehiclesypesError,
    isvehicleModelsLoading,
    isvehicleTypesLoading,
    vehicles,
    isvehiclesLoading,
    isvehiclesError,
  };
};

export default useVehicles;
