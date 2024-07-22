import { Button } from "@/components/ui/button";
import FixedBookingControls from "./FixedBookingControls";
import { useTellUsMoreStore } from "./TellUsMore/useTellUsMoreStore";
import { FaLongArrowAltRight } from "react-icons/fa";

function Confirm() {
  const {
    setScheduleSelected,
    selectedBus,
    customSeat,
    setSelectedBus,
    setCustomSeat,
    scheduleSelected,
    selectedFrom,
    selectedTo,
  } = useTellUsMoreStore();
  return (
    <div className="flex flex-col gap-5 py-5">
      <p>All is set</p>
      <div className="rounded-2xl shadow-md p-5 py-10">
        <p className="text-xl text-primary">Summary</p>
        <div className="flex items-center gap-5">
          <p>{selectedFrom}</p>
          <FaLongArrowAltRight />
          <p>{selectedTo}</p>
        </div>

        <div>#{selectedBus?.vehicle.vehicle_number}</div>
        {/* <div>{scheduleSelected}</div> */}

        {/* // <p>{scheduleSelected}</p> */}
      </div>
      <div className="flex w-full gap-5">
        <FixedBookingControls ready={true} />
      </div>
    </div>
  );
}

export default Confirm;
