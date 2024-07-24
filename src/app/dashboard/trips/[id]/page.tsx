"use client";

import CheckoutButton from "@/components/CheckoutButton/CheckoutButton";
import useFlexibleBookings from "@/lib/hooks/useFlexibleBookings";
import useGetFlexibleBookings from "@/lib/hooks/useGetFlexibleBookings";
import Image from "next/image";
import useTrips from "../components/useTrips";
import useFixedBooking from "@/lib/hooks/useFixedBookings";
import moment from "moment";
import { FaBus, FaLongArrowAltRight } from "react-icons/fa";
import { TbCoins } from "react-icons/tb";

type Props = {
  params: { id: number };
};
function Page({ params }: Props) {
  const { OneFixedBookings } = useFixedBooking(params?.id);
  const { handlePayment } = useTrips();
  return (
    <>
      {OneFixedBookings ? (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-5 text-2xl text-primary font-bold">
            <p> {OneFixedBookings.bus_and_schedule.schedule.travelling_from}</p>
            <FaLongArrowAltRight />
            <p> {OneFixedBookings.bus_and_schedule.schedule.travelling_to}</p>
          </div>

          <div className="flex flex-col gap-1">
            <p>
              Date Booked:{" "}
              {moment(OneFixedBookings.booking_date).format(
                "dddd Do MMMM YYYYY"
              )}
            </p>
            <p>
              Departure Time: &nbsp;
              {moment(
                OneFixedBookings.bus_and_schedule.schedule.departure_time
              ).format("dddd Do MMMM YYYY")}
            </p>
            <p>
              Estimated Arrival Time:{" "}
              {moment(
                OneFixedBookings.bus_and_schedule.schedule
                  .estimated_arrival_time
              ).format("dddd Do MMMM YYYY")}
            </p>

            <div className="flex items-center gap-1">
              <TbCoins />
              <p>{OneFixedBookings.cost}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaBus />
              <p> {OneFixedBookings.bus_and_schedule.transportbus.bus_type}</p>
            </div>
          </div>

          <div>
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
