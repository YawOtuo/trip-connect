import { Button } from "@/components/ui/button";
import useFBooking from "../useFlexibleBookingForm";
import { useAppStore } from "@/lib/store/useAppStore";
import { useFlexibleBookingFormStore } from "../useFlexibleBookingFormStore";
import useFlexibleBookings from "@/lib/hooks/useFlexibleBookings";
import useFlexibleBookingForm from "../useFlexibleBookingForm";
import { useRouter } from "next/navigation";

type Props = {
  showBackButton?: boolean;
  showForwardButton?: boolean;
  ready?: boolean;
  close?: boolean;
};
function FlexibleBookingBackAndContinueControls({
  showBackButton = true,
  showForwardButton = true,
  ready,
  close,
}: Props) {
  const { handleBack, handleContinue } = useFBooking();
  const { DBDetails } = useAppStore();
  const { handleCreateFlexibleBooking } = useFlexibleBookingForm();
  const router = useRouter();
  return (
    <div className="w-full flex gap-5 items-center justify-end">
      {showBackButton && (
        <Button
          size={"sm"}
          variant={"outline"}
          className=" w-full "
          onClick={handleBack}>
          Back
        </Button>
      )}
      {showForwardButton && (
        <div className="w-full ">
          {!ready && (
            <Button
              size={"sm"}
              className=" w-full"
              onClick={() => {
                handleContinue();
                close && router.push('/dashboard');
              }}>
              {close ? "Finish" : "Continue"}
            </Button>
          )}
          {ready && (
            <Button
              size={"sm"}
              className=" w-full"
              onClick={() => handleCreateFlexibleBooking()}>
              {DBDetails?.id && "Book"}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default FlexibleBookingBackAndContinueControls;
