"use client";

import CheckoutButton from "@/components/CheckoutButton/CheckoutButton";
import useFlexibleBookings from "@/lib/hooks/useFlexibleBookings";
import useGetFlexibleBookings from "@/lib/hooks/useGetFlexibleBookings";
import Image from "next/image";
import useTrips from "../components/useTrips";
import useFixedBooking from "@/lib/hooks/useFixedBookings";

type Props = {
  params: { id: number };
};
function Page({ params }: Props) {
  const { OneFixedBookings } = useFixedBooking(params?.id);
  const { handlePayment } = useTrips();
  return (
    <>
      {OneFixedBookings ? (
        <div>
          {/* {OneFixedBookings && (
            <div className="relative aspect-[3/2] w-[50vw] overflow-hidden rounded-md">
              <Image
                fill
                objectFit="cover"
                alt={
                  OneFixedBookings.bus_and_schedule.transportbus.vehicle.name
                }
                src={`https://res.cloudinary.com/daurieb51/${OneFixedBookings.bus_and_schedule.transportbus.vehicle.images?.[0]?.image}`}
              />
            </div>
          )} */}

          <div className="flex flex-col gap-1">
            <p>{OneFixedBookings.booking_date}</p>{" "}
            <p>{OneFixedBookings.bus_and_schedule.schedule.departure_time}</p>
            <p>
              {" "}
              {
                OneFixedBookings.bus_and_schedule.schedule
                  .estimated_arrival_time
              }
            </p>
            <p> {OneFixedBookings.bus_and_schedule.schedule.travelling_from}</p>
            <p> {OneFixedBookings.bus_and_schedule.schedule.travelling_to}</p>
            <p> {OneFixedBookings.cost}</p>
            <p> {OneFixedBookings.bus_and_schedule.transportbus.bus_type}</p>
          </div>

          <div>
            <p>{OneFixedBookings.cost}</p>
            <div className="flex flex-col h-fit">
              <CheckoutButton
                onClick={() =>
                  handlePayment(OneFixedBookings.cost, OneFixedBookings.id)
                }
              />
            </div>{" "}
          </div>
        </div>
      ) : (
        <p>Loading Data...</p>
      )}{" "}
    </>
  );
}

export default Page;
