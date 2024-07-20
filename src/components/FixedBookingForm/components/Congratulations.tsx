import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn } from "@/lib/animations";
import { useTellUsMoreStore } from "./TellUsMore/useTellUsMoreStore";
import Submitting from "./Congratulations/Submitting";
import FixedBookingControls from "./FixedBookingControls";

function Congrutalations() {
  const { isSubmitting, submissionResult } = useTellUsMoreStore();

  return (
    <FramerWrapper {...fadeIn}>
      <div className="flex items-center justify-center bg-white p-4">
        {/* Changed justify-between to justify-center */}
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-primary mb-4">Congratulations</h1>
          <p className="mb-8 text-black-600">
            Lorem ipsum dolor sit amet consectetur. Aliquam tincidunt fringilla pellentesque risus
            erat quisque posuere ullamcorper cursus. Mi interdum est sed pharetra..
          </p>
        </div>
        <div className="w-100">
          <Image src="/fist-bump.png" alt="Fist bump" width={300} height={300} />
        </div>
      </div>
      {isSubmitting && <Submitting />}
      <FixedBookingControls showBackButton={false} close={true}/>
    </FramerWrapper>
  );
}

export default Congrutalations;
