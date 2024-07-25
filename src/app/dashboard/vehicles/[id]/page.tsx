"use client";

import CheckoutButton from "@/components/CheckoutButton/CheckoutButton";
import useFlexibleBookings from "@/lib/hooks/useFlexibleBookings";
import useGetFlexibleBookings from "@/lib/hooks/useGetFlexibleBookings";
import Image from "next/image";
import useVehicles from "../useVehicles";
import { TbCoins } from "react-icons/tb";
import { FaLongArrowAltRight } from "react-icons/fa";
import VehicleDetails from "./components/VehicleDetails";
import VehicleOrderDetails from "./components/VehicleOrderDetails";

type Props = {
  params: { id: number };
};
function Page({ params }: Props) {
  const { OneFlexibleBookings } = useGetFlexibleBookings(params?.id);
  const { handlePayment } = useVehicles();
  return (
    <div className="flex flex-col gap-1 justify-center items-center flex-wrap h-full">
      {OneFlexibleBookings ? (
        <div className="flex flex-col gap-5 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full w-full">
            {OneFlexibleBookings && (
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border-2">
                <Image
                  fill
                  objectFit="cover"
                  alt={OneFlexibleBookings.vehicle.name}
                  src={`https://res.cloudinary.com/daurieb51/${OneFlexibleBookings.vehicle.images?.[0]?.image}`}
                />
              </div>
            )}

            <div className="flex flex-col gap-1 justify-end">
              <VehicleDetails vehicle={OneFlexibleBookings.vehicle} />
              <VehicleOrderDetails data={OneFlexibleBookings} />
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
