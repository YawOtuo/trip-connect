import { Button } from "@/components/ui/button";
import useFBooking from "../useFlexibleBookingForm";

function BackAndContinueControls() {
  const { handleBack, handleContinue } = useFBooking();

  return (
    <div className="w-full mt-10 lg:mt-0 flex gap-5 items-center justify-end">
      <Button
        size={"sm"}
        variant={"outline"}
        className="w-full"
        onClick={handleBack}>
        Back
      </Button>
      <Button size={"sm"} className="w-full"
      variant={"primary_100"} onClick={handleContinue}>
        Continue
      </Button>
    </div>
  );
}

export default BackAndContinueControls;
