import { FixedBooking } from "@/lib/types/booking";
import moment from "moment";
type Props = {
  fixedbooking: FixedBooking;
};

function TripCard({ fixedbooking }: Props) {
  return (
    <div>
      <div className="hidden lg:grid grid-cols-5 gap-5 p-5 border-2 rounded-md items-center justify-center">
        <p>
          {moment(fixedbooking.bus_and_schedule.schedule.departure_time).format(
            "Do MMMM YYYY hh:mm"
          )}
        </p>
        <p className="text-primary font-semibold">{fixedbooking.bus_and_schedule.transportbus.bus_type}</p>
        <p>
          #{fixedbooking.bus_and_schedule.transportbus.vehicle.vehicle_number}
        </p>
        {/* <p>
            {fixedbooking.bus_and_schedule.transportbus.booked_seats_count}
          </p> */}
        <p>{moment(fixedbooking.created_at).format("Do MMMM YYYY hh:mm")}</p>

        <p>{fixedbooking.status}</p>
      </div>
      <div className="lg:hidden flex flex-col gap-3 p-5 border-2 rounded-md items-start justify-center">
        <p>
          Departure Time:{" "}
          {moment(fixedbooking.bus_and_schedule.schedule.departure_time).format(
            "Do MMMM YYYY hh:mm"
          )}
        </p>
        <p className="text-primary font-semibold">Bus Type: {fixedbooking.bus_and_schedule.transportbus.bus_type}</p>
        <p>
          Vehicle Number:
          #{fixedbooking.bus_and_schedule.transportbus.vehicle.vehicle_number}
        </p>
        {/* <p>
              {fixedbooking.bus_and_schedule.transportbus.booked_seats_count}
            </p> */}
        <p>
          Date Booked:{" "}
          {moment(fixedbooking.created_at).format("Do MMMM YYYY hh:mm")}
        </p>

        <p>Status: {fixedbooking.status}</p>
      </div>
    </div>
  );
}

export default TripCard;
