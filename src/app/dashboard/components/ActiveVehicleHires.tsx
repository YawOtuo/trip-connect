"use client";
import useGetFlexibleBookings from "@/lib/hooks/useGetFlexibleBookings";
import NoValueComponent from "./NoValueComponent";
import FlexibleBookingsCard from "../vehicles/components/FlexibleBookingsCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ActiveVehicleHires() {
  const { flexibleBookings } = useGetFlexibleBookings();
  return (
    <div>
      {flexibleBookings && flexibleBookings?.length > 1 && (
        <div className="flex flex-col gap-5 items-start">
          <p className="text-primary font-bold">My Vehicles</p>
          <div className="grid grid-cols-1 md:grid-cols-3  2xl:grid-cols-4 gap-5">
            {flexibleBookings?.slice(0, 3).map((r) => (
              <FlexibleBookingsCard key={r?.id} booking={r} />
            ))}
          </div>
          <Link href={"/dashboard/vehicles"}>
            <Button variant={"link"}>View All</Button>
          </Link>{" "}
        </div>
      )}
    </div>
  );
}

export default ActiveVehicleHires;
