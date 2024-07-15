import { FixedBooking } from "@/lib/types/booking";

type Props = {
  fixedbooking: FixedBooking;
};

function TripCard({ fixedbooking }: Props) {
  return (
    <div>
      <div className="hidden lg:grid grid-cols-5 gap-5 p-5 border-2 rounded-md items-center justify-center">
        <p>{fixedbooking.bus_and_schedule.schedule.departure_time}</p>
        <p>{fixedbooking.bus_and_schedule.transportbus.bus_type}</p>
        <p>
          {fixedbooking.bus_and_schedule.transportbus.vehicle.vehicle_number}
        </p>
        {/* <p>
            {fixedbooking.bus_and_schedule.transportbus.booked_seats_count}
          </p> */}
        <p>{fixedbooking.created_at}</p>

        <p>{fixedbooking.status}</p>
      </div>
      <div className="lg:hidden flex flex-col gap-3 p-5 border-2 rounded-md items-start justify-center">
        <p>Departure Time: {fixedbooking.bus_and_schedule.schedule.departure_time}</p>
        <p>Bus Type: {fixedbooking.bus_and_schedule.transportbus.bus_type}</p>
        <p>Vehicle Number:
          {fixedbooking.bus_and_schedule.transportbus.vehicle.vehicle_number}
        </p>
        {/* <p>
              {fixedbooking.bus_and_schedule.transportbus.booked_seats_count}
            </p> */}
        <p>Date Booked: {fixedbooking.created_at}</p>

        <p>Status: {fixedbooking.status}</p>
      </div>
    </div>
  );
}

export default TripCard;
