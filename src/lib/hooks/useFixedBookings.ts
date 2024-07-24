import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  FetchOneFixedBooking,
  CreateFixedBooking,
  FetchAllFixedBookings,
  NewFixedBooking,

  SetFixedBookingAsPaid,
} from "../api/fixedbookings";
import { FixedBooking } from "../types/booking";
import { useAppStore } from "../store/useAppStore";
import { useToast } from "@/components/ui/use-toast";

const useFixedBooking = () => {
  const queryClient = useQueryClient();
  const { DBDetails } = useAppStore();
  const { toast   } = useToast();
  const {
    data: fixedBookings,
    isLoading: isFixedBookingsLoading,
    error: fixedBookingsError,
  } = useQuery<FixedBooking[]>({
    queryKey: ["fixedBookings"],
    queryFn: () => FetchAllFixedBookings(Number(DBDetails?.id)),
    enabled: !!DBDetails?.id,
  });

  const fetchFixedBookingById = async (id: number) => {
    try {
      const data = await FetchOneFixedBooking(id);
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch fixed booking with ID ${id}`);
    }
  };

  const setFixedBookingAsPaid = useMutation({
    mutationFn: (data: any) => SetFixedBookingAsPaid(data.id),
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: "Status updated successfully",
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      return data;
    },
    onError: (error: Error) => {
      // toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });

  const createFixedBooking = useMutation({
    mutationFn: (data: NewFixedBooking) =>
      CreateFixedBooking(Number(DBDetails?.id), data),
    onSuccess: (data) => {
      // toast({
      //   title: "Success",
      //   description: "Order Created Successfully",
      //   variant: "success",
      // });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      return data;
    },
    onError: (error: Error) => {
      // toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });

  const createFixedBookingWithStatus = async (bookingData: NewFixedBooking) => {
    try {
      const data = await createFixedBooking.mutateAsync(bookingData);
      return { success: true, data }; // Return success status and data
    } catch (error: unknown) {
      let errorMessage = "An unknown error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      return { success: false, error: errorMessage }; // Return error status and message
    }
  };

  return {
    fixedBookings,
    isFixedBookingsLoading,
    fixedBookingsError,
    setFixedBookingAsPaid: setFixedBookingAsPaid.mutate,
    fetchFixedBookingById,
    createFixedBooking: createFixedBookingWithStatus, // Return the wrapped function
  };
};

export default useFixedBooking;
