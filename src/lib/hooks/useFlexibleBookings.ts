import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { FixedBooking } from "../types/booking";
import { useAppStore } from "../store/useAppStore";
import {
  CreateFlexibleBooking,
  FetchAllFlexibleBookings,
  FetchOneFlexibleBooking,
  SetFlexibleBookingAsPaid,
  UpTlexibleBooking,
  UpdateFlexibleBooking,
  createFlexibleBookingData,
} from "../api/flexiblebookings";
import { FlexibleBooking } from "../types/flexiblebooking";
import { useToast } from "@/components/ui/use-toast";

const useFlexibleBookings = () => {
  const queryClient = useQueryClient();
  const { DBDetails } = useAppStore();
  const { toast } = useToast();
  // const {
  //   data: flexibleBookings,
  //   isLoading: isflexibleBookingsLoading,
  //   error: flexibleBookingsError,
  // } = useQuery<FlexibleBooking[]>({
  //   queryKey: ["flexibleBookings"],
  //   queryFn: () => FetchAllFlexibleBookings(Number(DBDetails?.id)),
  //   enabled: !!DBDetails?.id,
  // });

  const fetchFixedBookingById = async (id: number) => {
    try {
      const data = await FetchOneFlexibleBooking(id);
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch fixed booking with ID ${id}`);
    }
  };

  const setFlexibleBookingAsPaid = useMutation({
    mutationFn: (data: any) => SetFlexibleBookingAsPaid(data.id),
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

  const createFlexibleBooking = useMutation({
    mutationFn: (data: createFlexibleBookingData) =>
      CreateFlexibleBooking(Number(DBDetails?.id), data),
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

  const updateFlexibleBooking = useMutation({
    mutationFn: (data: UpTlexibleBooking) =>
      UpdateFlexibleBooking(data.id, data),
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

  const createFlexibleBookingWithStatus = async (
    bookingData: createFlexibleBookingData
  ) => {
    try {
      const data = await createFlexibleBooking.mutateAsync(bookingData);
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
    // flexibleBookings,
    // isflexibleBookingsLoading,
    // flexibleBookingsError,
    setFlexibleBookingAsPaid: setFlexibleBookingAsPaid.mutate,
    updateFlexibleBooking: updateFlexibleBooking.mutate,
    fetchFixedBookingById,
    createFlexibleBooking: createFlexibleBookingWithStatus,
  };
};

export default useFlexibleBookings;
