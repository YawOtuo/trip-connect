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
    selectedSeats
  } = useTellUsMoreStore();

  return (
    <div className="flex flex-col gap-5 py-5 h-full">
      <p>All is set</p>
      <div className="rounded-2xl flex items-center justify-center flex-col w-full  h-full border-2 p-5 py-10">
        <p className=" font-bold">Summary</p>
        <div>
          <p className="text-primary font-bold text-5xl">
            GHS {Number(scheduleSelected?.price) * (selectedSeats.length || 1)}
          </p>
        </div>
        <div className="flex items-center gap-5">
          <p>{selectedFrom}</p>
          <FaLongArrowAltRight />
          <p>{selectedTo}</p>
        </div>

        {/* <div>#{selectedBus?.vehicle.vehicle_number}</div> */}
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
