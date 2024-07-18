"use client";
import useGetFlexibleBookings from "@/lib/hooks/useGetFlexibleBookings";
import FlexibleBookingsCard from "./components/FlexibleBookingsCard";

function Vehicles() {
  const { flexibleBookings, isflexibleBookingsLoading } =
    useGetFlexibleBookings();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-5">
        {flexibleBookings?.map((r) => (
          <FlexibleBookingsCard key={r?.id} booking={r} />
        ))}
      </div>
      {isflexibleBookingsLoading && <p>Loading Vehicles</p>}
    </div>
  );
}

export default Vehicles;
