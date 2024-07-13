import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FetchOneSchedule, FetchSchedules, FetchSchedulesFromAndTos } from "../api/transportschedules";
import { TransportSchedule } from "../types/transportschedule";
import { FromAndTos } from "../types/from_and_tos";

interface FilterParams {
  [key: string]: any;
}

const useTransportSchedules = () => {
  const queryClient = useQueryClient();

  const { data: schedules, isLoading: isSchedulesLoading, error: schedulesError } = useQuery<TransportSchedule[]>({
    queryKey: ["transportSchedules"],
    queryFn: FetchSchedules
});

  const fetchScheduleById = async (id: number) => {
    try {
      const data = await FetchOneSchedule(id);
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch schedule with ID ${id}`);
    }
  };

  const { data: schedulesFromAndTo, isLoading: isSchedulesFromAndToLoading, error: schedulesFromAndToError } = useQuery<FromAndTos[]>({
    queryKey: ["transportSchedulesFromAndTo"],
    queryFn: FetchSchedulesFromAndTos,
});

  return {
    schedules,
    isSchedulesLoading,
    schedulesError,
    fetchScheduleById,
    schedulesFromAndTo,
    isSchedulesFromAndToLoading,
    schedulesFromAndToError,
  };
};

export default useTransportSchedules;
