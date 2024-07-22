import usePayStack from "@/components/CheckoutButton/usePaystack";
import { useToast } from "@/components/ui/use-toast";

function useTrips() {
  const { startPayment } = usePayStack();
  const { toast } = useToast();

  const handlePayment = () => {
    startPayment(
      50,
      () => toast({
        variant: "info",
        title: "Paying"
      })
    );
  };
  return { handlePayment };
}

export default useTrips;
