import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn } from "@/lib/animations";
import FixedBookingControls from "../FixedBookingControls";
import { useTellUsMoreStore } from "../TellUsMore/useTellUsMoreStore";
import SeatIcon from "./SeatIcon";

// SeatIcon component that receives an `isBooked` prop to determine the color
function SelectASeat() {
  const { selectedBus, selectedSeats, addSelectedSeat, removeSelectedSeat } =
    useTellUsMoreStore();

  const bookedSeats = selectedBus?.booked_seats || [];
  const toggleSeat = (seatNumber: number) => {
    if (selectedSeats.includes(seatNumber)) {
      removeSelectedSeat(seatNumber);
    } else {
      addSelectedSeat(seatNumber);
    }
  };

  return (
    <FramerWrapper {...fadeIn} className="px-5 py-5 h-full">
      <div className="flex gap-4 flex-col h-full overflow-y-auto">
        <p className="text-2xl font-semibold text-primary">Select a Seat</p>
        <p>Hover on a seat to view the seat number</p>
        <div className="h-full flex items-center w-full py-10 lg:pb-0">
          <div className="border-4 border-primary rounded-2xl  flex gap-5 items-center w-fit px-5 py-3 h-fit border-t-[15px] lg:border-l-[10px]">
            {/* <div className="bg-primary w-[50px] rounded-l-lg h-full"></div> */}

            <div className="flex h-full flex-row lg:flex-col gap-4 scale-x-[-1]">
              {/* First row: Seats 1 to 10 */}
              <div className="flex flex-col lg:flex-row w-full justify-end items-center gap-5">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div className="w-[30px] lg:w-[60px]"    key={index + 30}>
                    <SeatIcon
                   
                      isBooked={bookedSeats.some(
                        (seat) => seat.seat_number === index + 31
                      )}
                      number={index + 21}
                      isSelected={selectedSeats.includes(index + 21)}
                      toggleSeat={toggleSeat}
                    />
                  </div>
                ))}
              </div>
              {/* Second row: Seats 11 to 20 */}
              <div className="flex  flex-col lg:flex-row w-full items-center justify-end gap-5">
                {Array.from({ length: 1 }).map((_, index) => (
                  <div className="w-[30px] lg:w-[60px]"  key={index + 20}>
                    <SeatIcon
                     
                      isBooked={bookedSeats.some(
                        (seat) => seat.seat_number === 31
                      )}
                      number={31}
                      isSelected={selectedSeats.includes(31)}
                      toggleSeat={toggleSeat}
                    />
                  </div>
                ))}
              </div>
              {/* Third row: Seats 21 to 30 */}
              <div className="flex w-full flex-col lg:flex-row justify-end items-center gap-5">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div className="w-[30px] lg:w-[60px]"  key={index + 10}>
                    <SeatIcon
                     
                      isBooked={bookedSeats.some(
                        (seat) => seat.seat_number === index + 11
                      )}
                      number={index + 11}
                      isSelected={selectedSeats.includes(index + 11)}
                      toggleSeat={toggleSeat}
                    />
                  </div>
                ))}
              </div>
              {/* Fourth row: Seats 31 to 40 */}
              <div className="flex w-full flex-col lg:flex-row justify-end items-center gap-5">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div className="w-[30px] lg:w-[60px]" key={index}>
                    <SeatIcon
                      
                      isBooked={bookedSeats.some(
                        (seat) => seat.seat_number === index + 1
                      )}
                      number={index + 1}
                      isSelected={selectedSeats.includes(index + 1)}
                      toggleSeat={toggleSeat}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <FixedBookingControls />
      </div>
    </FramerWrapper>
  );
}

export default SelectASeat;
