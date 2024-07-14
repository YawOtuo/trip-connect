// hooks/useVehicles.ts

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { url } from "../../../weburl"; // Adjust according to your project structure
import { useToast } from "@/components/ui/use-toast";
import { Vehicle } from "../types/vehicles";
import { FetchVehicles, SearchVehicles } from "../api/vehicles";
import { TransportSchedule } from "../types/transportschedule";

const useVehicles = (filter?: { [key: string]: any }) => {
  const queryClient = useQueryClient();
  const { toast } = useToast(); // Assuming you use Chakra UI for notifications

  const {
    data: vehicles,
    isLoading: isVehiclesLoading,
    error: vehiclesError,
  } = useQuery<Vehicle[]>({
    queryKey: ["vehicles"],
    queryFn: FetchVehicles,
  });
  const {
    data: searchVehicles,
    isLoading: isSearchVehiclesLoading,
    error: isSearchVehiclesError,
  } = useQuery<TransportSchedule[]>({
    queryKey: ["search-vehicles"],
    queryFn: () => SearchVehicles(filter),
    enabled: !!filter,
  });

  return {
    vehicles,
    isVehiclesLoading,
    vehiclesError,
    searchVehicles,
    isSearchVehiclesLoading,
    isSearchVehiclesError,
  };
};

export default useVehicles;
