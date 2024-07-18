import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn } from "@/lib/animations";
import { GiCarSeat } from "react-icons/gi";
import FixedBookingControls from "./FixedBookingControls";

const Icon = () => <button className="appearance-none"><GiCarSeat size={60} className="text-primary_100 hover:text-primary hover:scale-[1.02] transition-all duration-300 hover:border-2 hover:border-primary rounded-e-xl"/></button>
function SelectASeat() {
  return (
    <FramerWrapper {...fadeIn} className=" px-5 py-5 h-full">
      <div className="flex gap-4 flex-col h-full overflow-y-auto">
        <p className="text-2xl font-semibold text-primary">Select a Seat</p>

        <div className="border-4 border-primary rounded-2xl h-[50vh] flex gap-5 items-center w-fit px-2 py-3">
          <div className="bg-primary w-[50px] rounded-l-lg rounded- h-full"></div>

          <div className="hidden lg:flex w flex-col gap-4">
            <div className="flex w-full justify-end items-center gap-5">
              {Array.from({ length: 10 }).map((r, index) => (
                <Icon key={index} />
              ))}
            </div>
            <div className="flex w-full  items-center justify-end gap-5">
              {Array.from({ length: 1 }).map((r, index) => (
                <Icon key={index} />
              ))}{" "}
            </div>
            <div className="flex w-full justify-end items-center gap-5">
              {Array.from({ length: 10 }).map((r, index) => (
                <Icon key={index} />
              ))}{" "}
            </div>

            <div className="flex w-full justify-end items-center gap-5">
              {Array.from({ length: 10 }).map((r, index) => (
                <Icon key={index} />
              ))}
            </div>
          </div>
        </div>
        <FixedBookingControls />
      </div>
    </FramerWrapper>
  );
}

export default SelectASeat;
