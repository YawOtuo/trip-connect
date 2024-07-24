"use client";

import CheckoutButton from "@/components/CheckoutButton/CheckoutButton";
import useFlexibleBookings from "@/lib/hooks/useFlexibleBookings";
import useGetFlexibleBookings from "@/lib/hooks/useGetFlexibleBookings";
import Image from "next/image";
import useVehicles from "../useVehicles";
import { TbCoins } from "react-icons/tb";
import { FaLongArrowAltRight } from "react-icons/fa";

type Props = {
  params: { id: number };
};
function Page({ params }: Props) {
  const { OneFlexibleBookings } = useGetFlexibleBookings(params?.id);
  const { handlePayment } = useVehicles();
  return (
    <div className="flex flex-col gap-1 flex-wrap">
      {OneFlexibleBookings ? (
        <div>
          {OneFlexibleBookings && (
            <div className="relative aspect-[3/2] w-full  lg:w-[50vw] overflow-hidden rounded-md">
              <Image
                fill
                objectFit="cover"
                alt={OneFlexibleBookings.vehicle.name}
                src={`https://res.cloudinary.com/daurieb51/${OneFlexibleBookings.vehicle.images?.[0]?.image}`}
              />
            </div>
          )}

          <div>
            <p className="text-sm"> Booked on:{OneFlexibleBookings.created_at}</p>
          </div>

          <div className="flex flex-col items-start gap-1">
            Booked From :
            <div className="flex items-center gap-3 flex-wrap">
              <p>{OneFlexibleBookings.start_date}</p>
              <FaLongArrowAltRight />
              <p> {OneFlexibleBookings.end_date}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {" "}
            <TbCoins />
            <p>{OneFlexibleBookings.cost}</p>
            {OneFlexibleBookings.vehicle.name}
          </div>

          <div>
            <div className="flex flex-col h-fit">
              <CheckoutButton
                onClick={() =>
                  handlePayment(
                    OneFlexibleBookings.cost,
                    OneFlexibleBookings.id
                  )
                }
              />
            </div>{" "}
          </div>
        </div>
      ) : (
        <p>Loading Data...</p>
      )}{" "}
    </div>
  );
}

export default Page;
