import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn } from "@/lib/animations";
import FixedBookingControls from "../FixedBookingControls";
import { useTellUsMoreStore } from "../TellUsMore/useTellUsMoreStore";
import SeatIcon from "./SeatIcon";
import Bus from "../../../Bus";
import { useAppStore } from "@/lib/store/useAppStore";
import Link from "next/link";

// SeatIcon component that receives an `isBooked` prop to determine the color
function SelectASeat() {
  const { selectedBus, selectedSeats, addSelectedSeat, removeSelectedSeat } =
    useTellUsMoreStore();
  const { DBDetails } = useAppStore();

  return (
    <>
      {DBDetails?.email ? (
        <FramerWrapper {...fadeIn} className="px-5 py-5 h-full">
          <div className="flex gap-4 flex-col h-full overflow-y-auto custom-scrollbar">
            <p className="text-2xl font-semibold text-primary">Select a Seat</p>
            <p>Hover on a seat to view the seat number</p>
            <div className="h-full flex items-center w-full py-10 lg:pb-0">
              <Bus
                selectedBus={selectedBus}
                addSelectedSeat={addSelectedSeat}
                removeSelectedSeat={removeSelectedSeat}
                selectedSeats={selectedSeats}
              />
            </div>
            <FixedBookingControls />
          </div>
        </FramerWrapper>
      ) : (
        <div className="flex items-center text-left gap-4 flex-col justify-center h-[50vh]">
          <p className="text-2xl text-primary fonr-bold">
            Please log in before proceeding
          </p>
          <div className="flex items-center justify-center gap-5">
            <Link href="/login">Login</Link>
            <Link href="/sign-up">Sign Up</Link>
            <Link href="/flexible-bookings">Go Back</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default SelectASeat;
