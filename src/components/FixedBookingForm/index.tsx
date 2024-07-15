"use client";
import useFixedBooking from "@/lib/hooks/useFixedBookings";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import StartHere from "./components/StartHere";
import { useFixedBookingFormStore } from "./FixedBookingStore";
import { pages } from "./pagesData";
import useFBooking from "./useFBooking";
import { useTellUsMoreStore } from "./components/TellUsMore/useTellUsMoreStore";

function FixedBookingForm() {
  const { progressValue, setProgressValue, activePage } =
    useFixedBookingFormStore();
  const { handleBack, handleContinue, handleCreateFixedBooking } =
    useFBooking();
  const { setScheduleSelected, selectedBus, setSelectedBus } =
    useTellUsMoreStore();

  return (
    <div className=" px-5">
      <div className="px-1">
        <Progress value={progressValue} className="w-full" />
      </div>
      <div className="min-h-[70vh]">{pages[activePage].component}</div>
      <div className="w-full flex gap-5 items-center justify-end">
        <Button
          size={"sm"}
          variant={"outline"}
          className="px-14"
          onClick={handleBack}>
          Back
        </Button>
        {activePage !== pages.length - 1 && (
          <Button size={"sm"} className="px-14" onClick={handleContinue}>
            Continue
          </Button>
        )}
        {activePage == pages.length - 1 && (
          <Button
            size={"sm"}
            className="px-14"
            onClick={() => handleCreateFixedBooking()}>
           Book
          </Button>
        )}
      </div>{" "}
    </div>
  );
}

export default FixedBookingForm;
