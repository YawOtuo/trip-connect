"use client";
import useFixedBooking from "@/lib/hooks/useFixedBookings";
import TripCard from "./components/TripsCard";

function Page() {
  const { fixedBookings, isFixedBookingsLoading } = useFixedBooking();
  return (
    <div className="flex flex-col gap-3">
      My Trips
      <div className="hidden lg:grid grid-cols-5 gap-3 text-primary font-semibold">
        <div>Departure Time</div>
        <div>Bus Type</div>
        <div>Vehicle Number</div>
        <div>Date Created</div>
        <div>Status</div>
      </div>
      <div className="flex flex-col gap-5">
        {fixedBookings?.map((r) => (
          <TripCard key={r?.id} fixedbooking={r} />
        ))}
      </div>
      {isFixedBookingsLoading && <p>Loading fixed bookingss</p>}
    </div>
  );
}

export default Page;
