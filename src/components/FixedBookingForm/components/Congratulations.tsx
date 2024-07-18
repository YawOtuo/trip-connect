import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn } from "@/lib/animations";
import { useTellUsMoreStore } from "./TellUsMore/useTellUsMoreStore";
import Submitting from "./Congratulations/Submitting";
import FixedBookingControls from "./FixedBookingControls";

function Congrutalations() {
  const { isSubmitting, submissionResult } = useTellUsMoreStore();

  return (
    <FramerWrapper {...fadeIn}>
      Congrats (Kwartekwei)
      {isSubmitting && <Submitting />}
      <FixedBookingControls showBackButton={false} close={true}/>
    </FramerWrapper>
  );
}

export default Congrutalations;
