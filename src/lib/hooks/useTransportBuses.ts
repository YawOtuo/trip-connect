// hooks/useTransportBuses.ts

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { url } from "../../../weburl"; // Adjust according to your project structure
import { useToast } from "@/components/ui/use-toast";
import { Vehicle } from "../types/vehicles";
import { FetchTransportBuses, FetchTransportBusesWithSchedules } from "../api/transportbuses";
import { TransportSchedule, TransportScheduleWithBuses } from "../types/transportschedule";

const useTransportBuses = (filter?: { [key: string]: any }) => {
  const queryClient = useQueryClient();
  const { toast } = useToast(); // Assuming you use Chakra UI for notifications

  // const {
  //   data: vehicles,
  //   isLoading: isVehiclesLoading,
  //   error: vehiclesError,
  // } = useQuery<Vehicle[]>({
  //   queryKey: ["vehicles"],
  //   queryFn: FetchTransportBuses,
  // });
  const {
    data: searchTransportBus,
    isLoading: issearchTransportBusLoading,
    error: issearchTransportBusError,
  } = useQuery<TransportScheduleWithBuses[]>({
    queryKey: [`search-transportbuses-${filter?.travelling_from}-${filter?.travelling_to}`],
    queryFn: () => FetchTransportBusesWithSchedules(filter),
    enabled: !!filter,
    refetchOnMount: true
  });

  return {
    // vehicles,
    // isVehiclesLoading,
    // vehiclesError,
    searchTransportBus,
    issearchTransportBusLoading,
    issearchTransportBusError,
  };
};

export default useTransportBuses;
