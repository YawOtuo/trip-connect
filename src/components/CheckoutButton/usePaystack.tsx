import { useToast } from "@/components/ui/use-toast";
import useAuthState from "@/lib/hooks/useAuthState";
import { useAppStore } from "@/lib/store/useAppStore";
import { useState } from "react";
import { usePaystackPayment } from "react-paystack";

function usePayStack() {
  const { DBDetails } = useAppStore();
  const { toast } = useToast();
  const [price, setPrice] = useState<number>(1);

  const baseConfig : any = {
    reference: new Date().getTime().toString(),
    email: DBDetails?.email,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
  };

  const initializePayment = usePaystackPayment(baseConfig);

  const defaultOnSuccess = (reference: any) => {
    toast({
      title: "Success",
      description: "Payment Completed Successfully",
      variant: "success",
    });
  };

  const defaultOnClose = () => {
    toast({
      title: "Closed",
      description: "Payment window closed",
      variant: "info",
    });
  };

  const startPayment = (
    price: number,
    onSuccess = defaultOnSuccess,
    onClose = defaultOnClose
  ) => {
    const config = {
      ...baseConfig,
      amount: price * 100,
      currency: "GHS",
    };
    initializePayment({
      config,
      onSuccess,
      onClose,
    });
  };

  return {
    price,
    setPrice,
    startPayment,
  };
}

export default usePayStack;
