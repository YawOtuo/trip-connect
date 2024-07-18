import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { FixedBooking } from "../types/booking";
import { useAppStore } from "../store/useAppStore";
import {
  CreateFlexibleBooking,
  FetchAllFlexibleBookings,
  FetchOneFlexibleBooking,
  NewFlexibleBooking,
} from "../api/flexiblebookings";
import { FlexibleBooking } from "../types/flexiblebooking";

const useGetFlexibleBookings = () => {
  const queryClient = useQueryClient();
  const { DBDetails } = useAppStore();

  const {
    data: flexibleBookings,
    isLoading: isflexibleBookingsLoading,
    error: flexibleBookingsError,
  } = useQuery<FlexibleBooking[]>({
    queryKey: ["flexibleBookings"],
    queryFn: () => FetchAllFlexibleBookings(Number(DBDetails?.id)),
    enabled: !!DBDetails?.id,
  });

  const fetchFixedBookingById = async (id: number) => {
    try {
      const data = await FetchOneFlexibleBooking(id);
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch fixed booking with ID ${id}`);
    }
  };



  return {
    flexibleBookings,
    isflexibleBookingsLoading,
    flexibleBookingsError,
    fetchFixedBookingById,
  
  };
};

export default useGetFlexibleBookings;
