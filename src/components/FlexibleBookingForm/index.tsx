"use client";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { useFlexibleBookingStore } from "./FlexibleBookingStore";
import { pages } from "./pagesData";
import useFBooking from "./useFlexibleBookingForm";

function FlexibleBookingForm() {
  const { progressValue, setProgressValue, activePage } = useFlexibleBookingStore();
  

  return (
    <div className="">
      <div className="">
      <Progress value={progressValue} className="w-full" />
      </div>



      <div className=" h-full min-h-[90vh]">{pages[activePage].component}</div>


    </div>
  );
}

export default FlexibleBookingForm;
