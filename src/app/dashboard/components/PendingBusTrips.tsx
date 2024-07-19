"use client";
import useFixedBooking from "@/lib/hooks/useFixedBookings";
import NoValueComponent from "./NoValueComponent";
import TripCard from "../trips/components/TripSheet/TripsCard";
import { Button } from "@/components/ui/button";
import ActiveTripCard from "../trips/components/ActiveTripCardSheet/ActiveTripCard";
import ActiveTripCardSheet from "../trips/components/ActiveTripCardSheet";
import Link from "next/link";

function PendingBusTrips() {
  const { fixedBookings } = useFixedBooking();
  return (
    <div>
      {fixedBookings && fixedBookings?.length > 1 && (
        <div className="flex flex-col items-start gap-5">
          <p className="text-primary font-bold">My Pending Bus Trips</p>
          <div className="grid grid-cols-1 md:grid-cols-3  2xl:grid-cols-4 gap-5">
            {fixedBookings?.slice(0, 3).map((r) => (
              <ActiveTripCardSheet key={r?.id} fixedbooking={r} />
            ))}
          </div>
          <Link href={"/dashboard/trips"}>
            {" "}
            <Button variant={"link"}>View All</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default PendingBusTrips;
