import usePayStack from "@/components/CheckoutButton/usePaystack";
import { useToast } from "@/components/ui/use-toast";
import { UpTlexibleBooking } from "@/lib/api/flexiblebookings";
import useFixedBooking from "@/lib/hooks/useFixedBookings";
import useFlexibleBookings from "@/lib/hooks/useFlexibleBookings";

function useVehicles() {
  const { startPayment } = usePayStack();
  const { setFlexibleBookingAsPaid } = useFlexibleBookings();
  const { toast } = useToast();

  const handlePayment = (cost : number, id: number) => {
    startPayment(cost, () => {
      toast({
        variant: "info",
        title: "Paying",
      });
      setFlexibleBookingAsPaid({
        id: id,
      });
    });
  };
  return { handlePayment };
}

export default useVehicles;
