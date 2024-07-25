import usePayStack from "@/components/CheckoutButton/usePaystack";
import { useToast } from "@/components/ui/use-toast";
import { UpTlexibleBooking } from "@/lib/api/flexiblebookings";
import useFixedBooking from "@/lib/hooks/useFixedBookings";
import useFlexibleBookings from "@/lib/hooks/useFlexibleBookings";
import useNotifications from "@/lib/hooks/useNotifications";
import { useAppStore } from "@/lib/store/useAppStore";

function useVehicles() {
  const { startPayment } = usePayStack();
  const { setFlexibleBookingAsPaid } = useFlexibleBookings();
  const { toast } = useToast();
  const { createNotification } = useNotifications();
  const { DBDetails } = useAppStore();
  const handlePayment = (cost: number, id: number) => {
    startPayment(cost, () => {
      toast({
        variant: "info",
        title: "Paying",
      });
      setFlexibleBookingAsPaid({
        id: id,
      });
      createNotification({
        subject: "You have successfully booked a vehcile",
        message: "Have a smooth ride",
        type: "message",
        user: Number(DBDetails?.id),
      });
    });
  };
  return { handlePayment };
}

export default useVehicles;
