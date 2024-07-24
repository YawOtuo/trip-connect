import usePayStack from "@/components/CheckoutButton/usePaystack";
import { useToast } from "@/components/ui/use-toast";
import { UpTlexibleBooking } from "@/lib/api/flexiblebookings";
import useFixedBooking from "@/lib/hooks/useFixedBookings";

function useTrips() {
  const { startPayment } = usePayStack();
  const { setFixedBookingAsPaid } = useFixedBooking();
  const { toast } = useToast();

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
    });
  };
  return { handlePayment };
}

export default useTrips;