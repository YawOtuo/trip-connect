import FramerWrapper from "@/components/FramerWrapper";
import CustomSelect from "@/components/ui/select";
import { fadeIn } from "@/lib/animations";
// import useTransportFromAndTos from "@/lib/hooks/useTransportFromAndTos";

import { useState, useEffect } from "react";
import { useTellUsMoreStore } from "./useTellUsMoreStore";
import TellUsMoreSearchResults from "./SearchResults";
import useTransportSchedules from "@/lib/hooks/useTransportSchedules";

function TellUsMore() {
  const { schedulesFromAndTo, isSchedulesFromAndToLoading } =
    useTransportSchedules();
  const { setSelectedFrom, setSelectedTo } = useTellUsMoreStore();

  const TravelFromToPill = ({
    label,
    type,
  }: {
    label: string;
    type: "from" | "to";
  }) => {
    return (
      <button
        onClick={() => {
          type == "from" && setSelectedFrom(label);
          type == "to" && setSelectedTo(label);
        }}
        className="border-2 border-primary appearance-none px-5 py-1 hover:bg-primary hover:text-white transition-all rounded-3xl bg-white  ">
        {label}
      </button>
    );
  };
  return (
    <FramerWrapper {...fadeIn}>
      <div className="flex flex-col gap-1">
        <p className="text-2xl text-primary font-semibold">Tell Us More</p>
        <div className="grid grid-cols-2 gap-10 py-10">
          <div className="w-full flex gap-5 flex-col">
            <p>Where are you travelling from?</p>

            {isSchedulesFromAndToLoading && <p>Loading Schedules</p>}
            <div className="flex gap-5 flex-wrap">
              {schedulesFromAndTo?.map((r, index) => (
                <TravelFromToPill key={index} type="from" label={r?.travelling_from} />
              ))}
            </div>
          </div>
          <div className="w-full flex gap-5 flex-col ">
            <p>Where are you travelling to?</p>
            <div className="flex gap-5 flex-wrap">
              {schedulesFromAndTo?.map((r, index) => (
                <TravelFromToPill key={index} type="to" label={r?.travelling_to} />
              ))}
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </FramerWrapper>
  );
}

export default TellUsMore;
