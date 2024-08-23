import CheckoutButton from "@/components/CheckoutButton/CheckoutButton";
import { FlexibleBooking } from "@/lib/types/flexiblebooking";
import { FaBus, FaLongArrowAltRight } from "react-icons/fa";
import { TbCoins } from "react-icons/tb";
import useTrips from "../../components/useTrips";
import { FixedBooking } from "@/lib/types/booking";
import moment from "moment";

type Props = {
  data: FixedBooking;
};

function TripDetails({ data }: Props) {
  const { handlePayment } = useTrips();
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-5 text-2xl text-primary font-bold">
        <p> {data.bus_and_schedule.schedule.travelling_from}</p>
        <FaLongArrowAltRight />
        <p> {data.bus_and_schedule.schedule.travelling_to}</p>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-sm">
          Date Booked: {moment(data.booking_date).format("dddd Do MMMM YYYYY")}
        </p>
        <p>
          Departure Time: &nbsp;
          {moment(data.bus_and_schedule.schedule.departure_time).format(
            "dddd Do MMMM YYYY"
          )}
        </p>
        <p>
          Estimated Arrival Time:{" "}
          {moment(data.bus_and_schedule.schedule.estimated_arrival_time).format(
            "dddd Do MMMM YYYY"
          )}
        </p>

        <p>
          Booked Seats: {data.bus_and_schedule.transportbus.booked_seats.length}
        </p>
        <div className="flex items-center gap-1">
          <TbCoins />
          <p>{data.cost}</p>
        </div>
        <div className="flex items-center gap-2">
          <FaBus />
          <p> {data.bus_and_schedule.transportbus.bus_type}</p>
        </div>
      </div>

      <div>
        {!data.is_paid && (
          <div className="flex flex-col h-fit">
            <CheckoutButton onClick={() => handlePayment(data.cost, data.id)} />
          </div>
        )}
        {data.is_paid && (
          <div className="flex items-center justify-center font-bold border-2 rounded-lg py-3 w-full uppercase bg-green-700 text-white">
            Booked
          </div>
        )}
      </div>
    </div>
  );
}

export default TripDetails;
