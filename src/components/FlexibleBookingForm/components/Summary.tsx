import { Button } from "@/components/ui/button";
import BackAndContinueControls from "./BackAndContinueControls";
import useFlexibleBookings from "@/lib/hooks/useFlexibleBookings";
import useFlexibleBookingForm from "../useFlexibleBookingForm";

function Summary() {
  const { handleCreateFlexibleBooking } = useFlexibleBookingForm();
  return (
    <div className="h-s">
      @Project -55
      <div>
        Everything is set
      </div>
      <BackAndContinueControls  ready />
    </div>
  );
}

export default Summary;
