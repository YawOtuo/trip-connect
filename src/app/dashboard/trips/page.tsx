"use client";
import useFixedBooking from "@/lib/hooks/useFixedBookings";
import TripCard from "./components/TripSheet/TripsCard";
import TripSheet from "./components/TripSheet";

function Page() {
  const { fixedBookings, isFixedBookingsLoading } = useFixedBooking();
  return (
    <div className="flex flex-col gap-3">
      <p className="text-2xl font-bold text-primary"> My Trips</p>
      {fixedBookings && (
        <div className="flex flex-col gap-4">
          <div className="hidden lg:grid grid-cols-6 gap-3 text-primary font-semibold px-5 items-center justify-center text-center">
            <div>Vehicle Number</div>

            <div>Bus Type</div>
            <div>Departure Time</div>

            <div>Date Created</div>
            <div>Status</div>
            <div>Paid</div>

          </div>
          <div className="flex flex-col gap-5">
            {fixedBookings?.map((r) => (
              <TripSheet key={r?.id} fixedbooking={r} />
            ))}
          </div>
        </div>
      )}
      {!fixedBookings && isFixedBookingsLoading && <p>Loading your bus trips...</p>}
    </div>
  );
}

export default Page;
