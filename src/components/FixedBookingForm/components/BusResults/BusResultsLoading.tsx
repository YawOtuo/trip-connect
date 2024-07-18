import useTransportBuses from "@/lib/hooks/useTransportBuses";
import { useTellUsMoreStore } from "../TellUsMore/useTellUsMoreStore";
import LottieFileBuilder from "@/components/LottieFileBuilder";
import animationData from "@/components/lotties/bus-loading.json";

function BusResultsLoading() {
  const { selectedFrom, selectedTo, busFound } = useTellUsMoreStore();
  const {
    searchTransportBus,
    issearchTransportBusLoading,
    issearchTransportBusError,
  } = useTransportBuses({
    travelling_from: selectedFrom,
    travelling_to: selectedTo,
  });
  return (
    <div className="w-full">
      {issearchTransportBusLoading && (
        <div className="flex justify-start flex-col items-center  ">
          <LottieFileBuilder animationData={animationData} />
          <p className="text-primary font-bold">Searching for a bus for you.</p>
        </div>
      )}
      {searchTransportBus &&
        !issearchTransportBusLoading &&
        searchTransportBus?.length < 1 && <p>Sorry!! no results found</p>}
    </div>
  );
}

export default BusResultsLoading;
