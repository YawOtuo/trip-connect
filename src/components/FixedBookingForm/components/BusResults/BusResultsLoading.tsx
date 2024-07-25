import { useEffect, useState } from "react";
import useTransportBuses from "@/lib/hooks/useTransportBuses";
import { useTellUsMoreStore } from "../TellUsMore/useTellUsMoreStore";
import LottieFileBuilder from "@/components/LottieFileBuilder";
import animationData from "@/components/lotties/bus-loading.json";

function BusResultsLoading() {
  const { selectedFrom, selectedTo } = useTellUsMoreStore();
  const { searchTransportBus, issearchTransportBusLoading } = useTransportBuses(
    {
      travelling_from: selectedFrom,
      travelling_to: selectedTo,
    }
  );

  const [showLoading, setShowLoading] = useState(true);



  useEffect(() => {
    if (!issearchTransportBusLoading) {
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 2000); // Ensure loading animation shows for at least 2 seconds
      return () => clearTimeout(timer);
    }
  }, [issearchTransportBusLoading]);

  return (
    <div className="w-full h-full">
      {showLoading && (
        <div className="flex justify-start flex-col items-center h-full w-full">
          <div className="hidden lg:flex">
            <LottieFileBuilder
              animationData={animationData}
              width={"40%"}
              height={"100%"}
            />
          </div>
          <div className=" lg:hidden">
            <LottieFileBuilder
              animationData={animationData}
              width={"60%"}
              height={"100%"}
            />
          </div>
          <p className="text-primary font-bold">Searching for a bus for you.</p>
        </div>
      )}
      {!showLoading &&
        !issearchTransportBusLoading &&
        searchTransportBus &&
        searchTransportBus?.length < 1 && <p>Sorry!! No results found.</p>}
    </div>
  );
}

export default BusResultsLoading;
