import useTransportSchedules from "@/lib/hooks/useVehicles";
import { useTellUsMoreStore } from "./useTellUsMoreStore";

import { Button } from "@/components/ui/button";
import SearchResultsCard from "./SearchResultsCard";

function TellUsMoreSearchResults() {
  const { selectedFrom, selectedTo } = useTellUsMoreStore();
//   const { schedules, schedulesError, isSchedulesLoading } =
//     useTransportSchedules({
//       travelling_from: selectedFrom,
//       travelling_to: selectedTo,
//     });
  return (
    <div>
      <div className="flex items-center gap-5">
        <p>Search reults for buses travelling from</p>
        <p>{selectedFrom}</p> to
        <p>{selectedTo}</p>
      </div>
      <div className="flex flex-col gap-2">
        {/* {schedules?.map((r, index) => (
          <SearchResultsCard key={index} results={r} index={index} />
        ))} */}
      </div>
    </div>
  );
}

export default TellUsMoreSearchResults;
