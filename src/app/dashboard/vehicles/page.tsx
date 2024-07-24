"use client";
import useGetFlexibleBookings from "@/lib/hooks/useGetFlexibleBookings";
import FlexibleBookingsCard from "./components/FlexibleBookingModal/FlexibleBookingsCard";
import FlexibleBookingModal from "./components/FlexibleBookingModal";

function Vehicles() {
  const { flexibleBookings, isflexibleBookingsLoading } =
    useGetFlexibleBookings();
  return (
    <div className="flex flex-col gap-5 md:px-5">
      <p className="text-2xl text-primary font-bold">My Vehicles</p>
      <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-5">
        {flexibleBookings?.map((r) => (
          <FlexibleBookingModal key={r?.id} flexibleBooking={r} />
        ))}
      </div>
      {isflexibleBookingsLoading && <p>Loading Vehicles</p>}
    </div>
  );
}

export default Vehicles;
