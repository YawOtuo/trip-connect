import CheckoutButton from "@/components/CheckoutButton/CheckoutButton";
import usePayStack from "@/components/CheckoutButton/usePaystack";
import { Button } from "@/components/ui/button";
import { FixedBooking } from "@/lib/types/booking";
import moment from "moment";
import Image from "next/image";
import useTrips from "./useTrips";

type Props = {
  data: FixedBooking;
};

function EditFBDetails({ data }: Props) {
  const { handlePayment } = useTrips();
  return (
    <div className="flex flex-col gap-10 lg:gap-5 h-screen mdax-h-[800px] justify-center">
      <div className="relative aspect-[3/2]  w-full max-w-sm ">
        <Image
          src="/Bismarkbus.png" // Ensure this image path is correct
          objectFit="cover"
          alt="Bus"
          className="bus-details-image"
          fill
        />
      </div>
      <div className="flex flex-col gap-2 justify-center items-start">
        <p>
          Date Booked: {moment(data.created_at).format("Do MMMM YYYY hh:mm")}
        </p>{" "}
        <p>
          Departure Time:{" "}
          {moment(data.bus_and_schedule.schedule.departure_time).format(
            "Do MMMM YYYY hh:mm"
          )}
        </p>
        <p>
          Status:{" "}
          <span className="border-2 bg-slate-200 px-3 py-1 rounded-md">
            {data.status}
          </span>
        </p>
        <p>
          {" "}
          Bus Number:
          <span className="text-2xl font-semibold text-primary">
            {" "}
            #{data.bus_and_schedule.transportbus.vehicle.vehicle_number}
          </span>
        </p>
        <p>
          Type:{" "}
          <span className="text-primary font-bold">
            {data.bus_and_schedule.transportbus.bus_type}
          </span>
        </p>{" "}
        <div className="w-full flex-col flex items-center gap-5 mt-10">
          <CheckoutButton onClick={() => handlePayment()} />
          <div className="flex flex-row w-full gap-5">
            <Button variant={"outline"} className="w-full">
              Change Seats
            </Button>
            <Button variant={"destructive"} className="w-full">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditFBDetails;
