import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn } from "@/lib/animations";
import useVehicles from "@/lib/hooks/useTransportBuses";
import { useTellUsMoreStore } from "../TellUsMore/useTellUsMoreStore";
import BusResultsCard from "./BusResultsCard";
import useTransportBuses from "@/lib/hooks/useTransportBuses";

function BusResults() {
  const { selectedFrom, selectedTo } = useTellUsMoreStore();
  const {
    searchTransportBus,
    issearchTransportBusLoading,
    issearchTransportBusError,
  } = useTransportBuses({
    travelling_from: selectedFrom,
    travelling_to: selectedTo,
  });
  return (
    <FramerWrapper {...fadeIn} className="py-10">
      {/* <p className=""> <span className="font-bold text-3xl text-primary">{searchTransportBus?.[0]?.transportbusesandschedules_set?.length}</span> buses found p</p> */}
      {searchTransportBus && (
        <div className="flex flex-col ">
          <p>Search Results</p>
          <div className="flex flex-col gap-5">
            {searchTransportBus?.map((schedule) => (
              <BusResultsCard key={schedule.id} schedule={schedule} />
            ))}
          </div>
        </div>
      )}
      {issearchTransportBusLoading && <p>Searching</p>}
    </FramerWrapper>
  );
}

export default BusResults;
