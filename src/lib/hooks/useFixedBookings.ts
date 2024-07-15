import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  FetchOneFixedBooking,
  CreateFixedBooking,
  FetchAllFixedBookings,
  NewFixedBooking,
} from "../api/fixedbookings";
import { FixedBooking } from "../types/booking";
import { useAppStore } from "../store/useAppStore";

const useFixedBooking = () => {
  const queryClient = useQueryClient();
  const {DBDetails} = useAppStore()

  const {
    data: fixedBookings,
    isLoading: isFixedBookingsLoading,
    error: fixedBookingsError,
  } = useQuery<FixedBooking[]>({
    queryKey: ["fixedBookings"],
    queryFn: () => FetchAllFixedBookings(DBDetails?.id),
    enabled: !!DBDetails?.id
  });

  const fetchFixedBookingById = async (id: number) => {
    try {
      const data = await FetchOneFixedBooking(id);
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch fixed booking with ID ${id}`);
    }
  };

  // const createFixedBooking = useMutation(
  //   async (bookingData: NewFixedBooking) => {
  //     const response = await CreateFixedBooking(bookingData);
  //     return response;
  //   },
  //   {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries(["fixed-booking"]);
  //     },
  //   }
  // );

  const createFixedBooking = useMutation({
    mutationFn: (data: NewFixedBooking) => CreateFixedBooking(data),
    onSuccess: (data) => {
      // toast({
      //   title: "Success",
      //   description: "Order Created Successfully",
      //   variant: "success",
      // });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (error: Error) => {
      // toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });

  return {
    fixedBookings,
    isFixedBookingsLoading,
    fixedBookingsError,
    fetchFixedBookingById,
    createFixedBooking: createFixedBooking.mutate,
  };
};

export default useFixedBooking;
