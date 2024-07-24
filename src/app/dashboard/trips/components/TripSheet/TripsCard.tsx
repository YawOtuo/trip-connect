import { FixedBooking } from "@/lib/types/booking";
import { FaE, FaEye } from "react-icons/fa6";

import moment from "moment";

type Props = {
  fixedbooking: FixedBooking;
};

function TripCard({ fixedbooking }: Props) {
  return (
    <div className="hover:scale-[1.01] transition-all duration-300 cursor-pointer">
      <div className="hidden lg:grid grid-cols-7 gap-5 p-5 border-2 rounded-md items-center justify-center">
        <p>
          #{fixedbooking.bus_and_schedule.transportbus.vehicle.vehicle_number}
        </p>
        <p className="text-primary font-bold">
          {fixedbooking.bus_and_schedule.transportbus.bus_type}
        </p>
        <p>
          {moment(fixedbooking.bus_and_schedule.schedule.departure_time).format(
            "Do MMMM YYYY hh:mm"
          )}
        </p>
        {/* <p>
            {fixedbooking.bus_and_schedule.transportbus.booked_seats_count}
          </p> */}
        <p>{moment(fixedbooking.created_at).format("Do MMMM YYYY hh:mm")}</p>
        <p>{fixedbooking.status}</p>
        <p>
          {fixedbooking.is_paid ? (
            <span className="text-green-800">Yes</span>
          ) : (
            <span>No</span>
          )}
        </p>
        <div className="w-full flex items-center justify-end px-5">
          <FaEye size={20} />
        </div>{" "}
      </div>

      <div className="lg:hidden flex flex-col gap-3 p-5 border-2 rounded-md items-start justify-center">
        <p>
          Vehicle Number: #
          {fixedbooking.bus_and_schedule.transportbus.vehicle.vehicle_number}
        </p>
        <p className="text-primary  font-semibold">
          Bus Type:{" "}
          <span className="text-2xl font-bold">
            {fixedbooking.bus_and_schedule.transportbus.bus_type}
          </span>
        </p>
        <p className="text-left md:text-center">
          Departure Time:{" "}
          {moment(fixedbooking.bus_and_schedule.schedule.departure_time).format(
            "Do MMMM YYYY hh:mm"
          )}
        </p>
        <p className="text-left md:text-center">
          Date Booked:{" "}
          {moment(fixedbooking.created_at).format("Do MMMM YYYY hh:mm")}
        </p>
        <div className="w-full flex items-center justify-between pr-5">
          <p>
            Status:{" "}
            <span className="border-2 px-2 py-1 rounded-md bg-slate-100">
              {fixedbooking.status}
            </span>
          </p>
          <FaEye size={20} />
        </div>{" "}
      </div>
    </div>
  );
}

export default TripCard;
