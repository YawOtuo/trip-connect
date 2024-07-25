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
import TripOrderDetails from "./components/TripOrderDetails";

type Props = {
  params: { id: number };
};
function Page({ params }: Props) {
  const { OneFixedBookings } = useFixedBooking(params?.id);
  const { handlePayment } = useTrips();
  return (
    <div className="h-full">
      {OneFixedBookings ? (
        <div className="flex flex-col gap-5 w-full items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full w-full justify-center items-center">
            {OneFixedBookings && (
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border-2">
                <Image
                  fill
                  objectFit="cover"
                  alt={OneFixedBookings.bus_and_schedule.transportbus.bus_type}
                  src={`/Bismarkbus.png`}
                />
              </div>
            )}

            <div className="flex flex-col gap-1 justify-end">
              {/* <VehicleDetails vehicle={OneFixedBookings.vehicle} /> */}
              <TripOrderDetails data={OneFixedBookings} />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading Data...</p>
      )}{" "}
    </div>
  );
}

export default Page;
