import Submitting from "@/components/FixedBookingForm/components/Congratulations/Submitting";
import BackAndContinueControls from "./BackAndContinueControls";
import { useFlexibleBookingFormStore } from "../useFlexibleBookingFormStore";

function FlexiCongratulations() {
  const { isSubmitting } = useFlexibleBookingFormStore();
  return (
    <div>
      Congrats @Bismark
      {isSubmitting && <Submitting />}
      <BackAndContinueControls showBackButton={false} close />
    </div>
  );
}

export default FlexiCongratulations;
