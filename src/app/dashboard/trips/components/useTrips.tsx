import usePayStack from "@/components/CheckoutButton/usePaystack";
import { useToast } from "@/components/ui/use-toast";
import { UpTlexibleBooking } from "@/lib/api/flexiblebookings";
import useFlexibleBookings from "@/lib/hooks/useFlexibleBookings";

function useTrips() {
  const { startPayment } = usePayStack();
  const { updateFlexibleBooking } = useFlexibleBookings();
  const { toast } = useToast();

  const handlePayment = (id: number) => {
    startPayment(50, () => {
      toast({
        variant: "info",
        title: "Paying",
      });
      updateFlexibleBooking({
        id: id,
        is_paid: true
      })
    });
  };
  return { handlePayment };
}

export default useTrips;
