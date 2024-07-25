import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn } from "@/lib/animations";
import useVehicles from "@/lib/hooks/useTransportBuses";
import { useTellUsMoreStore } from "../TellUsMore/useTellUsMoreStore";
import BusResultsCard from "./BusResultsCard";
import useTransportBuses from "@/lib/hooks/useTransportBuses";

import FixedBookingControls from "../FixedBookingControls";
import BusResultsLoading from "./BusResultsLoading";
import { useEffect, useState } from "react";
function BusResults() {
  const { selectedFrom, selectedTo, busFound, selectedBus, setSelectedBus } =
    useTellUsMoreStore();
  const {
    searchTransportBus,
    issearchTransportBusLoading,
    issearchTransportBusError,
  } = useTransportBuses({
    travelling_from: selectedFrom,
    travelling_to: selectedTo,
  });
  const [showResults, setShowResults] = useState(false);
  useEffect(() => {
    if (!issearchTransportBusLoading) {
      const timer = setTimeout(() => {
        setShowResults(true);
      }, 2000); // Ensure loading animation shows for at least 2 seconds
      return () => clearTimeout(timer);
    }
  }, [issearchTransportBusLoading]);

  return (
    <FramerWrapper
      {...fadeIn}
      className="relative h-full flex flex-col justify-between  ">
      {showResults && searchTransportBus && searchTransportBus?.length > 0 && (
        <div className="flex flex-col py-5 my-5 gap-5 custom-scrollbar  overflow-y-auto">
          <p className="">
            Search Results for buses going from{" "}
            <span className="text-xl font-bold uppercase text-primary">
              {selectedFrom}{" "}
            </span>
            to{" "}
            <span className="text-xl font-bold uppercase text-primary">
              {selectedTo}
            </span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
            {searchTransportBus?.map(
              (schedule) =>
                schedule.transportbusesandschedules_set.length > 0 && (
                  <BusResultsCard key={schedule.id} schedule={schedule} />
                )
            )}
          </div>
        </div>
      )}
      <div
        className={`${
          searchTransportBus && searchTransportBus?.length < 1 && "h-full"
        } justify-between flex flex-col`}>
        <BusResultsLoading />
        <FixedBookingControls
          showBackButton={!issearchTransportBusLoading}
          showForwardButton={Boolean(selectedBus)}
        />
      </div>
    </FramerWrapper>
  );
}

export default BusResults;
