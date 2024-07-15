import FramerWrapper from "@/components/FramerWrapper";
import CustomSelect from "@/components/ui/select";
import { fadeIn } from "@/lib/animations";
// import useTransportFromAndTos from "@/lib/hooks/useTransportFromAndTos";

import { useState, useEffect } from "react";
import { useTellUsMoreStore } from "./useTellUsMoreStore";
import useTransportSchedules from "@/lib/hooks/useTransportSchedules";
import TravelFromToPill from "./components/TravelFromPill";

function TellUsMore() {
  const { schedulesFromAndTo, isSchedulesFromAndToLoading } =
    useTransportSchedules();

  return (
    <FramerWrapper {...fadeIn}>
      {schedulesFromAndTo && (
        <div className="flex flex-col gap-1">
          <p className="text-2xl text-primary font-semibold">Tell Us More</p>
          <div className="grid grid-cols-2 gap-10 py-10">
            <div className="w-full flex gap-5 flex-col">
              <p>Where are you travelling from?</p>

              {isSchedulesFromAndToLoading && <p>Loading Schedules</p>}
              <div className="flex gap-5 flex-wrap">
                {schedulesFromAndTo?.map((r, index) => (
                  <TravelFromToPill
                    key={index}
                    type="from"
                    label={r?.travelling_from}
                  />
                ))}
              </div>
            </div>
            <div className="w-full flex gap-5 flex-col ">
              <p>Where are you travelling to?</p>
              <div className="flex gap-5 flex-wrap">
                {schedulesFromAndTo?.map((r, index) => (
                  <TravelFromToPill
                    key={index}
                    type="to"
                    label={r?.travelling_to}
                  />
                ))}
              </div>
            </div>{" "}
          </div>{" "}
        </div>
      )}
      <div>{isSchedulesFromAndToLoading && <div>Loading Schedules</div>}</div>
    </FramerWrapper>
  );
}

export default TellUsMore;
