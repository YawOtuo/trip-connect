import Submitting from "@/components/FixedBookingForm/components/Congratulations/Submitting";
import BackAndContinueControls from "./BackAndContinueControls";
import { useFlexibleBookingFormStore } from "../useFlexibleBookingFormStore";

function FlexiCongratulations() {
  const { isSubmitting } = useFlexibleBookingFormStore();
  return (
    <div className="bg-primary-100 h-screen text-white flex flex-col justify-between py-10 px-10 fixed md:static inset-0">
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-2xl md:text-5xl font-bold capitalize md:uppercase">Congratulations!!!</p>
        {/* <p className="text-xl font-bold">CONGRATULATIONS</p> */}
      </div>
      {isSubmitting && <Submitting />}
      <BackAndContinueControls showBackButton={false} close />
    </div>
  );
}

export default FlexiCongratulations;
