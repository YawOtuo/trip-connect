"use client";

import CheckoutButton from "@/components/CheckoutButton/CheckoutButton";
import useFlexibleBookings from "@/lib/hooks/useFlexibleBookings";
import useGetFlexibleBookings from "@/lib/hooks/useGetFlexibleBookings";
import Image from "next/image";
import useVehicles from "../useVehicles";

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
            {OneFlexibleBookings.cost}
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
