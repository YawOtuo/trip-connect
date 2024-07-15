"use client";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { useFlexibleBookingStore } from "./FlexibleBookingStore";
import { pages } from "./pagesData";
import useFBooking from "./useFlexibleBookingForm";

function FlexibleBookingForm() {
  const { progressValue, setProgressValue, activePage } = useFlexibleBookingStore();
  const { handleBack, handleContinue } = useFBooking();
  

  return (
    <div className=" px-5 h-max lg:h-[80vh] overflow-y-scroll">
      <div className="px-1">
      <Progress value={progressValue} className="w-full" />
      </div>
      <div className=" h-full">{pages[activePage].component}</div>
      <div className="w-full mt-10 lg:mt-0 flex gap-5 items-center justify-end">
        <Button size={"sm"} variant={"outline"} className="  px-14" onClick={handleBack}>
          Back
        </Button>
        <Button size={"sm"} className="px-14" onClick={handleContinue}>
          Continue
        </Button>
      </div>{" "}
    </div>
  );
}

export default FlexibleBookingForm;
