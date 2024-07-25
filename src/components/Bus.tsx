import { TransportBus } from "@/lib/types/vehicles";
import SeatIcon from "./FixedBookingForm/components/SelectASeat/SeatIcon";

type Props = {
  selectedBus: TransportBus | null;
  selectedSeats?: number[];
  addSelectedSeat?: (seat: number) => void;
  removeSelectedSeat?: (seat: number) => void;
};
function Bus({
  selectedBus,
  selectedSeats,
  addSelectedSeat,
  removeSelectedSeat,
}: Props) {
  const bookedSeats = selectedBus?.booked_seats || [];
  const toggleSeat = (seatNumber: number) => {
    if (selectedSeats?.includes(seatNumber)) {
      removeSelectedSeat && removeSelectedSeat(seatNumber);
    } else {
      addSelectedSeat && addSelectedSeat(seatNumber);
    }
  };
  return (
    <div className="border-4 border-primary rounded-2xl  flex gap-5 items-center w-fit px-5 py-3 h-fit border-t-[15px] md:border-t-4 md:border-l-[10px]">
      {/* <div className="bg-primary w-[50px] rounded-l-md h-full"></div> */}

      <div className="flex h-full flex-row md:flex-col gap-4 scale-x-[-1] md:scale-x-[1]">
        {/* First row: Seats 1 to 10 */}
        <div className="flex flex-col md:flex-row w-full justify-end items-center gap-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="w-[30px] md:w-[60px]" key={index + 30}>
              <SeatIcon
                isBooked={bookedSeats.some(
                  (seat) => seat.seat_number === index + 31
                )}
                number={index + 21}
                isSelected={selectedSeats?.includes(index + 21)}
                toggleSeat={toggleSeat}
              />
            </div>
          ))}
        </div>
        {/* Second row: Seats 11 to 20 */}
        <div className="flex  flex-col md:flex-row w-full items-center justify-end gap-5">
          {Array.from({ length: 1 }).map((_, index) => (
            <div className="w-[30px] md:w-[60px]" key={index + 20}>
              <SeatIcon
                isBooked={bookedSeats.some((seat) => seat.seat_number === 31)}
                number={31}
                isSelected={selectedSeats?.includes(31)}
                toggleSeat={toggleSeat}
              />
            </div>
          ))}
        </div>
        {/* Third row: Seats 21 to 30 */}
        <div className="flex w-full flex-col md:flex-row justify-end items-center gap-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="w-[30px] md:w-[60px]" key={index + 10}>
              <SeatIcon
                isBooked={bookedSeats.some(
                  (seat) => seat.seat_number === index + 11
                )}
                number={index + 11}
                isSelected={selectedSeats?.includes(index + 11)}
                toggleSeat={toggleSeat}
              />
            </div>
          ))}
        </div>
        {/* Fourth row: Seats 31 to 40 */}
        <div className="flex w-full flex-col md:flex-row justify-end items-center gap-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="w-[30px] md:w-[60px]" key={index}>
              <SeatIcon
                isBooked={bookedSeats.some(
                  (seat) => seat.seat_number === index + 1
                )}
                number={index + 1}
                isSelected={selectedSeats?.includes(index + 1)}
                toggleSeat={toggleSeat}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bus;
