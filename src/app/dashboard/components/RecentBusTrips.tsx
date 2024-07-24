"use client";
import useFixedBooking from "@/lib/hooks/useFixedBookings";
import NoValueComponent from "./NoValueComponent";
import { Button } from "@/components/ui/button";
import ActiveTripCard from "../trips/components/ActiveTripCardSheet/ActiveTripCard";
import ActiveTripCardSheet from "../trips/components/ActiveTripCardSheet";
import Link from "next/link";
import TripCard from "../trips/components/TripSheet/TripsCard";
import TripSheet from "../trips/components/TripSheet";

function RecentBusTrips() {
  const { fixedBookings } = useFixedBooking();

  return (
    <div className="w-full">
      {fixedBookings && fixedBookings?.length > 1 && (
        <div className="flex flex-col items-start gap-5">
          <p className="text-primary font-bold">My Recent Bus Trips</p>
          <div className="hidden lg:grid grid-cols-7 gap-3 text-primary font-semibold px-5 w-full text-center">
            <div>Vehicle Number</div>

            <div>Bus Type</div>
            <div>Departure Time</div>

            <div>Date Created</div>
            <div>Status</div>
            <div>Paid</div>
          </div>
          <div className="w-full flex flex-col gap-5">
            {fixedBookings?.slice(0, 3).map((r) => (
              <TripSheet key={r?.id} fixedbooking={r} />
            ))}
          </div>
          <Link href={"/dashboard/trips"}>
            <Button variant={"link"}>View All Recent Trips</Button>
          </Link>
        </div>
      )}
      {(!fixedBookings || fixedBookings?.length < 1) && (
        <div className="flex flex-col gap-5 items-start w-full">
          <p>My Recent Trips</p>

          <NoValueComponent text="No Trips yet" />
        </div>
      )}
    </div>
  );
}

export default RecentBusTrips;
