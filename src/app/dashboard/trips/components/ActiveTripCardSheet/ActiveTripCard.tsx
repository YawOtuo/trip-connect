import { FixedBooking } from "@/lib/types/booking";
import { FaE, FaEye } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

import { IoMdBus } from "react-icons/io";

import moment from "moment";

type Props = {
  fixedbooking: FixedBooking;
};

function ActiveTripCard({ fixedbooking }: Props) {
  return (
    <div className="hover:scale-[1.01] transition-all duration-300 cursor-pointer text-base">
      <div className="flex flex-col gap-3 p-5 border-2 rounded-md items-start justify-center">
        <div className="flex items-center gap-2">
          <IoMdBus className="text-primary" size={30} />
          <p className="text-primary  font-semibold">
            <span className="text-2xl font-bold">
              {fixedbooking.bus_and_schedule.transportbus.bus_type}
            </span>
          </p>
          <p>
            #{fixedbooking.bus_and_schedule.transportbus.vehicle.vehicle_number}
          </p>
        </div>
        {/* <div className="w-full flex items-center justify-between pr-5">
          <p>
            Status:{" "}
            <span className="border-2 px-2 py-1 rounded-md bg-slate-100">
              {fixedbooking.status}
            </span>
          </p>
          <FaEye size={20} />
        </div>{" "} */}

        <div className="flex items-center gap-2">
          {fixedbooking.bus_and_schedule.schedule.travelling_from}
          <FaArrowRightLong size={20} className="text-primary-100" />
          {fixedbooking.bus_and_schedule.schedule.travelling_to}
        </div>

        <div className="flex items-start text-left md:items-center gap-1">
          <MdOutlineAccessTime size={25} className="text-primary-100" />
          <p>
            Departure Time:{" "}
            {moment(
              fixedbooking.bus_and_schedule.schedule.departure_time
            ).format("Do MMMM YYYY hh:mm")}
          </p>
        </div>
        {/* <p>
          Booked:{" "}
          {moment(fixedbooking.created_at).format("Do MMMM YYYY hh:mm")}
        </p> */}
        <div className="flex items-center gap-2">
          Paid :{" "}
          <p>
            {fixedbooking.is_paid ? (
              <span className="text-green-800">Yes</span>
            ) : (
              <span>No</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActiveTripCard;
