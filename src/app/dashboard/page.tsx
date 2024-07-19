import ActiveVehicleHires from "./components/ActiveVehicleHires";
import PendingBusTrips from "./components/PendingBusTrips";
import RecentBusTrips from "./components/RecentBusTrips";
import Welcome from "./components/Welcome";

function Page() {
  return (
    <div className="flex flex-col gap-5">
      <ActiveVehicleHires />
      <Welcome />

      <PendingBusTrips />
      <RecentBusTrips />
    </div>
  );
}

export default Page;
