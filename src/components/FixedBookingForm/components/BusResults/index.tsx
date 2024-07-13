import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn } from "@/lib/animations";
import useVehicles from "@/lib/hooks/useVehicles";
import { useTellUsMoreStore } from "../TellUsMore/useTellUsMoreStore";
import BusResultsCard from "./BusResultsCard";

function BusResults() {
  const { selectedFrom, selectedTo } = useTellUsMoreStore();
  const { searchVehicles, isSearchVehiclesLoading, isSearchVehiclesError } =
    useVehicles({
      travelling_from: selectedFrom,
      travelling_to: selectedTo,
    });
  return (
    <FramerWrapper {...fadeIn} className="py-10">
     {/* <p className=""> <span className="font-bold text-3xl text-primary">{searchVehicles?.[0]?.transportbusesandschedules_set?.length}</span> buses found p</p> */}

     <div className="flex flex-col gap-5">
       {
        searchVehicles?.map((schedule) => (
          <BusResultsCard key={schedule.id} schedule={schedule}/>
        ))
       }
     </div>
    </FramerWrapper>
  );
}

export default BusResults;
