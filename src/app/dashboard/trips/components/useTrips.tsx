import usePayStack from "@/components/CheckoutButton/usePaystack";
import { useToast } from "@/components/ui/use-toast";
import { UpTlexibleBooking } from "@/lib/api/flexiblebookings";
import useFixedBooking from "@/lib/hooks/useFixedBookings";
import useNotifications from "@/lib/hooks/useNotifications";
import { useAppStore } from "@/lib/store/useAppStore";

function useTrips() {
  const { startPayment } = usePayStack();
  const { setFixedBookingAsPaid } = useFixedBooking();
  const { toast } = useToast();
  const { createNotification } = useNotifications();
  const { DBDetails } = useAppStore();

  const handlePayment = (cost: number, id: number) => {
    startPayment(cost, () => {
      toast({
        variant: "info",
        title: "Paying",
      });
      setFixedBookingAsPaid({
        id: id,
        is_paid: true
      })
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

export default useTrips;
