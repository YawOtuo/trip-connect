"use client";
import useFixedBooking from "@/lib/hooks/useFixedBookings";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import StartHere from "./components/StartHere";
import { useFixedBookingFormStore } from "./FixedBookingStore";
import { pages } from "./pagesData";
import useFBooking from "./useFBooking";
import { useTellUsMoreStore } from "./components/TellUsMore/useTellUsMoreStore";
import { useAppStore } from "@/lib/store/useAppStore";
import { useEffect } from "react";

function FixedBookingForm() {
  const { progressValue, setProgressValue, activePage, setActivePage } =
    useFixedBookingFormStore();
  const { handleBack, handleContinue, handleCreateFixedBooking } =
    useFBooking();
  const { setScheduleSelected, selectedBus, setSelectedBus } =
    useTellUsMoreStore();

  const { DBDetails } = useAppStore();

  // useEffect(() => {
  //   return setActivePage(0);
  // }, [setActivePage]);

  return (
    <div className=" px-5">
      <div className="px-1">
        <Progress value={progressValue} className="w-full" />
      </div>
      <div className="h-[70vh] ">{pages[activePage].component}</div>
    </div>
  );
}

export default FixedBookingForm;
