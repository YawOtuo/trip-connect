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
    <>
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
            <p> Booked on:{OneFlexibleBookings.created_at}</p>
          </div>
          <div className="flex items-center gap-5">
            Booked From :<p>{OneFlexibleBookings.start_date}</p>
            <FaLongArrowAltRight />
            <p> {OneFlexibleBookings.end_date}</p>
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
    </>
  );
}

export default Page;
