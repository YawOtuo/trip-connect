"use client";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import StartHere from "./components/StartHere";
import { useFixedBookingFormStore } from "./FixedBookingStore";
import { pages } from "./pagesData";
import useFBooking from "./useFBooking";

function FixedBookingForm() {
  const { progressValue, setProgressValue, activePage } = useFixedBookingFormStore();
  const { handleBack, handleContinue } = useFBooking();

  return (
    <div className=" px-5">
      <div className="px-1">
      <Progress value={progressValue} className="w-full" />
      </div>
      <div className="min-h-[70vh]">{pages[activePage].component}</div>
      <div className="w-full flex gap-5 items-center justify-end">
        <Button size={"sm"} variant={"outline"} className="px-14" onClick={handleBack}>
          Back
        </Button>
        <Button size={"sm"} className="px-14" onClick={handleContinue}>
          Continue
        </Button>
      </div>{" "}
    </div>
  );
}

export default FixedBookingForm;
