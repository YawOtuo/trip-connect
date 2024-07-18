import FramerWrapper from "@/components/FramerWrapper";
import CustomSelect from "@/components/ui/select";
import { fadeIn } from "@/lib/animations";
// import useTransportFromAndTos from "@/lib/hooks/useTransportFromAndTos";

import { useState, useEffect } from "react";
import animationData from "@/components/lotties/circles-loading.json";
import useTransportSchedules from "@/lib/hooks/useTransportSchedules";
import TravelFromToPill from "./components/TravelFromPill";
import LottieFileBuilder from "@/components/LottieFileBuilder";
import FixedBookingControls from "../FixedBookingControls";
import { useTellUsMoreStore } from "./useTellUsMoreStore";

function TellUsMore() {
  const { schedulesFromAndTo, isSchedulesFromAndToLoading } =
    useTransportSchedules();

  // const {setBusFound} = useTellUsMoreStore();

  // useEffect(() => {
  //   setBusFound(true)
  // }, []);

  return (
    <FramerWrapper {...fadeIn} className="h-full flex flex-col justify-between">
      {schedulesFromAndTo && (
        <div className="flex flex-col gap-1">
          <p className="text-2xl text-primary font-semibold">Tell Us More</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
            <div className="w-full flex gap-5 flex-col">
              <p>Where are you travelling from?</p>

              <div className="flex gap-5 flex-wrap">
                {schedulesFromAndTo[0].travelling_from?.map((r, index) => (
                  <TravelFromToPill key={index} type="from" label={r} />
                ))}
              </div>
            </div>
            <div className="w-full flex gap-5 flex-col ">
              <p>Where are you travelling to?</p>
              <div className="flex gap-5 flex-wrap">
                {schedulesFromAndTo[1].travelling_to?.map((r, index) => (
                  <TravelFromToPill key={index} type="to" label={r} />
                ))}
              </div>
            </div>{" "}
          </div>{" "}
        </div>
      )}
      <div>
        {!schedulesFromAndTo && isSchedulesFromAndToLoading && (
          <div className="flex justify-center flex-col items-center">
            <LottieFileBuilder animationData={animationData} />
            <p className="text-primary font-bold">
              Just a sec!! Getting bus schedules ready
            </p>
          </div>
        )}
      </div>
      {schedulesFromAndTo && <FixedBookingControls showBackButton={false} />}{" "}
      {!schedulesFromAndTo && !isSchedulesFromAndToLoading && <p>An error occured</p> }{" "}
    </FramerWrapper>
  );
}

export default TellUsMore;
