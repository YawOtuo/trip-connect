import { GiCarSeat } from "react-icons/gi";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTellUsMoreStore } from "../TellUsMore/useTellUsMoreStore";
import { PiSeatDuotone } from "react-icons/pi";
import { MdEventSeat } from "react-icons/md";

type Props = {
  isBooked: boolean;
  number: number;
  isSelected: boolean;
  toggleSeat: any;
};
const SeatIcon = ({ isBooked, number, toggleSeat, isSelected }: Props) => {
  const {
    setScheduleSelected,
    selectedBus,
    customSeat,
    setSelectedBus,
    setCustomSeat,
  } = useTellUsMoreStore();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {" "}
          <button
            className="appearance-none"
            onClick={() => !isBooked && toggleSeat(number)}>
           <div className="hidden lg:flex">
              <PiSeatDuotone
                size={"100%"}
                className={`${
                  isBooked
                    ? "text-red-500"
                    : isSelected
                    ? "text-green-500"
                    : "text-primary-100"
                } hover:text-primary hover:scale-[1.02] transition-all duration-300 hover:border-2 hover:border-primary rounded-e-xl`}
              />
           </div>
           <div className="lg:hidden">
              <MdEventSeat
                size={"100%"}
                className={`${
                  isBooked
                    ? "text-red-500"
                    : isSelected
                    ? "text-green-500"
                    : "text-primary-100"
                } hover:text-primary hover:scale-[1.02] transition-all duration-300 hover:border-2 hover:border-primary rounded-e-xl`}
              />
           </div>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Seat Number:{number} </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SeatIcon;
